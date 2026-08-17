import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/lead-form";
import { PageVisual } from "@/components/page-visual";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";
import styles from "./contact-details.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Liên hệ tư vấn setup quán net tại Đà Nẵng", description: "Liên hệ GiangCuon Gaming để trao đổi mặt bằng, quy mô và nhu cầu thiết kế, thi công phòng máy hoặc Cyber Gaming.", path: "/lien-he" });

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7.2 3.5 10 8l-2.1 2.1a15.2 15.2 0 0 0 6 6L16 14l4.5 2.8-.8 3.3c-.2.7-.8 1.2-1.6 1.2A15.4 15.4 0 0 1 2.7 5.9c0-.8.5-1.4 1.2-1.6l3.3-.8Z" /></svg>;
}

function LocationIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function ContactDetails() {
  return <div className={styles.details} aria-label="Thông tin liên hệ">
    <a className={styles.row} href={`tel:${site.hotline}`}><span className={styles.icon}><PhoneIcon /></span><span className={styles.label}>Hotline</span><b className={styles.value}>{site.hotlineDisplay}</b></a>
    <div className={styles.row}><span className={styles.icon}><LocationIcon /></span><span className={styles.label}>Địa chỉ</span><b className={styles.value}>{site.address}</b></div>
    <a className={styles.row} href={site.zaloUrl}><span className={styles.icon}><Image src="/images/social-zalo-logo-v1.png" alt="" width={32} height={32} /></span><span className={styles.label}>Zalo</span><b className={styles.value}>{site.hotlineDisplay}</b></a>
    <a className={styles.row} href="https://www.facebook.com/search/top?q=Tr%E1%BA%A7n%20Giang" target="_blank" rel="noreferrer"><span className={styles.icon}><Image src="/images/social-facebook-logo-v1.png" alt="" width={32} height={32} /></span><span className={styles.label}>Facebook</span><b className={styles.value}>{site.facebook}</b></a>
    <a className={styles.row} href="https://www.instagram.com/trx.giang/" target="_blank" rel="noreferrer"><span className={styles.icon}><Image src="/images/social-instagram-logo-v1.png" alt="" width={32} height={32} /></span><span className={styles.label}>Instagram</span><b className={styles.value}>{site.instagram}</b></a>
  </div>;
}

export default function ContactPage() {
  return <><SiteHeader /><main className="contact-page"><div><p className="eyebrow">BẮT ĐẦU DỰ ÁN CỦA BẠN</p><h1>Hãy cho chúng tôi biết về phòng máy bạn muốn xây.</h1><p>Để nhận tư vấn phù hợp, hãy chia sẻ thông tin cơ bản. Đội ngũ sẽ liên hệ qua số điện thoại bạn cung cấp.</p><PageVisual variant="contact" /><ContactDetails /></div><LeadForm /></main><SiteFooter /></>;
}


