import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import styles from "../trust-pages.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Giới thiệu GiangCuon Gaming tại Đà Nẵng", description: "Tìm hiểu cách GiangCuon Gaming tư vấn, thiết kế, thi công và đồng hành vận hành phòng máy tại Đà Nẵng và Miền Trung.", path: "/gioi-thieu" });

export default function AboutPage() {
  const schema = breadcrumbSchema([{ name: "Trang chủ", path: "/" }, { name: "Giới thiệu", path: "/gioi-thieu" }]);
  return <><SiteHeader /><StructuredData data={schema} /><main className={styles.page}><div className={styles.intro}><p className="eyebrow">Giới thiệu</p><h1>GiangCuon Gaming — thiết kế phòng máy theo bài toán vận hành.</h1><p>Chúng tôi hỗ trợ chủ đầu tư biến mặt bằng thành không gian Cyber Gaming rõ công năng, phù hợp ngân sách và dễ triển khai theo từng giai đoạn.</p></div><section className={styles.section}><h2>Phạm vi hỗ trợ</h2><p>Từ tư vấn mô hình, thiết kế 2D/3D, lựa chọn hạng mục đến thi công, setup và cải tạo phòng máy. Mỗi phương án cần được rà soát theo mặt bằng, tệp khách hàng và mục tiêu vận hành thực tế.</p></section><section className={styles.section}><h2>Khu vực phục vụ</h2><p>GiangCuon Gaming tiếp nhận nhu cầu tại Đà Nẵng và khu vực Miền Trung. Với dự án ở tỉnh khác, phạm vi khảo sát và triển khai sẽ được trao đổi rõ trước khi xác nhận phương án.</p></section><section className={styles.section}><h2>Thông tin liên hệ</h2><p>{site.address}<br />Hotline: {site.hotlineDisplay}<br />Email: {site.email}</p></section><p className={styles.cta}><Link className="button" href="/lien-he">Trao đổi nhu cầu dự án <span>↗</span></Link></p></main><SiteFooter /></>;
}


