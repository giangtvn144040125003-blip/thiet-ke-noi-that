import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import styles from "../trust-pages.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Tối ưu vận hành quán net & kiểm soát chi phí", description: "Rà soát quy trình, điện, mạng, cấu hình, trải nghiệm và các biến ảnh hưởng chi phí vận hành quán net.", path: "/toi-uu-van-hanh-quan-net", image: "/images/project-gaming-hub-fullhd-v6.png", imageAlt: "Không gian phòng máy được tổ chức để vận hành" });

const faqs = [
  { question: "Tối ưu vận hành quán net bắt đầu từ đâu?", answer: "Nên bắt đầu từ dữ liệu sử dụng máy, chi phí điện, sự cố, phản hồi khách và quy trình của nhân sự; sau đó mới xác định hạng mục cần ưu tiên." },
  { question: "Làm sao giảm chi phí vận hành quán net?", answer: "Cần tách chi phí cố định và biến đổi, kiểm tra điện, làm mát, bảo trì, lịch sử dụng máy và các khoản thất thoát. Mọi đề xuất tiết kiệm phải được đối chiếu với trải nghiệm khách hàng." },
  { question: "Nên nâng cấp PC hay hệ thống mạng trước?", answer: "Ưu tiên phụ thuộc nguyên nhân gây trải nghiệm kém. Nếu lỗi đến từ kết nối, nâng PC không giải quyết được; cần đo và kiểm tra từng hệ thống trước khi quyết định." },
];

export default function OperationsPage() {
  const path = "/toi-uu-van-hanh-quan-net";
  const schema = [{ "@context": "https://schema.org", "@type": "Service", "@id": absoluteUrl(`${path}#service`), name: "Tối ưu vận hành quán net", description: "Rà soát các biến ảnh hưởng đến chi phí, trải nghiệm và quy trình vận hành phòng máy.", url: absoluteUrl(path), provider: { "@id": absoluteUrl("/#business") }, areaServed: ["Đà Nẵng", "Miền Trung"] }, breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Dịch vụ", path: "/dich-vu" }, { name: "Tối ưu vận hành", path }]), { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }];
  return <><SiteHeader /><StructuredData data={schema} /><main className={styles.page}><Breadcrumbs items={[{ name: "Trang chủ", href: "/" }, { name: "Dịch vụ", href: "/dich-vu" }, { name: "Tối ưu vận hành" }]} /><div className={styles.intro}><p className="eyebrow">Tối ưu vận hành</p><h1>Tối ưu vận hành quán net từ dữ liệu thực tế.</h1><p>GiangCuon Gaming hỗ trợ rà soát quy trình, hạ tầng và các biến chi phí để xác định đúng vấn đề trước khi nâng cấp hoặc thay đổi mô hình.</p></div><section className={styles.section}><h2>Những dữ liệu cần có</h2><ul><li>Chi phí điện, internet, nhân sự và bảo trì theo kỳ.</li><li>Tần suất sử dụng từng khu, cấu hình và khung giờ.</li><li>Lịch sử sự cố, phản hồi khách hàng và thời gian gián đoạn.</li><li>Quy trình mở ca, thu ngân, vệ sinh và kiểm tra thiết bị.</li></ul></section><section className={styles.section}><h2>Cách tiếp cận</h2><ol><li>Thu thập dữ liệu và xác định vấn đề cần giải quyết.</li><li>Phân biệt nguyên nhân do máy, mạng, điện, nhiệt hoặc quy trình.</li><li>Xếp thứ tự ưu tiên theo ảnh hưởng và khả năng triển khai.</li><li>Theo dõi kết quả sau thay đổi bằng cùng phương pháp đo.</li></ol></section><section className={styles.section}><h2>Câu hỏi thường gặp</h2><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section><p className={styles.cta}><Link className="button" href="/lien-he">Trao đổi bài toán vận hành <span>↗</span></Link></p></main><SiteFooter /></>;
}


