# Sprint 1 — Biên bản kiểm tra

Ngày kiểm tra: 2026-07-31

## File đã tạo

- `compose.yml`
- `prisma/migrations/migration_lock.toml`
- `prisma/migrations/20260731200000_init/migration.sql`
- `src/lib/lead.ts`
- `src/lib/lead.test.ts`
- `src/lib/estimator.test.ts`
- `docs/SPRINT_1_ACCEPTANCE.md`

## File đã chỉnh sửa

- `package.json`, `pnpm-lock.yaml`, `.env.example`, `.env`, `README.md`, `tsconfig.json`
- `prisma/schema.prisma`, `prisma/seed.ts`, `prisma.config.ts`
- `src/lib/prisma.ts`, `src/lib/validation.ts`, `src/lib/site.ts`
- `src/app/api/leads/route.ts`, `src/app/robots.ts`, `src/app/sitemap.ts`
- `src/components/lead-form.tsx`

## Database và migration

- Migration `20260731200000_init` đã được tạo từ schema và bao gồm enum, bảng, khóa ngoại, unique constraint và index.
- `prisma validate` và `prisma generate` thành công.
- Migration **chưa được apply**: Docker/Docker Compose không có trong PATH của môi trường kiểm tra nên PostgreSQL local chưa thể khởi động.
- Seed **chưa chạy** vì chưa có PostgreSQL. Seed dùng `upsert`, không xóa dữ liệu, và toàn bộ seed content được gắn `[DỮ LIỆU MINH HỌA]`.

## Luồng lead

- Client: đã xác minh validation số điện thoại sai và trạng thái lỗi hiển thị đúng.
- API: có validation server, honeypot, rate limit bộ nhớ, chuẩn hóa số điện thoại, kiểm tra trùng `phoneNormalized`, response format thống nhất và retry khi va chạm `code`.
- Lead code: `GC-LEAD-YYYYMMDD-XXXX`, tạo bằng `crypto.randomUUID()`; `code` và `phoneNormalized` có unique constraint.
- Lưu lead PostgreSQL **chưa thể xác minh thành công** do database chưa khởi động. Khi gửi dữ liệu hợp lệ, UI trả lỗi thân thiện và không lộ stack trace/Prisma error.

## Kết quả kiểm tra

| Kiểm tra | Kết quả |
| --- | --- |
| Typecheck | Pass (`tsc --noEmit`) |
| Lint | Pass (`eslint src prisma`, không có output lỗi) |
| Test | Pass: 2 files, 4 tests |
| Build | Pass (`next build`) |
| Trang chủ / liên hệ | Pass, không có hydration/console error nghiêm trọng |
| Mobile 390px | Pass, không tràn ngang |

## Lỗi / blocker còn tồn tại

1. Docker Desktop/CLI không được cài hoặc không nằm trong PATH, vì vậy `docker compose up -d` không chạy được.
2. Do PostgreSQL không chạy, `prisma migrate dev`, `prisma db seed` (xác nhận `ECONNREFUSED`) và kiểm tra lưu lead thật chưa thể hoàn tất.
3. `npm` không có trong PATH; dependency được cài bằng `pnpm` runtime đi kèm. Script vẫn tương thích với `npm run ...` khi npm có sẵn.

## Sprint 2

- Apply migration, chạy seed và kiểm tra database end-to-end trên PostgreSQL đang chạy.
- Chuyển dữ liệu trang public sang repository/service Prisma.
- Hoàn thiện estimator nhiều bước và lưu Estimate.
- Bổ sung admin login/RBAC, CRUD CMS và quản lý lead.
