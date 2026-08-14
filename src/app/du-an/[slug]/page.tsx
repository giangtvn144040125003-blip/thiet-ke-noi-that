import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProjectBySlug } from "@/services/public-content";
import imageStyles from "../../detail-image.module.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);
  const project = result.data;
  return project ? { title: project.title, description: project.summary } : { title: "Dự án không tìm thấy" };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getProjectBySlug(slug);
  const project = result.data;
  if (!project) notFound();
  return <><SiteHeader /><main className="detail-page"><p className="eyebrow">{project.category ?? "Case study"}</p><h1>{project.title}</h1><p className="page-lede">{project.summary}</p><div className={imageStyles.image}><Image src={project.coverImage ?? "/images/project-esports-hd-v3.webp"} alt={`Hình ảnh ${project.title}`} fill quality={90} sizes="(max-width: 900px) 100vw, 900px" /></div><section className="facts"><span><b>Khu vực</b>{project.location ?? "Đang cập nhật"}</span><span><b>Quy mô</b>{project.machineCount ? `${project.machineCount} máy` : "Đang cập nhật"}</span><span><b>Thời gian</b>{project.duration ?? "Đang cập nhật"}</span></section>{project.content && <article className="article-body">{project.content}</article>}<Link className="button" href="/lien-he">Trao đổi dự án tương tự</Link></main><SiteFooter /></>;
}


