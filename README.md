# GiangCuon Gaming

Website marketing và nền tảng tạo lead cho dịch vụ tư vấn, thiết kế và thi công phòng máy/cyber game.

## Tiến độ

- Hoàn thành: Foundation UI, design tokens Cyber Dark Premium, layout public, trang chủ dữ liệu mẫu.
- Tiếp theo: Prisma/PostgreSQL, public routes theo dữ liệu, form lead và estimator.

## Chạy local

```bash
docker compose up -d
npm install
copy .env.example .env
npx prisma generate
npx prisma migrate dev --name init
npx prisma db seed
npm run dev
```

## Kiểm tra

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

Các dữ liệu như hotline, giá, thành tích và dự án đang dùng placeholder có nhãn rõ ràng, cần thay bằng dữ liệu đã xác minh trước khi phát hành.
