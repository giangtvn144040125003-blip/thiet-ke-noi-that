import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { showcasePosts } from "@/lib/showcase-content";
import { getPublishedPosts } from "@/services/public-content";
import styles from "../showcase.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Blog", description: "Kiến thức đầu tư, thiết kế và vận hành phòng máy." };

const fallbackImages = showcasePosts.map((item) => item.coverImage);

export default async function BlogPage() {
  const result = await getPublishedPosts();
  const posts = result.data.length ? result.data : showcasePosts;
  return <><SiteHeader /><main className="content-page"><p className="eyebrow">Bài viết & vlog</p><h1>Thông tin thực tế cho quyết định đầu tư tốt hơn.</h1><p className="page-lede">Các bài viết ngắn, hình ảnh minh họa và góc nhìn về đầu tư, thiết kế, vận hành phòng máy.</p><div className={styles.grid}>{posts.map((post, index) => <article className={styles.card} key={post.id}><div className={styles.image}><Image src={post.coverImage ?? fallbackImages[index % fallbackImages.length]} alt={`Ảnh minh họa bài viết ${post.title}`} fill quality={90} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className={styles.body}><span className={styles.tag}>{post.category ?? "Bài viết"}</span><h2>{post.title}</h2><p className={styles.excerpt}>{post.excerpt}</p><Link className={styles.link} href={`/blog/${post.slug}`}>Đọc bài viết <span>↗</span></Link></div></article>)}</div></main><SiteFooter /></>;
}
