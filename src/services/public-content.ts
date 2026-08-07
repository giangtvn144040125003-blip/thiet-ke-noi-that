import { PublishStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

type QueryResult<T> = { data: T; unavailable: boolean };
const QUERY_TIMEOUT_MS = 2_500;

async function safeQuery<T>(query: () => Promise<T>, fallback: T): Promise<QueryResult<T>> {
  try {
    const result = await Promise.race([
      query(),
      new Promise<T>((_, reject) => setTimeout(() => reject(new Error("Database query timeout")), QUERY_TIMEOUT_MS)),
    ]);
    return { data: result, unavailable: false };
  } catch {
    return { data: fallback, unavailable: true };
  }
}

export function getPublishedServices() {
  return safeQuery(() => prisma.service.findMany({ where: { status: PublishStatus.PUBLISHED }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] }), []);
}

export function getPublishedPackages() {
  return safeQuery(() => prisma.investmentPackage.findMany({ where: { status: PublishStatus.PUBLISHED }, orderBy: [{ featured: "desc" }, { order: "asc" }] }), []);
}

export function getPublishedProjects() {
  return safeQuery(() => prisma.project.findMany({ where: { status: PublishStatus.PUBLISHED }, orderBy: { completedAt: "desc" } }), []);
}

export function getPublishedPosts() {
  return safeQuery(() => prisma.post.findMany({ where: { status: PublishStatus.PUBLISHED }, orderBy: { publishedAt: "desc" } }), []);
}

export function getPublishedFaqs() {
  return safeQuery(() => prisma.faq.findMany({ where: { status: PublishStatus.PUBLISHED }, orderBy: { order: "asc" } }), []);
}

export function getServiceBySlug(slug: string) {
  return safeQuery(() => prisma.service.findFirst({ where: { slug, status: PublishStatus.PUBLISHED } }), null);
}

export function getProjectBySlug(slug: string) {
  return safeQuery(() => prisma.project.findFirst({ where: { slug, status: PublishStatus.PUBLISHED } }), null);
}

export function getPostBySlug(slug: string) {
  return safeQuery(() => prisma.post.findFirst({ where: { slug, status: PublishStatus.PUBLISHED } }), null);
}
