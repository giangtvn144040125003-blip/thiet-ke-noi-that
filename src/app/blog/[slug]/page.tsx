import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { showcasePosts } from "@/lib/showcase-content";
import { getPostBySlug } from "@/services/public-content";
import imageStyles from "../../detail-image.module.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getPostBySlug(slug);
  const post = result.data ?? showcasePosts.find((item) => item.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : { title: "Bài viết không tìm thấy" };
}

export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getPostBySlug(slug);
  const post = result.data ?? showcasePosts.find((item) => item.slug === slug);
  if (!post) notFound();
  return <><SiteHeader /><main className="detail-page"><p className="eyebrow">{post.category ?? "Bài viết"}</p><h1>{post.title}</h1><p className="page-lede">{post.excerpt}</p><div className={imageStyles.image}><Image src={post.coverImage ?? "/images/service-design-hd-v3.webp"} alt={`Ảnh minh họa ${post.title}`} fill quality={90} sizes="(max-width: 900px) 100vw, 900px" /></div>{post.content && <article className="article-body">{post.content}</article>}<Link className="text-link" href="/blog">← Quay lại Blog</Link></main><SiteFooter /></>;
}
