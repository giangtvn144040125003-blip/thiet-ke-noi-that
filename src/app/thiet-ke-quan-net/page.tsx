import type { Metadata } from "next";
import { SeoServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = createPageMetadata({ title: "Thiết kế quán net / Cyber Gaming tại Đà Nẵng", description: "Thiết kế nội thất quán net, Cyber Gaming theo mặt bằng, số máy, ngân sách và nhu cầu vận hành tại Đà Nẵng.", path: "/thiet-ke-quan-net", image: "/images/service-design-fullhd-v4.png", imageAlt: "Phối cảnh minh họa thiết kế quán net hiện đại" });

export default function DesignPage() { return <SeoServicePage slug="thiet-ke-2d-3d" canonicalPath="/thiet-ke-quan-net" label="Thiết kế quán net / Cyber Gaming" />; }


