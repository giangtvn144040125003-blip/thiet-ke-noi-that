import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import styles from "../../trust-pages.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Nâng cấp & cải tạo quán net tại Đà Nẵng", description: "Rà soát và cải tạo quán net, Cyber Gaming theo hiện trạng mặt bằng, thiết bị, ngân sách và mục tiêu vận hành.", path: "/nang-cap-cai-tao-quan-net", image: "/images/service-interior-hd-v5.png", imageAlt: "Không gian quán net hiện đại sau phương án cải tạo" });

const faqs = [
  { question: "Khi nào nên nâng cấp quán net?", answer: "Nên bắt đầu bằng việc rà soát trải nghiệm khách hàng, hiệu suất thiết bị, luồng vận hành, hệ thống điện mạng và chi phí duy trì. Mức độ nâng cấp phụ thuộc vào hiện trạng và mục tiêu của quán." },
  { question: "Có thể cải tạo quán net đang hoạt động không?", answer: "Có thể lập phương án chia theo khu vực hoặc giai đoạn để hạn chế ảnh hưởng hoạt động. Cách triển khai cần được khảo sát và thống nhất trước khi thực hiện." },
  { question: "Chi phí cải tạo quán net phụ thuộc vào gì?", answer: "Chi phí phụ thuộc vào hạng mục cần thay đổi, số lượng máy, nội thất, điện mạng, hệ thống làm mát, thương hiệu thiết bị và điều kiện mặt bằng." },
];

export default function UpgradeServicePage() {
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: "Nâng cấp và cải tạo quán net", description: "Rà soát, tư vấn và triển khai phương án nâng cấp quán net, Cyber Gaming tại Đà Nẵng.", areaServed: "Đà Nẵng", provider: { "@type": "LocalBusiness", name: "GiangCuon Gaming" }, image: absoluteUrl("/images/service-interior-hd-v5.png") },
    breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Dịch vụ", path: "/dich-vu" }, { name: "Nâng cấp & cải tạo quán net", path: "/nang-cap-cai-tao-quan-net" }]),
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ];
  return <><SiteHeader /><StructuredData data={schema} /><main className={styles.page}><div className={styles.intro}><p className="eyebrow">Dịch vụ nâng cấp</p><h1>Nâng cấp & cải tạo quán net theo bài toán vận hành.</h1><p>Không cần thay mới mọi thứ cùng lúc. GiangCuon Gaming giúp rà soát hạng mục ưu tiên để cải tạo phòng máy có cơ sở, phù hợp hiện trạng và ngân sách.</p></div><section className={styles.section}><h2>Những hạng mục thường cần rà soát</h2><ul><li>Không gian, luồng di chuyển và khu vực máy.</li><li>Máy tính, màn hình, bàn ghế và thiết bị ngoại vi.</li><li>Điện, mạng, làm mát, ánh sáng và nhận diện không gian.</li><li>Trải nghiệm khách hàng, khu VIP hoặc khu thi đấu nếu có nhu cầu.</li></ul></section><section className={styles.section}><h2>Quy trình làm việc</h2><ol><li>Tiếp nhận thông tin hiện trạng, mục tiêu và ngân sách dự kiến.</li><li>Rà soát hạng mục cần ưu tiên và rủi ro cần xử lý.</li><li>Đề xuất phương án theo giai đoạn để bạn cân nhắc.</li><li>Thống nhất phạm vi, tiến độ và kế hoạch triển khai trước khi thi công.</li></ol></section><section className={styles.section}><h2>Câu hỏi thường gặp</h2><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section><p className={styles.cta}><Link className="button" href="/lien-he">Nhận tư vấn cải tạo quán net <span>↗</span></Link></p></main><SiteFooter /></>;
}


