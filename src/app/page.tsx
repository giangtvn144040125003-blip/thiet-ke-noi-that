import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import styles from "./shooter-home.module.css";

const highlights = [
  { number: "01", title: "Tư vấn đúng mô hình", text: "Xác định quy mô, khách hàng và ngân sách trước khi bắt đầu.", image: "/images/service-consultation-hd-v5.png", href: "/dich-vu/tu-van-dau-tu" },
  { number: "02", title: "Thiết kế tối ưu trải nghiệm", text: "Mặt bằng, ánh sáng và nhận diện được xây dựng thành một hành trình liền mạch.", image: "/images/service-interior-hd-v5.png", href: "/dich-vu/thiet-ke-2d-3d" },
  { number: "03", title: "Thi công & vận hành", text: "Đồng bộ máy, mạng, nội thất và quy trình để phòng máy sẵn sàng hoạt động.", image: "/images/service-esports-hd-v5.png", href: "/dich-vu/lap-dat-phong-may" },
];

const journal = [
  { category: "Kinh nghiệm đầu tư", title: "5 bước chuẩn bị trước khi mở phòng máy", text: "Đi từ khảo sát mặt bằng đến cấu hình để khoản đầu tư rõ ràng hơn.", image: "/images/service-design-hd-v3.webp", href: "/blog/5-buoc-chuan-bi-mo-phong-may" },
  { category: "Tư vấn cấu hình", title: "Chọn cấu hình theo nhóm khách hàng", text: "Phân khu và cấu hình hợp lý để tối ưu doanh thu theo từng giờ vận hành.", image: "/images/investment-lounge-hd-v3.webp", href: "/blog/cach-chon-cau-hinh-phong-net" },
  { category: "Thiết kế không gian", title: "Xu hướng cyber gaming hiện đại", text: "Không gian sáng, có điểm nhấn và tạo trải nghiệm khách hàng muốn quay lại.", image: "/images/project-esports-hd-v3.webp", href: "/blog/xu-huong-thiet-ke-cyber-gaming" },
];

export default function Home() {
  return <><SiteHeader /><main className={styles.home}>
    <section className={styles.hero}>
      <div className={styles.heroMedia}>
        <video autoPlay muted loop playsInline preload="metadata" poster="/images/gaming-room-hero-hd-v3.webp" aria-hidden="true" tabIndex={-1}>
          <source src="/videos/gaming-room-cinematic-uhd.mp4" type="video/mp4" />
        </video>
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
      <div className={styles.highlightGrid}>{highlights.map((item) => <article className={styles.highlightCard} key={item.number}><Image src={item.image} alt={`Minh họa dịch vụ ${item.title}`} fill quality={90} sizes="(max-width: 760px) 100vw, 33vw" /><div className={styles.cardShade}/><div className={styles.cardContent}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>Tìm hiểu thêm <b>↗</b></Link></div></article>)}</div>
    </section>

    <section className={styles.immersive}>
      <Image src="/images/project-esports-hd-v3.webp" alt="Không gian esports được triển khai bởi GiangCuon Gaming" fill quality={90} sizes="100vw" />
      <div className={styles.immersiveShade}/><div className={styles.immersiveContent}><p className={styles.sectionEyebrow}>DỰ ÁN TIÊU BIỂU</p><h2>Không gian được xây dựng cho những giờ chơi thật.</h2><p>Quy hoạch khu máy, khu thi đấu, khu VIP và luồng vận hành thành một trải nghiệm mạch lạc cho chủ quán lẫn khách hàng.</p><Link className={styles.primaryButton} href="/du-an">Xem các dự án <span>↗</span></Link></div>
    </section>

    <section className={styles.journal}>
      <div className={styles.sectionHeading}><div><p className={styles.sectionEyebrow}>NHẬT KÝ PHÒNG MÁY</p><h2>Kiến thức để đầu tư tự tin hơn.</h2></div><Link href="/blog">Xem tất cả bài viết <span>↗</span></Link></div>
      <div className={styles.journalGrid}>{journal.map((item) => <article className={styles.journalCard} key={item.href}><div className={styles.journalImage}><Image src={item.image} alt={`Minh họa bài viết ${item.title}`} fill quality={90} sizes="(max-width: 760px) 100vw, 33vw" /></div><div className={styles.journalBody}><span>{item.category}</span><h3>{item.title}</h3><p>{item.text}</p><Link href={item.href}>Đọc bài viết <b>↗</b></Link></div></article>)}</div>
    </section>

    <section className={styles.investmentCta}><div><p className={styles.sectionEyebrow}>SẴN SÀNG BẮT ĐẦU?</p><h2>Nhận dự toán sơ bộ cho phòng máy của bạn.</h2><p>Chọn quy mô và các hạng mục quan tâm để nhận khoảng đầu tư tham khảo.</p></div><Link className={styles.primaryButton} href="/du-toan">Bắt đầu dự toán <span>↗</span></Link></section>
  </main><SiteFooter /></>;
}
