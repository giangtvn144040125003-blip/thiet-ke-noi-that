import type { Metadata } from "next";
import Link from "next/link";
import { EstimatorForm } from "@/components/estimator-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Dự toán chi phí mở quán net & phòng máy", description: "Tự ước tính khoản đầu tư setup quán net theo diện tích, số lượng máy và hạng mục cần triển khai.", path: "/du-toan" });

export default function EstimatorPage() {
  return <><SiteHeader /><main className="content-page"><p className="eyebrow">DỰ TOÁN NHANH</p><h1>Ước tính khoản đầu tư để bắt đầu đúng hướng.</h1><p className="page-lede">Chọn quy mô và các hạng mục bạn quan tâm. Kết quả là khoảng tham khảo để chuẩn bị kế hoạch ban đầu.</p><EstimatorForm /><div className="estimator-cta"><p>Cần phương án theo mặt bằng thật?</p><Link className="text-link" href="/lien-he">Nhận tư vấn chi tiết ↗</Link></div></main><SiteFooter /></>;
}


