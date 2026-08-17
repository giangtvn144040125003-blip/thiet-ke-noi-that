import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { serviceGuides } from "@/lib/seo-guides";
import { getServiceBySlug } from "@/services/public-content";
import imageStyles from "@/app/detail-image.module.css";

type SeoServicePageProps = { slug: string; canonicalPath: string; label: string };

export async function SeoServicePage({ slug, canonicalPath, label }: SeoServicePageProps) {
  const result = await getServiceBySlug(slug);
  const service = result.data;
  const guide = serviceGuides[slug];
  if (!service || !guide) notFound();
  const crumbs = [{ name: "Trang chủ", path: "/" }, { name: "Dịch vụ", path: "/dich-vu" }, { name: label, path: canonicalPath }];
  const schema = [
    { "@context": "https://schema.org", "@type": "WebPage", "@id": absoluteUrl(`${canonicalPath}#webpage`), url: absoluteUrl(canonicalPath), name: guide.seoTitle, description: guide.description, dateModified: service.updatedAt, inLanguage: "vi-VN" },
    { "@context": "https://schema.org", "@type": "Service", "@id": absoluteUrl(`${canonicalPath}#service`), name: service.name, serviceType: label, description: guide.description, url: absoluteUrl(canonicalPath), provider: { "@id": absoluteUrl("/#business") }, areaServed: ["Đà Nẵng", "Miền Trung"] },
    breadcrumbSchema(crumbs),
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: guide.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ];
  return <><SiteHeader /><StructuredData data={schema} /><main className="detail-page"><Breadcrumbs items={[{ name: "Trang chủ", href: "/" }, { name: "Dịch vụ", href: "/dich-vu" }, { name: label }]} /><p className="eyebrow">Dịch vụ tại Đà Nẵng & Miền Trung</p><h1>{guide.seoTitle}</h1><p className="page-lede">{guide.answer}</p><section aria-labelledby="key-facts"><h2 id="key-facts">Thông tin chính</h2><dl className="key-facts"><div><dt>Dịch vụ</dt><dd>{label}</dd></div><div><dt>Khu vực phục vụ</dt><dd>Đà Nẵng và Miền Trung</dd></div><div><dt>Đầu vào cần có</dt><dd>Mặt bằng, quy mô, nhu cầu và ngân sách dự kiến</dd></div><div><dt>Ngày cập nhật</dt><dd>{new Intl.DateTimeFormat("vi-VN").format(new Date(service.updatedAt))}</dd></div></dl></section><figure className="service-figure"><div className={imageStyles.image}><Image src={service.coverImage ?? "/images/service-design-hd-v3.webp"} alt={`Ảnh minh họa cho ${label.toLocaleLowerCase("vi-VN")}`} fill quality={90} sizes="(max-width: 900px) 100vw, 900px" /></div><figcaption>Hình ảnh minh họa định hướng không gian; không được dùng như bằng chứng dự án đã bàn giao.</figcaption></figure><section><h2>Dịch vụ phù hợp với ai?</h2><ul>{guide.audience.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Phạm vi hỗ trợ</h2><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Bài toán GiangCuon Gaming hỗ trợ giải quyết</h2><ul>{guide.problems.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Quy trình triển khai</h2><ol>{guide.process.map((item) => <li key={item}>{item}</li>)}</ol></section><section><h2>Thông tin cần chuẩn bị</h2><ul>{guide.inputs.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Chi phí phụ thuộc vào những yếu tố nào?</h2><p>Không có một mức giá cố định cho mọi phòng máy. Khoản đầu tư được xác định sau khi xem xét các yếu tố dưới đây.</p><ul>{guide.costFactors.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Những rủi ro thường gặp</h2><ul>{guide.pitfalls.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>Câu hỏi thường gặp</h2><div className="faq-list">{guide.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section><section><h2>Nội dung liên quan</h2><ul>{guide.related.map((item) => <li key={item.href}><Link className="text-link" href={item.href}>{item.label}</Link></li>)}</ul></section><p className="content-review">Nội dung do GiangCuon Gaming biên tập và kiểm tra. Các con số đầu tư, tiến độ hoặc hiệu quả chỉ được xác nhận sau khi có dữ liệu dự án thực tế.</p><Link className="button" href="/lien-he">Nhận tư vấn cho dự án <span>↗</span></Link></main><SiteFooter /></>;
}


