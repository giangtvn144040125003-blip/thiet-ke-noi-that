import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import styles from "../trust-pages.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Chính sách bảo mật", description: "Cách GiangCuon Gaming tiếp nhận và sử dụng thông tin khi bạn gửi yêu cầu tư vấn.", path: "/chinh-sach-bao-mat" });

export default function PrivacyPage() {
  return <><SiteHeader /><StructuredData data={breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Chính sách bảo mật", path: "/chinh-sach-bao-mat" }])} /><main className={styles.page}><div className={styles.intro}><p className="eyebrow">Chính sách</p><h1>Chính sách bảo mật thông tin.</h1><p>Trang này mô tả phạm vi thông tin được thu thập khi bạn chủ động gửi biểu mẫu liên hệ hoặc yêu cầu tư vấn.</p></div><section className={styles.section}><h2>Thông tin được tiếp nhận</h2><p>Biểu mẫu có thể bao gồm họ tên, số điện thoại, email, nhu cầu và nội dung bạn cung cấp. Chỉ gửi thông tin cần thiết để đội ngũ có thể phản hồi yêu cầu của bạn.</p></section><section className={styles.section}><h2>Mục đích sử dụng</h2><p>Thông tin được dùng để liên hệ, tư vấn và theo dõi yêu cầu. GiangCuon Gaming không bán hoặc trao đổi thông tin liên hệ của bạn cho bên thứ ba vì mục đích tiếp thị.</p></section><section className={styles.section}><h2>Yêu cầu hỗ trợ</h2><p>Bạn có thể yêu cầu kiểm tra, cập nhật hoặc xóa thông tin đã gửi bằng cách liên hệ trực tiếp qua các kênh hiển thị trên website.</p></section></main><SiteFooter /></>;
}


