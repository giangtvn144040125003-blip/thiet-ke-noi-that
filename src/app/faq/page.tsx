import type { Metadata } from "next";
import { ContentState } from "@/components/content-state";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPublishedFaqs } from "@/services/public-content";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Câu hỏi thường gặp", description: "Giải đáp các câu hỏi khi đầu tư và vận hành phòng máy." };

export default async function FaqPage() {
  const result = await getPublishedFaqs();
  return <><SiteHeader /><main className="content-page"><p className="eyebrow">FAQ</p><h1>Giải đáp trước khi bắt đầu đầu tư.</h1><p className="page-lede">Những câu hỏi thường gặp sẽ được cập nhật từ đội ngũ tư vấn.</p>{result.data.length ? <div className="faq-list">{result.data.map((faq) => <details key={faq.id}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div> : <ContentState unavailable={result.unavailable} label="câu hỏi thường gặp" />}</main><SiteFooter /></>;
}
