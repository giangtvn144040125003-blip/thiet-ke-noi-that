# Kế hoạch triển khai — GiangCuon Gaming

## Assumptions đang áp dụng

- Chưa có logo, ảnh dự án, hotline, email, địa chỉ, bảng giá hay quy tắc dự toán đã xác minh.
- Mọi nội dung có thể gây hiểu nhầm là dữ liệu thật phải dùng placeholder dạng `[TEN_BIẾN]` hoặc nhãn **DỮ LIỆU MẪU**.
- MVP dùng Next.js App Router, TypeScript strict, PostgreSQL/Prisma, Zod và React Hook Form. Nội dung được đọc từ database sau Sprint 2.

## P0 — MVP tạo lead

- [x] Khởi tạo Next.js, TypeScript strict, ESLint và biến môi trường mẫu.
- [x] Xây design tokens Cyber Dark Premium và layout public responsive.
- [x] Triển khai trang chủ foundation với placeholder minh bạch.
- [x] Prisma schema, seed data và cấu hình PostgreSQL (migration chờ database được cấp).
- [ ] Services, projects, FAQ, contact và trang 404/loading/error (đã có service/project/package routes lấy dữ liệu Prisma, contact, 404 và loading; FAQ còn lại).
- [x] Form báo giá có validation, honeypot, rate limit cơ bản và endpoint lưu lead.
- [ ] Admin login, RBAC nền tảng và màn hình quản lý lead.
- [ ] Metadata, sitemap, robots, canonical và security headers (đã có metadata nền tảng, sitemap và robots).

## P1 — Chuyển đổi và quản trị nội dung

- [ ] Gói đầu tư, bộ lọc và so sánh gói.
- [ ] Estimator nhiều bước, lưu kết quả và test công thức.
- [ ] Project/blog details lấy dữ liệu từ database.
- [ ] Email thông báo lead, UTM tracking và analytics events.
- [ ] Admin CRUD dịch vụ, gói, dự án, bài viết, FAQ, media.

## P2 — Mở rộng sau MVP

- [ ] Đồng bộ CRM, cổng khách hàng, bảo hành/ticket và thanh toán.
- [ ] So sánh cấu hình nâng cao, chatbot và đa ngôn ngữ.

## Thứ tự module kế tiếp

1. Thiết lập data layer (Prisma/PostgreSQL) và seed dữ liệu mẫu.
2. Chuyển các section hiện tại sang dữ liệu từ service; triển khai route public P0.
3. Hoàn thiện lead form và dashboard tối thiểu.
4. Bổ sung estimator, CMS và production hardening.

## Tiêu chí kiểm tra mỗi module

- `pnpm typecheck`, `pnpm lint` và `pnpm build` thành công.
- Có loading/error/empty/success state phù hợp.
- Nội dung public có metadata và một H1 duy nhất.
- Không đưa số liệu, giá hoặc testimonial chưa xác minh lên production.
