import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import "./brand-theme.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: { default: "GiangCuon Gaming | Thiết kế phòng máy hiện đại", template: "%s | GiangCuon Gaming" },
  description: "Tư vấn, thiết kế, thi công và vận hành phòng máy gaming tại Đà Nẵng.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "GiangCuon Gaming | Thiết kế phòng máy hiện đại",
    description: "Tư vấn, thiết kế, thi công và vận hành phòng máy gaming tại Đà Nẵng.",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/images/project-esports-hd-v3.webp", width: 1920, height: 1280, alt: "Không gian esports của GiangCuon Gaming" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GiangCuon Gaming | Thiết kế phòng máy hiện đại",
    description: "Tư vấn, thiết kế, thi công và vận hành phòng máy gaming tại Đà Nẵng.",
    images: ["/images/project-esports-hd-v3.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={beVietnamPro.variable}>{children}</body></html>;
}
