import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import styles from "../trust-pages.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Chính sách bảo hành", description: "Nguyên tắc trao đổi bảo hành đối với hạng mục thiết kế, thi công và thiết bị trong dự án phòng máy.", path: "/chinh-sach-bao-hanh" });

export default function WarrantyPage() {
  return <><SiteHeader /><StructuredData data={breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Chính sách bảo hành", path: "/chinh-sach-bao-hanh" }])} /><main className={styles.page}><div className={styles.intro}><p className="eyebrow">Chính sách</p><h1>Chính sách bảo hành.</h1><p>Điều kiện và thời hạn bảo hành được xác định theo từng hạng mục, sản phẩm và thỏa thuận được xác nhận cho dự án.</p></div><section className={styles.section}><h2>Nguyên tắc áp dụng</h2><p>Hạng mục thiết bị áp dụng theo chính sách của nhà sản xuất hoặc nhà cung cấp. Hạng mục thi công và lắp đặt áp dụng theo phạm vi công việc đã thống nhất.</p></section><section className={styles.section}><h2>Thông tin cần cung cấp khi yêu cầu hỗ trợ</h2><p>Vui lòng chuẩn bị thông tin dự án, hạng mục cần hỗ trợ, thời điểm phát sinh và hình ảnh hoặc video liên quan để việc kiểm tra được nhanh, rõ ràng hơn.</p></section><section className={styles.section}><h2>Lưu ý</h2><p>Website không công bố một thời hạn bảo hành chung vì cấu hình và hạng mục của mỗi dự án khác nhau. Thông tin chính thức được thể hiện trong báo giá, biên bản hoặc hợp đồng tương ứng.</p></section></main><SiteFooter /></>;
}


