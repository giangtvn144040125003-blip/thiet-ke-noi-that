import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ContentState } from "@/components/content-state";
import { getPublishedServices } from "@/services/public-content";
import { createPageMetadata } from "@/lib/seo";
import { serviceCanonicalPath } from "@/lib/seo-guides";
import styles from "../showcase.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = createPageMetadata({ title: "Dịch vụ thiết kế, thi công & setup quán net", description: "Giải pháp tư vấn đầu tư, thiết kế 2D/3D và thi công setup quán net, Cyber Gaming tại Đà Nẵng.", path: "/dich-vu" });

export default async function ServicesPage() {
  const result = await getPublishedServices();
  const services = result.data;
  return <><SiteHeader /><main className="content-page"><p className="eyebrow">Năng lực triển khai</p><h1>Dịch vụ thiết kế, thi công & setup quán net.</h1><p className="page-lede">Chọn giải pháp trọn gói hoặc từng hạng mục phù hợp với quy mô, mặt bằng và mục tiêu vận hành của bạn.</p>{services.length ? <div className={styles.grid}>{services.map((service, index) => <article className={styles.card} key={service.id}><div className={styles.image}><Image src={service.coverImage ?? "/images/project-esports-hd-v3.webp"} alt={`Hình ảnh minh họa ${service.name}`} fill quality={90} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className={styles.body}><span className={styles.tag}>Dịch vụ 0{index + 1}</span><h2>{service.name}</h2><p className={styles.excerpt}>{service.summary}</p><Link className={styles.link} href={serviceCanonicalPath(service.slug)}>Xem hạng mục triển khai <span>↗</span></Link></div></article>)}</div> : <ContentState unavailable={result.unavailable} label="dịch vụ" />}<p className="page-lede"><Link className="text-link" href="/nang-cap-cai-tao-quan-net">Tư vấn nâng cấp, cải tạo quán net ↗</Link> · <Link className="text-link" href="/toi-uu-van-hanh-quan-net">Tối ưu vận hành quán net ↗</Link></p></main><SiteFooter /></>;
}


