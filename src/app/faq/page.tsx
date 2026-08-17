import type { Metadata } from "next";
import { ContentState } from "@/components/content-state";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPublishedFaqs } from "@/services/public-content";
import { createPageMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";

export const dynamic = "force-dynamic";
export const metadata: Metadata = createPageMetadata({ title: "Câu hỏi thường gặp khi mở quán net", description: "Giải đáp các câu hỏi về đầu tư, thiết kế, setup, chi phí và vận hành phòng máy, Cyber Gaming.", path: "/faq" });

export default async function FaqPage() {
  const result = await getPublishedFaqs();
  const faqSchema = result.data.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: result.data.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } : null;
  return <><SiteHeader />{faqSchema && <StructuredData data={faqSchema} />}<main className="content-page"><p className="eyebrow">FAQ</p><h1>Giải đáp trước khi bắt đầu đầu tư.</h1><p className="page-lede">Những câu hỏi thường gặp sẽ được cập nhật từ đội ngũ tư vấn.</p>{result.data.length ? <div className="faq-list">{result.data.map((faq) => <details key={faq.id}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div> : <ContentState unavailable={result.unavailable} label="câu hỏi thường gặp" />}</main><SiteFooter /></>;
}


