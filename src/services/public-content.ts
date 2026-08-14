import type { ContentFaq, ContentPackage, ContentPost, ContentProject, ContentService } from "@/lib/content-types";

type QueryResult<T> = { data: T; unavailable: boolean };
type ServiceRow = { id: string; slug: string; name: string; summary: string; content: string | null; benefits: unknown; deliverables: unknown; cover_image: string | null };
type PackageRow = { id: string; slug: string; name: string; summary: string; machine_min: number; machine_max: number; price_from: number | null; price_to: number | null; features: unknown; featured: boolean };
type ProjectRow = { id: string; slug: string; title: string; location: string | null; machine_count: number | null; category: string | null; duration: string | null; summary: string; content: string | null; cover_image: string | null };
type PostRow = { id: string; slug: string; title: string; excerpt: string; content: string | null; cover_image: string | null; category: string | null };
type FaqRow = { id: string; question: string; answer: string; category: string | null };

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

function toTextList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

async function queryRows<T>(resource: string): Promise<QueryResult<T[]>> {
  if (!supabaseUrl || !supabasePublishableKey) return { data: [], unavailable: true };
  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${resource}`, {
      headers: { apikey: supabasePublishableKey, Authorization: `Bearer ${supabasePublishableKey}` },
      cache: "no-store",
    });
    if (!response.ok) return { data: [], unavailable: true };
    const data: unknown = await response.json();
    return { data: Array.isArray(data) ? data as T[] : [], unavailable: false };
  } catch {
    return { data: [], unavailable: true };
  }
}

function mapService(row: ServiceRow): ContentService {
  return { id: row.id, slug: row.slug, name: row.name, summary: row.summary, content: row.content, benefits: toTextList(row.benefits), deliverables: toTextList(row.deliverables), coverImage: row.cover_image };
}
function mapPackage(row: PackageRow): ContentPackage {
  return { id: row.id, slug: row.slug, name: row.name, summary: row.summary, machineMin: row.machine_min, machineMax: row.machine_max, priceFrom: row.price_from, priceTo: row.price_to, features: toTextList(row.features), featured: row.featured };
}
function mapProject(row: ProjectRow): ContentProject {
  return { id: row.id, slug: row.slug, title: row.title, location: row.location, machineCount: row.machine_count, category: row.category, duration: row.duration, summary: row.summary, content: row.content, coverImage: row.cover_image };
}
function mapPost(row: PostRow): ContentPost {
  return { id: row.id, slug: row.slug, title: row.title, excerpt: row.excerpt, content: row.content, coverImage: row.cover_image, category: row.category };
}
function mapFaq(row: FaqRow): ContentFaq {
  return { id: row.id, question: row.question, answer: row.answer, category: row.category };
}

export async function getPublishedServices(): Promise<QueryResult<ContentService[]>> {
  const result = await queryRows<ServiceRow>("website_services?status=eq.PUBLISHED&order=display_order.asc,created_at.asc");
  return { data: result.data.map(mapService), unavailable: result.unavailable };
}
export async function getPublishedPackages(): Promise<QueryResult<ContentPackage[]>> {
  const result = await queryRows<PackageRow>("investment_packages?status=eq.PUBLISHED&order=featured.desc,display_order.asc,created_at.asc");
  return { data: result.data.map(mapPackage), unavailable: result.unavailable };
}
export async function getPublishedProjects(): Promise<QueryResult<ContentProject[]>> {
  const result = await queryRows<ProjectRow>("projects?status=eq.PUBLISHED&order=completed_at.desc");
  return { data: result.data.map(mapProject), unavailable: result.unavailable };
}
export async function getPublishedPosts(): Promise<QueryResult<ContentPost[]>> {
  const result = await queryRows<PostRow>("posts?status=eq.PUBLISHED&order=published_at.desc");
  return { data: result.data.map(mapPost), unavailable: result.unavailable };
}
export async function getPublishedFaqs(): Promise<QueryResult<ContentFaq[]>> {
  const result = await queryRows<FaqRow>("faqs?status=eq.PUBLISHED&order=display_order.asc");
  return { data: result.data.map(mapFaq), unavailable: result.unavailable };
}
export async function getServiceBySlug(slug: string): Promise<QueryResult<ContentService | null>> {
  const result = await queryRows<ServiceRow>(`website_services?status=eq.PUBLISHED&slug=eq.${encodeURIComponent(slug)}&limit=1`);
  return { data: result.data[0] ? mapService(result.data[0]) : null, unavailable: result.unavailable };
}
export async function getProjectBySlug(slug: string): Promise<QueryResult<ContentProject | null>> {
  const result = await queryRows<ProjectRow>(`projects?status=eq.PUBLISHED&slug=eq.${encodeURIComponent(slug)}&limit=1`);
  return { data: result.data[0] ? mapProject(result.data[0]) : null, unavailable: result.unavailable };
}
export async function getPostBySlug(slug: string): Promise<QueryResult<ContentPost | null>> {
  const result = await queryRows<PostRow>(`posts?status=eq.PUBLISHED&slug=eq.${encodeURIComponent(slug)}&limit=1`);
  return { data: result.data[0] ? mapPost(result.data[0]) : null, unavailable: result.unavailable };
}


