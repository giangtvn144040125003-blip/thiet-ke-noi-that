import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceCanonicalPath } from "@/lib/seo-guides";
import { getPublishedPosts, getPublishedServices } from "@/services/public-content";

const staticRoutes: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/dich-vu", changeFrequency: "monthly", priority: 0.9 },
  { path: "/goi-dau-tu", changeFrequency: "monthly", priority: 0.8 },
  { path: "/du-an", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/du-toan", changeFrequency: "monthly", priority: 0.7 },
  { path: "/nhan-bao-gia", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lien-he", changeFrequency: "yearly", priority: 0.6 },
  { path: "/gioi-thieu", changeFrequency: "yearly", priority: 0.5 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/nang-cap-cai-tao-quan-net", changeFrequency: "monthly", priority: 0.85 },
  { path: "/toi-uu-van-hanh-quan-net", changeFrequency: "monthly", priority: 0.8 },
  { path: "/chinh-sach-bao-mat", changeFrequency: "yearly", priority: 0.3 },
  { path: "/dieu-khoan", changeFrequency: "yearly", priority: 0.3 },
  { path: "/chinh-sach-bao-hanh", changeFrequency: "yearly", priority: 0.3 },
];
const seoLastModified = new Date("2026-08-17");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, posts] = await Promise.all([getPublishedServices(), getPublishedPosts()]);
  const staticEntries = staticRoutes.map((route) => ({ url: new URL(route.path, site.appUrl).toString(), lastModified: seoLastModified, changeFrequency: route.changeFrequency, priority: route.priority }));
  const serviceEntries = services.data.map((service) => ({ url: new URL(serviceCanonicalPath(service.slug), site.appUrl).toString(), lastModified: new Date(service.updatedAt), changeFrequency: "monthly" as const, priority: 0.9 }));
  const postEntries = posts.data.map((post) => ({ url: new URL(`/blog/${post.slug}`, site.appUrl).toString(), lastModified: new Date(post.updatedAt), changeFrequency: "monthly" as const, priority: 0.7 }));
  return [...staticEntries, ...serviceEntries, ...postEntries];
}


