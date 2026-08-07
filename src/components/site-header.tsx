"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/site";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 12);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <><div className={styles.ticker} aria-hidden="true"><div className={styles.tickerTrack}><span>{"// "}GIANGCUON GAMING — THIẾT KẾ PHÒNG MÁY HIỆN ĐẠI</span><span>{"// "}TƯ VẤN, THI CÔNG VÀ BÀN GIAO TRỌN GÓI TẠI ĐÀ NẴNG</span><span>{"// "}GIANGCUON GAMING — THIẾT KẾ PHÒNG MÁY HIỆN ĐẠI</span><span>{"// "}TƯ VẤN, THI CÔNG VÀ BÀN GIAO TRỌN GÓI TẠI ĐÀ NẴNG</span></div></div>
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} site-header`}>
      <Link className={`${styles.brand} brand`} href="/" aria-label="GiangCuon Gaming về trang chủ">
        <Image src="/images/giangcuon-gaming-shark-logo-v4.jfif" alt="Logo cá mập GiangCuon Gaming" width={1024} height={493} priority />
      </Link>
      <nav className={styles.desktopNav} aria-label="Điều hướng chính">{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={isActive(item.href) ? styles.active : undefined}>{item.label}</Link>)}</nav>
      <a className={styles.consultation} href={`tel:${site.hotline}`} aria-label={`Gọi tư vấn miễn phí ${site.hotlineDisplay}`}><span>☎</span><span>Tư vấn miễn phí: <b>{site.hotlineDisplay}</b></span></a>
      <Link className="button button-small" href="/nhan-bao-gia">Nhận báo giá <span>↗</span></Link>
      <a className="mobile-call" href={`tel:${site.hotline}`} aria-label="Gọi tư vấn">☎</a>
      <button className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`} type="button" aria-label={menuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}><span/><span/><span/></button>
      {menuOpen && <div id="mobile-navigation" className={`${styles.mobileNav} ${styles.mobileNavOpen}`}>
        <nav aria-label="Điều hướng điện thoại">{navItems.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={isActive(item.href) ? styles.active : undefined} onClick={() => setMenuOpen(false)}>{item.label}<span>↗</span></Link>)}</nav>
        <a href={`tel:${site.hotline}`} className={styles.mobileConsultation}><span>☎</span> Gọi tư vấn: <b>{site.hotlineDisplay}</b></a>
      </div>}
    </header></>
  );
}
