import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { StructuredData } from "@/components/structured-data";
import { site } from "@/lib/site";
import "./globals.css";
import "./brand-theme.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.appUrl),
  title: { default: "Thiết kế & thi công quán net tại Đà Nẵng | GiangCuon Gaming", template: "%s | GiangCuon Gaming" },
  description: "GiangCuon Gaming tư vấn, thiết kế và thi công setup quán net, Cyber Gaming tại Đà Nẵng và Miền Trung.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Thiết kế & thi công quán net tại Đà Nẵng | GiangCuon Gaming",
    description: "GiangCuon Gaming tư vấn, thiết kế và thi công setup quán net, Cyber Gaming tại Đà Nẵng và Miền Trung.",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/images/project-esports-hd-v3.webp", width: 1920, height: 1280, alt: "Không gian esports của GiangCuon Gaming" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiết kế & thi công quán net tại Đà Nẵng | GiangCuon Gaming",
    description: "GiangCuon Gaming tư vấn, thiết kế và thi công setup quán net, Cyber Gaming tại Đà Nẵng và Miền Trung.",
    images: ["/images/project-esports-hd-v3.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = [
    { "@context": "https://schema.org", "@type": "Organization", "@id": `${site.appUrl}/#organization`, name: site.name, url: site.appUrl, email: site.email, telephone: site.hotline, logo: `${site.appUrl}/images/giangcuon-gaming-shark-logo-v4.jpg`, sameAs: [site.zaloUrl] },
    { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": `${site.appUrl}/#business`, name: site.name, url: site.appUrl, telephone: site.hotline, email: site.email, parentOrganization: { "@id": `${site.appUrl}/#organization` }, address: { "@type": "PostalAddress", streetAddress: "59 Lê Lợi, Thạch Thang, Hải Châu", addressLocality: "Đà Nẵng", addressCountry: "VN" }, areaServed: ["Đà Nẵng", "Miền Trung"] },
    { "@context": "https://schema.org", "@type": "WebSite", "@id": `${site.appUrl}/#website`, name: site.name, url: site.appUrl, publisher: { "@id": `${site.appUrl}/#organization` }, inLanguage: "vi-VN" },
  ];
  return <html lang="vi"><body className={beVietnamPro.variable}><StructuredData data={organizationSchema} />{children}</body></html>;
}


