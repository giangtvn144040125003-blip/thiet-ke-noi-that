import Image from "next/image";
import { site } from "@/lib/site";
import styles from "./social-links.module.css";

export function SocialLinks() {
  return (
    <div className={styles.socialLinks} aria-label="Kết nối mạng xã hội">
      <a className={`${styles.socialLink} ${styles.zalo}`} href={site.zaloUrl} aria-label={`Nhắn Zalo ${site.hotlineDisplay}`}>
        <Image className={styles.logo} src="/images/social-zalo-logo-v1.png" alt="" width={32} height={32} />
        <span>Zalo <b>{site.hotlineDisplay}</b></span>
      </a>
      <a className={`${styles.socialLink} ${styles.facebook}`} href="https://www.facebook.com/search/top?q=Tr%E1%BA%A7n%20Giang" target="_blank" rel="noreferrer" aria-label="Facebook Trần Giang">
        <Image className={styles.logo} src="/images/social-facebook-logo-v1.png" alt="" width={32} height={32} />
        <span>Facebook <b>Trần Giang</b></span>
      </a>
      <a className={`${styles.socialLink} ${styles.instagram}`} href="https://www.instagram.com/trx.giang/" target="_blank" rel="noreferrer" aria-label="Instagram TrxGiang">
        <Image className={styles.logo} src="/images/social-instagram-logo-v1.png" alt="" width={32} height={32} />
        <span>Instagram <b>TrxGiang</b></span>
      </a>
    </div>
  );
}
