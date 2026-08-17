import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { getProjectBySlug } from "@/services/public-content";
import imageStyles from "../../detail-image.module.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);
  const project = result.data;
  return project ? createPageMetadata({ title: `${project.title} — phương án minh họa`, description: project.summary, path: `/du-an/${project.slug}`, image: project.coverImage, imageAlt: `Phương án minh họa ${project.title}`, robots: { index: false, follow: true } }) : { title: "Dự án không tìm thấy", robots: { index: false, follow: false } };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);
  const project = result.data;
  if (!project) notFound();
  const schema = breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Phương án minh họa", path: "/du-an" }, { name: project.title, path: `/du-an/${project.slug}` }]);
  return <><SiteHeader /><StructuredData data={schema} /><main className="detail-page"><p className="eyebrow">{project.category ?? "Phương án minh họa"}</p><h1>{project.title}</h1><p className="page-lede">{project.summary}</p><div className={imageStyles.image}><Image src={project.coverImage ?? "/images/project-esports-hd-v3.webp"} alt={`Hình ảnh minh họa ${project.title}`} fill quality={90} sizes="(max-width: 900px) 100vw, 900px" /></div><section><h2>Minh bạch nội dung</h2><p>Đây là phương án minh họa để tham khảo cách tổ chức không gian; không được trình bày là công trình khách hàng đã xác minh.</p></section><section className="facts"><span><b>Khu vực tham khảo</b>{project.location ?? "Đang cập nhật"}</span><span><b>Quy mô tham khảo</b>{project.machineCount ? `${project.machineCount} máy` : "Đang cập nhật"}</span><span><b>Thời gian dự kiến</b>{project.duration ?? "Đang cập nhật"}</span></section>{project.content && <article className="article-body">{project.content}</article>}<section><h2>Dịch vụ liên quan</h2><ul><li><Link className="text-link" href="/thiet-ke-quan-net">Thiết kế quán net 2D/3D</Link></li><li><Link className="text-link" href="/thi-cong-setup-quan-net">Thi công và setup phòng máy</Link></li></ul></section><Link className="button" href="/lien-he">Trao đổi phương án tương tự</Link></main><SiteFooter /></>;
}


