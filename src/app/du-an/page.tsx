import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ContentState } from "@/components/content-state";
import { getPublishedProjects } from "@/services/public-content";
import { createPageMetadata } from "@/lib/seo";
import styles from "./projects.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = createPageMetadata({ title: "Phương án thiết kế phòng máy & Cyber Gaming", description: "Tham khảo các phương án minh họa về quy hoạch, thiết kế và triển khai không gian phòng máy của GiangCuon Gaming.", path: "/du-an" });

export default async function ProjectsPage() {
  const result = await getPublishedProjects();
  const projects = result.data;

  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <header className={styles.intro}>
          <p>Phương án minh họa</p>
          <h1>Ý tưởng thiết kế phòng máy cho trải nghiệm thật.</h1>
        </header>
        {projects.length ? <section className={styles.gallery} aria-label="Các dự án tiêu biểu">
          {projects.map((project, index) => (
            <article className={styles.project} key={project.id}>
              <Image
                src={project.coverImage ?? "/images/project-esports-hd-v3.webp"}
                alt={`Hình ảnh dự án ${project.title}`}
                fill
                priority={index < 2}
                quality={100}
                unoptimized
                sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 720px"
              />
              <div className={styles.shade} />
              <div className={styles.projectInfo}>
                <span>{project.category ?? "Dự án tiêu biểu"}</span>
                <h2>{project.title}</h2>
                <p>{[project.location, project.machineCount ? `${project.machineCount} máy` : null].filter(Boolean).join(" · ")}</p>
                <Link href={`/du-an/${project.slug}`}>Xem thêm <b>↗</b></Link>
              </div>
            </article>
          ))}
        </section> : <ContentState unavailable={result.unavailable} label="dự án" />}
      </main>
      <SiteFooter />
    </>
  );
}


