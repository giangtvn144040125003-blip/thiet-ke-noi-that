import type { Metadata } from "next";
import { SeoServicePage } from "@/components/seo-service-page";
import { createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = createPageMetadata({ title: "Thi công & setup quán net trọn gói tại Đà Nẵng", description: "Thi công nội thất, điện mạng, làm mát, lắp đặt và setup quán net, Cyber Gaming theo phạm vi đã thống nhất.", path: "/thi-cong-setup-quan-net", image: "/images/service-interior-hd-v5.png", imageAlt: "Không gian minh họa thi công setup quán net" });

export default function SetupPage() { return <SeoServicePage slug="lap-dat-phong-may" canonicalPath="/thi-cong-setup-quan-net" label="Thi công & setup quán net" />; }


