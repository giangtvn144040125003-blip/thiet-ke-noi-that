import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { takeRateLimit } from "@/lib/rate-limit";
import { leadSchema } from "@/lib/validation";
import { createLeadCode, normalizeEmail, normalizeVietnamesePhone } from "@/lib/lead";

type ApiError = { success: false; error: { code: string; message: string } };
const errorResponse = (status: number, code: string, message: string) => NextResponse.json<ApiError>({ success: false, error: { code, message } }, { status });

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() ?? "unknown";
  const limit = takeRateLimit(`lead:${ip}`);
  if (!limit.allowed) return errorResponse(429, "RATE_LIMITED", "Bạn đã gửi quá nhiều yêu cầu. Vui lòng thử lại sau.");

  const body: unknown = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) return errorResponse(400, "VALIDATION_ERROR", "Dữ liệu chưa hợp lệ.");
  if (parsed.data.website) return NextResponse.json({ success: true, data: { code: "" } }, { status: 201 });

  const { website: _website, ...lead } = parsed.data;
  const phoneNormalized = normalizeVietnamesePhone(lead.phone);
  const emailNormalized = normalizeEmail(lead.email);
  try {
    const existing = await prisma.lead.findUnique({ where: { phoneNormalized }, select: { code: true } });
    if (existing) return NextResponse.json({ success: true, data: { code: existing.code, duplicate: true } }, { status: 200 });
    for (let attempt = 0; attempt < 4; attempt += 1) {
      const code = createLeadCode();
      try {
        await prisma.lead.create({ data: { ...lead, email: emailNormalized, phoneNormalized, emailNormalized, code, source: "website" } });
        return NextResponse.json({ success: true, data: { code, duplicate: false } }, { status: 201 });
      } catch (error) {
        const prismaError = error as { code?: unknown; meta?: { target?: unknown } };
        const target = Array.isArray(prismaError.meta?.target) ? prismaError.meta.target : [];
        const isUniqueViolation = prismaError.code === "P2002";
        if (isUniqueViolation && target.includes("phoneNormalized")) {
          const duplicate = await prisma.lead.findUnique({ where: { phoneNormalized }, select: { code: true } });
          if (duplicate) return NextResponse.json({ success: true, data: { code: duplicate.code, duplicate: true } }, { status: 200 });
        }
        const isCodeCollision = isUniqueViolation && target.includes("code");
        if (isCodeCollision) continue;
        throw error;
      }
    }
    return errorResponse(503, "LEAD_CODE_UNAVAILABLE", "Hệ thống đang bận. Vui lòng thử lại sau.");
  } catch {
    return errorResponse(500, "LEAD_CREATE_FAILED", "Không thể gửi yêu cầu lúc này. Vui lòng gọi [HOTLINE].");
  }
}
