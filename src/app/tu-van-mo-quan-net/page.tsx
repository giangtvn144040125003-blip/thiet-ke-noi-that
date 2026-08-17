import type { Metadata } from "next";
import { SeoServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = createPageMetadata({ title: "Tư vấn mở quán net: chi phí, vốn & phương án đầu tư", description: "Tư vấn mở quán net, lựa chọn quy mô, mặt bằng, phân khúc và nhóm chi phí đầu tư theo dữ liệu thực tế.", path: "/tu-van-mo-quan-net", image: "/images/service-consultation-hd-v5.png", imageAlt: "Bàn phương án tư vấn đầu tư phòng máy" });

export default function ConsultingPage() { return <SeoServicePage slug="tu-van-dau-tu" canonicalPath="/tu-van-mo-quan-net" label="Tư vấn mở quán net" />; }


