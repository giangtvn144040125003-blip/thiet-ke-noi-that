import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import { ContentState } from "@/components/content-state";
import { getPublishedPackages } from "@/services/public-content";
import styles from "./investment-catalog.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Gói đầu tư",
  description: "Các gói đầu tư phòng máy tham khảo theo quy mô.",
};

const packageImages = [
  "/images/service-design-hd-v3.webp",
  "/images/investment-lounge-hd-v3.webp",
  "/images/project-esports-hd-v3.webp",
];

const investmentItems = [
  { number: "01", title: "Máy tính & màn hình", text: "Cấu hình PC, màn hình, tai nghe, bàn phím, chuột và phụ kiện theo từng khu máy.", image: "/images/project-esports-hd-v3.webp" },
  { number: "02", title: "Bàn ghế & nội thất", text: "Bàn máy, ghế gaming, quầy thu ngân, khu chờ và các hạng mục hoàn thiện không gian.", image: "/images/investment-lounge-hd-v3.webp" },
  { number: "03", title: "Mạng & máy chủ", text: "Tủ rack, switch, dây mạng, máy chủ, quản lý bootrom và kết nối internet ổn định.", image: "/images/service-design-hd-v3.webp" },
  { number: "04", title: "Điện, làm mát & camera", text: "Điện dự phòng, điều hòa, thông gió, camera và giải pháp an toàn vận hành.", image: "/images/gaming-room-hero-hd-v3.webp" },
  { number: "05", title: "Ánh sáng & nhận diện", text: "Đèn LED, bảng hiệu, decal, màu sắc thương hiệu và các điểm nhấn thu hút khách hàng.", image: "/images/footer-cyber-lounge-hd-v3.webp" },
  { number: "06", title: "Phần mềm vận hành", text: "Phần mềm quản lý phòng máy, tài khoản game, quy trình thu ngân và chăm sóc khách hàng.", image: "/images/project-esports-hd-v3.webp" },
];

export default async function PackagesPage() {
  const result = await getPublishedPackages();
  const packages = result.data;

  return (
    <>
      <SiteHeader />
      <main className={styles.catalogPage}>
        <section className={styles.catalogHero}>
          <p className="eyebrow">Gói đầu tư tham khảo</p>
          <h1>Chọn cấu hình phòng máy phù hợp với quy mô của bạn.</h1>
          <p>Mỗi gói là điểm khởi đầu để đội ngũ GiangCuon Gaming tư vấn cấu hình, mặt bằng và ngân sách sát thực tế.</p>
        </section>

        <section className={styles.catalog} aria-label="Danh mục gói đầu tư">
          <div className={styles.catalogBar}>
            <div className={styles.catalogTitle}><span className={styles.menuIcon}>☰</span> Danh mục gói đầu tư</div>
            <div className={styles.catalogTags}>
              <span>Phòng máy mới</span>
              <span>Cyber Gaming</span>
              <span>Thiết kế & thi công</span>
            </div>
          </div>

          {packages.length ? <div className={styles.productGrid}>
              {packages.map((item, index) => (
                <article className={styles.productCard} key={item.id}>
                  <div className={styles.imageWrap}>
                    <Image src={packageImages[index % packageImages.length]} alt={`Không gian minh họa gói ${item.name}`} fill quality={90} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                    {item.featured && <span className={styles.popular}>Được quan tâm</span>}
                  </div>
                  <div className={styles.productInfo}>
                    <p className={styles.productMeta}>{item.machineMin}–{item.machineMax} máy</p>
                    <h2>{item.name}</h2>
                    <p className={styles.summary}>{item.summary}</p>
                    <strong>{item.priceFrom ? `Từ ${item.priceFrom.toLocaleString("vi-VN")}đ` : "Liên hệ nhận báo giá"}</strong>
                    <ul className={styles.features}>
                      {item.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <Link href="/lien-he" className={styles.quoteLink}>Xem cấu hình & báo giá <span>↗</span></Link>
                  </div>
                </article>
              ))}
            </div> : <ContentState unavailable={result.unavailable} label="gói đầu tư" />}

          <section className={styles.investmentNeeds} aria-labelledby="investment-needs-title">
            <div className={styles.needsHeading}>
              <p className="eyebrow">Danh mục cần đầu tư</p>
              <h2 id="investment-needs-title">Một phòng máy hoàn chỉnh cần những gì?</h2>
              <p>Đây là những hạng mục cốt lõi cần được tính toán cùng nhau. Báo giá cuối cùng sẽ được điều chỉnh theo mặt bằng và mô hình vận hành thực tế.</p>
            </div>
            <div className={styles.needsGrid}>
              {investmentItems.map((item) => <article className={styles.needCard} key={item.number}><div className={styles.needImage}><Image src={item.image} alt={`Minh họa ${item.title}`} fill quality={90} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className={styles.needBody}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
            </div>
          </section>
        </section>
      </main>
      <a className={styles.hotline} href={`tel:${site.hotline}`} aria-label={`Gọi tư vấn ${site.hotline}`}>Hotline: <b>{site.hotline}</b></a>
      <SiteFooter />
    </>
  );
}


