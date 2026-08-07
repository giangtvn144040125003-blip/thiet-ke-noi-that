import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { showcaseProjects } from "@/lib/showcase-content";
import { getPublishedProjects } from "@/services/public-content";
import styles from "../showcase.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Dự án", description: "Các dự án phòng máy do GiangCuon Gaming triển khai." };

const fallbackImages = showcaseProjects.map((item) => item.coverImage);

export default async function ProjectsPage() {
  const result = await getPublishedProjects();
  const projects = result.data.length ? result.data : showcaseProjects;
  return <><SiteHeader /><main className="content-page"><p className="eyebrow">Dự án</p><h1>Không gian được xây dựng cho trải nghiệm thật.</h1><p className="page-lede">Các case study, hình ảnh không gian và góc nhìn triển khai từ GiangCuon Gaming.</p><div className={styles.grid}>{projects.map((project, index) => <article className={styles.card} key={project.id}><div className={styles.image}><Image src={project.coverImage ?? fallbackImages[index % fallbackImages.length]} alt={`Hình ảnh dự án ${project.title}`} fill quality={90} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className={styles.body}><span className={styles.tag}>{project.category ?? "Dự án"}</span><h2>{project.title}</h2><p className={styles.meta}>{[project.location, project.machineCount ? `${project.machineCount} máy` : null, project.duration].filter(Boolean).join(" · ")}</p><p className={styles.excerpt}>{project.summary}</p><Link className={styles.link} href={`/du-an/${project.slug}`}>Xem case study <span>↗</span></Link></div></article>)}</div></main><SiteFooter /></>;
}
