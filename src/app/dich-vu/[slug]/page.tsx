import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { showcaseServices } from "@/lib/showcase-content";
import { getServiceBySlug } from "@/services/public-content";
import imageStyles from "../../detail-image.module.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getServiceBySlug(slug);
  const service = result.data ?? showcaseServices.find((item) => item.slug === slug);
  return service ? { title: service.name, description: service.summary } : { title: "Dịch vụ không tìm thấy" };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getServiceBySlug(slug);
  const service = result.data ?? showcaseServices.find((item) => item.slug === slug);
  if (!service) notFound();
  return <><SiteHeader /><main className="detail-page"><p className="eyebrow">Dịch vụ</p><h1>{service.name}</h1><p className="page-lede">{service.summary}</p><div className={imageStyles.image}><Image src="/images/service-design-hd-v3.webp" alt={`Hình ảnh minh họa ${service.name}`} fill quality={90} sizes="(max-width: 900px) 100vw, 900px" /></div><section><h2>Lợi ích chính</h2><ul>{service.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></section><section><h2>Hạng mục bàn giao</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section><Link className="button" href="/lien-he">Nhận tư vấn cho dự án</Link></main><SiteFooter /></>;
}
