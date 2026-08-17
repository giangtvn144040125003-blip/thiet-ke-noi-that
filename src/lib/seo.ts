import type { Metadata } from "next";
import { site } from "@/lib/site";

const defaultImage = "/images/project-esports-hd-v3.webp";

export function absoluteUrl(path = "/") {
  return new URL(path, site.appUrl).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  imageAlt?: string;
  robots?: Metadata["robots"];
};

export function createPageMetadata({ title, description, path, image = defaultImage, imageAlt = "Không gian gaming của GiangCuon Gaming", robots }: PageMetadataOptions): Metadata {
  const imageUrl = image ?? defaultImage;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: robots ?? { index: true, follow: true },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, locale: "vi_VN", type: "website", images: [{ url: imageUrl, alt: imageAlt }] },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: [imageUrl] },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}


