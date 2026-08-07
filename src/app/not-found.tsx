import Link from "next/link";

export default function NotFound() {
  return <main className="state-page"><p className="eyebrow">404 — KHÔNG TÌM THẤY</p><h1>Trang bạn tìm không tồn tại hoặc đã được di chuyển.</h1><Link className="button" href="/">Về trang chủ</Link></main>;
}
