import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AutoplayVideo } from "@/components/autoplay-video";
import { site } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";
import styles from "./cta.module.css";

export const metadata: Metadata = createPageMetadata({ title: "Báo giá setup quán net & Cyber Gaming", description: "Gửi nhu cầu để nhận tư vấn cấu hình, hạng mục đầu tư và báo giá sơ bộ cho phòng máy của bạn tại Đà Nẵng.", path: "/nhan-bao-gia" });

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7.2 3.5 10 8l-2.1 2.1a15.2 15.2 0 0 0 6 6L16 14l4.5 2.8-.8 3.3c-.2.7-.8 1.2-1.6 1.2A15.4 15.4 0 0 1 2.7 5.9c0-.8.5-1.4 1.2-1.6l3.3-.8Z" /></svg>;
}

export default function QuotePage() {
  return <><SiteHeader /><main className={styles.page}>
    <section className={styles.hero}>
      <AutoplayVideo className={styles.heroVideo} poster="/images/gaming-room-hero-hd-v3.webp" src="/videos/gaming-room-cinematic-uhd.mp4" />
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <p className={styles.eyebrow}>BÁO GIÁ SƠ BỘ / GIANGCUON GAMING</p>
        <h1>Biến mặt bằng của bạn thành một phòng máy <em>đáng đầu tư.</em></h1>
        <p className={styles.lead}>Chia sẻ quy mô và mục tiêu vận hành. Đội ngũ sẽ gửi tư vấn cấu hình, hạng mục đầu tư và khoảng ngân sách phù hợp.</p>
        <div className={styles.heroActions}>
          <a className={styles.primaryAction} href={`tel:${site.hotline}`}><PhoneIcon /> Gọi tư vấn: {site.hotlineDisplay}</a>
          <a className={styles.secondaryAction} href={site.zaloUrl} target="_blank" rel="noreferrer">Nhắn Zalo ↗</a>
        </div>
        <div className={styles.promise}><span>✓ Phản hồi theo nhu cầu thực tế</span><span>✓ Không thu phí tư vấn ban đầu</span></div>
      </div>
    </section>

    <section className={styles.quoteSection}>
      <div className={styles.quoteIntro}>
        <p className={styles.eyebrow}>GỬI YÊU CẦU TRONG 1 PHÚT</p>
        <h2>Nhận định hướng trước khi xuống tiền.</h2>
        <p>Thông tin của bạn giúp GiangCuon Gaming ước lượng chính xác hơn về số lượng máy, thiết kế, nội thất, hạ tầng mạng và vận hành.</p>
        <ol className={styles.steps}>
          <li><span>01</span><div><b>Gửi nhu cầu</b><p>Cho biết quy mô, khu vực hoặc ý tưởng bạn đang có.</p></div></li>
          <li><span>02</span><div><b>Nhận tư vấn</b><p>Đội ngũ liên hệ để làm rõ cấu hình và hạng mục cần đầu tư.</p></div></li>
          <li><span>03</span><div><b>Nhận báo giá sơ bộ</b><p>Có khoảng chi phí rõ ràng để bạn chuẩn bị kế hoạch.</p></div></li>
        </ol>
        <Link className={styles.estimatorLink} href="/du-toan">Muốn tự tính trước? Mở công cụ dự toán ↗</Link>
      </div>
      <aside className={styles.formCard} aria-label="Form nhận báo giá">
        <p className={styles.formKicker}>BẮT ĐẦU DỰ ÁN</p>
        <h2>Nhận báo giá ngay</h2>
        <p>Điền thông tin bên dưới, chúng tôi sẽ phản hồi sớm.</p>
        <LeadForm />
      </aside>
    </section>
  </main><SiteFooter /></>;
}


