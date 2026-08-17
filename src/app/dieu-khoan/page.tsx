import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import styles from "../trust-pages.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Điều khoản sử dụng", description: "Điều khoản sử dụng nội dung và thông tin tham khảo trên website GiangCuon Gaming.", path: "/dieu-khoan" });

export default function TermsPage() {
  return <><SiteHeader /><StructuredData data={breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Điều khoản sử dụng", path: "/dieu-khoan" }])} /><main className={styles.page}><div className={styles.intro}><p className="eyebrow">Điều khoản</p><h1>Điều khoản sử dụng website.</h1><p>Khi sử dụng website, bạn đồng ý rằng thông tin hiển thị được dùng để tham khảo và trao đổi nhu cầu ban đầu.</p></div><section className={styles.section}><h2>Thông tin tham khảo</h2><p>Nội dung, hình ảnh minh họa, gói đầu tư và công cụ dự toán không phải báo giá, cam kết tiến độ hoặc hợp đồng. Phương án cuối cùng cần được xác nhận theo hiện trạng và hạng mục thực tế.</p></section><section className={styles.section}><h2>Quyền sở hữu nội dung</h2><p>Không sao chép, sử dụng lại hình ảnh, nội dung hoặc nhận diện của website cho mục đích thương mại khi chưa có sự đồng ý phù hợp từ chủ sở hữu.</p></section><section className={styles.section}><h2>Liên hệ</h2><p>Nếu có câu hỏi về thông tin trên website, vui lòng liên hệ trực tiếp để được làm rõ trước khi đưa ra quyết định đầu tư.</p></section></main><SiteFooter /></>;
}


