import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AutoplayVideo } from "@/components/autoplay-video";
import { getPublishedPosts, getPublishedServices } from "@/services/public-content";
import styles from "./shooter-home.module.css";

export default async function Home() {
  const [servicesResult, postsResult] = await Promise.all([getPublishedServices(), getPublishedPosts()]);
  const highlights = servicesResult.data;
  const journal = postsResult.data;
  return <><SiteHeader /><main className={styles.home}>
    <section className={styles.hero}>
      <div className={styles.heroMedia}>
        <AutoplayVideo poster="/images/gaming-room-hero-hd-v3.webp" src="/videos/gaming-room-cinematic-uhd.mp4" />
      </div>
      <div className={styles.heroInner}>
        <p className={styles.eyebrow}>GIANGCUON GAMING / ĐÀ NẴNG</p>
        <h1>
          <span>Tối ưu từng mét vuông.</span>
          <span>Vận hành từng chi phí.</span>
          <em>Gia tăng</em>
          <em>lợi nhuận.</em>
        </h1>
        <p className={styles.heroLead}>Chúng tôi thiết kế phòng máy dựa trên ngân sách, mặt bằng và tệp khách hàng, giúp bạn đầu tư đúng ngay từ đầu và vận hành hiệu quả lâu dài.</p>
        <div className={styles.heroActions}><Link className={styles.primaryButton} href="/lien-he">Nhận tư vấn miễn phí <span>↗</span></Link><Link className={styles.secondaryButton} href="/du-an">Xem dự án đã triển khai</Link></div>
      </div>
      <div className={styles.heroStats}>
        <div><strong>01</strong><span>Định hướng mô hình</span></div><div><strong>02</strong><span>Thiết kế & dự toán</span></div><div><strong>03</strong><span>Thi công đồng bộ</span></div><div><strong>04</strong><span>Bàn giao vận hành</span></div>
      </div>
    </section>

    <section className={styles.intro}>
      <div><p className={styles.sectionEyebrow}>XÂY DỰNG ĐỂ VẬN HÀNH</p><h2>Một phòng máy tốt là nơi công nghệ, trải nghiệm và doanh thu cùng hoạt động.</h2></div>
      <p>Chúng tôi kết hợp mặt bằng, cấu hình máy, hạ tầng mạng và nhận diện không gian để tạo ra mô hình phù hợp với mục tiêu kinh doanh của bạn.</p>
    </section>

    <section className={styles.highlightSection}>
      <div className={styles.sectionHeading}><div><p className={styles.sectionEyebrow}>NĂNG LỰC TRIỂN KHAI</p><h2>Từ bản vẽ đến ngày phòng máy sáng đèn.</h2></div><Link href="/dich-vu">Xem toàn bộ dịch vụ <span>↗</span></Link></div>
      <div className={styles.highlightGrid}>{highlights.map((item, index) => <article className={styles.highlightCard} key={item.id}><Image src={item.coverImage ?? "/images/project-esports-hd-v3.webp"} alt={`Minh họa dịch vụ ${item.name}`} fill quality={90} sizes="(max-width: 760px) 100vw, 33vw" /><div className={styles.cardShade}/><div className={styles.cardContent}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3><p>{item.summary}</p><Link href={`/dich-vu/${item.slug}`}>Tìm hiểu thêm <b>↗</b></Link></div></article>)}</div>
    </section>

    <section className={styles.immersive}>
      <Image src="/images/project-esports-hd-v3.webp" alt="Không gian esports được triển khai bởi GiangCuon Gaming" fill quality={90} sizes="100vw" />
      <div className={styles.immersiveShade}/><div className={styles.immersiveContent}><p className={styles.sectionEyebrow}>DỰ ÁN TIÊU BIỂU</p><h2>Không gian được xây dựng cho những giờ chơi thật.</h2><p>Quy hoạch khu máy, khu thi đấu, khu VIP và luồng vận hành thành một trải nghiệm mạch lạc cho chủ quán lẫn khách hàng.</p><Link className={styles.primaryButton} href="/du-an">Xem các dự án <span>↗</span></Link></div>
    </section>

    <section className={styles.journal}>
      <div className={styles.sectionHeading}><div><p className={styles.sectionEyebrow}>NHẬT KÝ PHÒNG MÁY</p><h2>Kiến thức để đầu tư tự tin hơn.</h2></div><Link href="/blog">Xem tất cả bài viết <span>↗</span></Link></div>
      <div className={styles.journalGrid}>{journal.map((item) => <article className={styles.journalCard} key={item.id}><div className={styles.journalImage}><Image src={item.coverImage ?? "/images/project-esports-hd-v3.webp"} alt={`Minh họa bài viết ${item.title}`} fill quality={90} sizes="(max-width: 760px) 100vw, 33vw" /></div><div className={styles.journalBody}><span>{item.category ?? "Bài viết"}</span><h3>{item.title}</h3><p>{item.excerpt}</p><Link href={`/blog/${item.slug}`}>Đọc bài viết <b>↗</b></Link></div></article>)}</div>
    </section>

    <section className={styles.investmentCta}><div><p className={styles.sectionEyebrow}>SẴN SÀNG BẮT ĐẦU?</p><h2>Nhận dự toán sơ bộ cho phòng máy của bạn.</h2><p>Chọn quy mô và các hạng mục quan tâm để nhận khoảng đầu tư tham khảo.</p></div><Link className={styles.primaryButton} href="/du-toan">Bắt đầu dự toán <span>↗</span></Link></section>
  </main><SiteFooter /></>;
}


