import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { blogGuides } from "@/lib/seo-guides";
import { getPostBySlug } from "@/services/public-content";
import imageStyles from "../../detail-image.module.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getPostBySlug(slug);
  const post = result.data;
  return post ? createPageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.coverImage, imageAlt: `Ảnh minh họa bài viết ${post.title}` }) : { title: "Bài viết không tìm thấy", robots: { index: false, follow: false } };
}

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getPostBySlug(slug);
  const post = result.data;
  if (!post) notFound();
  const guide = blogGuides[post.slug];
  const schema = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.excerpt, image: absoluteUrl(post.coverImage ?? "/images/service-design-hd-v3.webp"), mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`), datePublished: post.publishedAt ?? post.updatedAt, dateModified: post.updatedAt, author: { "@type": "Organization", name: "GiangCuon Gaming" }, publisher: { "@type": "Organization", name: "GiangCuon Gaming", logo: { "@type": "ImageObject", url: absoluteUrl("/images/giangcuon-gaming-logo-v3.png") } } },
    breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]),
  ];
  return <><SiteHeader /><StructuredData data={schema} /><main className="detail-page"><p className="eyebrow">{post.category ?? "Bài viết"}</p><h1>{post.title}</h1><p className="page-lede">{guide?.answer ?? post.excerpt}</p><div className={imageStyles.image}><Image src={post.coverImage ?? "/images/service-design-hd-v3.webp"} alt={`Ảnh minh họa bài viết ${post.title}`} fill quality={90} sizes="(max-width: 900px) 100vw, 900px" /></div>{post.content && <article className="article-body">{post.content}</article>}{guide && <article className="article-body">{guide.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.text}</p>{section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}<section><h2>Liên kết hữu ích</h2><ul>{guide.related.map((item) => <li key={item.href}><Link className="text-link" href={item.href}>{item.label}</Link></li>)}</ul></section></article>}<p className="page-lede">Nội dung mang tính tham khảo; phương án đầu tư cần được kiểm tra theo mặt bằng và nhu cầu vận hành thực tế.</p><Link className="text-link" href="/blog">← Quay lại Blog</Link></main><SiteFooter /></>;
}


