import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(100),
  phone: z.string().trim().max(30).regex(/^(?:\+84|0)(?:\d[ .-]?){8,10}\d$/, "Số điện thoại chưa hợp lệ"),
  email: z.string().trim().max(254).email("Email chưa hợp lệ").optional().or(z.literal("")),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().max(2000).optional(),
  website: z.string().max(0).optional(),
});

export const estimateSchema = z.object({
  areaSqm: z.coerce.number().int().min(20).max(5000),
  machineCount: z.coerce.number().int().min(10).max(500),
  segment: z.enum(["standard", "gaming", "premium"]),
  configurationLevel: z.enum(["entry", "balanced", "high"]),
  includeInterior: z.boolean(),
  includeAircon: z.boolean(),
  includeCamera: z.boolean(),
  province: z.string().trim().max(120).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type EstimateInput = z.infer<typeof estimateSchema>;
