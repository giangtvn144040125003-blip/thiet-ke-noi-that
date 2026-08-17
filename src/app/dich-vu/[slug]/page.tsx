import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { serviceGuides } from "@/lib/seo-guides";
import { getServiceBySlug } from "@/services/public-content";
import imageStyles from "../../detail-image.module.css";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const result = await getServiceBySlug(slug);
  const service = result.data;
  const guide = serviceGuides[slug];
  return service ? createPageMetadata({ title: guide?.seoTitle ?? service.name, description: guide?.description ?? service.summary, path: `/dich-vu/${service.slug}`, image: service.coverImage, imageAlt: `Minh họa dịch vụ ${service.name}` }) : { title: "Dịch vụ không tìm thấy", robots: { index: false, follow: false } };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await getServiceBySlug(slug);
  const service = result.data;
  if (!service) notFound();
  const guide = serviceGuides[service.slug];
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.summary, provider: { "@type": "LocalBusiness", name: "GiangCuon Gaming" }, areaServed: "Đà Nẵng" },
    breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Dịch vụ", path: "/dich-vu" }, { name: service.name, path: `/dich-vu/${service.slug}` }]),
    ...(guide ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guide.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }] : []),
  ];
  return <><SiteHeader /><StructuredData data={schema} /><main className="detail-page"><p className="eyebrow">Dịch vụ</p><h1>{guide?.seoTitle ?? service.name}</h1><p className="page-lede">{guide?.answer ?? service.summary}</p><div className={imageStyles.image}><Image src={service.coverImage ?? "/images/service-design-hd-v3.webp"} alt={`Hình ảnh minh họa ${service.name}`} fill quality={90} sizes="(max-width: 900px) 100vw, 900px" /></div>{guide && <><section><h2>Dịch vụ phù hợp với ai?</h2><ul>{guide.audience.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Bài toán GiangCuon Gaming hỗ trợ giải quyết</h2><ul>{guide.problems.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Quy trình triển khai</h2><ol>{guide.process.map((item) => <li key={item}>{item}</li>)}</ol></section><section><h2>Thông tin cần chuẩn bị</h2><ul>{guide.inputs.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Chi phí phụ thuộc vào gì?</h2><p>Không có một mức giá cố định cho mọi phòng máy. Khoản đầu tư được xác định sau khi xem xét các yếu tố dưới đây.</p><ul>{guide.costFactors.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Lỗi thường gặp khi triển khai</h2><ul>{guide.pitfalls.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Câu hỏi thường gặp</h2><div className="faq-list">{guide.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section><section><h2>Nội dung liên quan</h2><ul>{guide.related.map((item) => <li key={item.href}><Link className="text-link" href={item.href}>{item.label}</Link></li>)}</ul></section></>}<section><h2>Hạng mục bàn giao</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section><Link className="button" href="/lien-he">Nhận tư vấn cho dự án</Link></main><SiteFooter /></>;
}


