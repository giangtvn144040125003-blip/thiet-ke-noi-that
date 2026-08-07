import Image from "next/image";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/lib/site";
import styles from "./site-footer.module.css";

function LocationIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.6" /></svg>;
}

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7.2 3.5 10 8l-2.1 2.1a15.2 15.2 0 0 0 6 6L16 14l4.5 2.8-.8 3.3c-.2.7-.8 1.2-1.6 1.2A15.4 15.4 0 0 1 2.7 5.9c0-.8.5-1.4 1.2-1.6l3.3-.8Z" /></svg>;
}

export function SiteFooter() {
  return (
    <footer id="lien-he" className={styles.footer}>
      <div className={styles.shell}>
        <div className={styles.main}>
          <div className={styles.content}>
            <p className={styles.kicker}>Kết nối cùng GiangCuon Gaming</p>
            <h2>
              <span>Ý tưởng của bạn.</span>
              <span>Giải pháp của chúng tôi.</span>
              <span className={styles.accentLine}>Phòng máy khác biệt.</span>
            </h2>
            <p className={styles.lede}>GiangCuon Gaming đồng hành từ tư vấn, thiết kế đến lắp đặt và vận hành phòng máy.</p>
            <p className={styles.address}><LocationIcon />{site.address}</p>
            <div className={styles.actions}><a className={styles.call} href={`tel:${site.hotline}`} aria-label={`Gọi tư vấn: ${site.hotlineDisplay}`}><PhoneIcon /><span>Gọi tư vấn: <b>{site.hotlineDisplay}</b></span></a></div>
            <div className={styles.social}><SocialLinks /></div>
          </div>
          <div className={styles.visual}>
            <Image src="/images/footer-cyber-lounge-fullhd-v4.png" alt="Không gian gaming hiện đại của GiangCuon Gaming" fill quality={90} sizes="(max-width: 850px) 100vw, 50vw" />
            <span className={styles.visualLabel}>Build / Play / Grow</span>
          </div>
        </div>
        <small className={styles.copyright}>© {new Date().getFullYear()} {site.name}. Thiết kế phòng máy, tư vấn và triển khai tại Đà Nẵng.</small>
      </div>
    </footer>
  );
}
