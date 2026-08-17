import Link from "next/link";
import styles from "./breadcrumbs.module.css";

export type BreadcrumbItem = { name: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <nav className={styles.breadcrumbs} aria-label="Đường dẫn trang"><ol>{items.map((item, index) => <li key={`${item.name}-${index}`}>{item.href ? <Link href={item.href}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}</li>)}</ol></nav>;
}


