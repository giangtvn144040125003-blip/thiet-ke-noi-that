import { PrismaClient, PublishStatus, Role } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is required to seed the database.");
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
const sample = "[DỮ LIỆU MINH HỌA]";

async function main() {
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: { name: `${sample} Quản trị viên`, role: Role.SUPER_ADMIN },
    create: { name: `${sample} Quản trị viên`, email: "admin@example.com", role: Role.SUPER_ADMIN },
  });

  const services = [
    { slug: "tu-van-dau-tu", name: `${sample} Tư vấn đầu tư`, summary: "Định hướng mô hình, ngân sách và lộ trình triển khai.", benefits: ["Rõ mục tiêu đầu tư", "Dự trù hạng mục"], deliverables: ["Tư vấn mô hình", "Dự toán sơ bộ"] },
    { slug: "thiet-ke-2d-3d", name: `${sample} Thiết kế 2D / 3D`, summary: "Tối ưu công năng, nhận diện và trải nghiệm không gian.", benefits: ["Tận dụng mặt bằng", "Hình dung trước khi thi công"], deliverables: ["Layout 2D", "Phối cảnh 3D"] },
    { slug: "lap-dat-phong-may", name: `${sample} Lắp đặt phòng máy`, summary: "Lựa chọn cấu hình và triển khai đồng bộ cho phòng máy.", benefits: ["Cấu hình phù hợp", "Hạ tầng ổn định"], deliverables: ["Lắp máy", "Cấu hình mạng"] },
  ];
  for (const [order, service] of services.entries()) await prisma.service.upsert({ where: { slug: service.slug }, update: { ...service, order, status: PublishStatus.PUBLISHED }, create: { ...service, order, status: PublishStatus.PUBLISHED } });

  const packages = [
    { slug: "starter", name: `${sample} Starter`, summary: "Phòng máy khởi đầu", machineMin: 20, machineMax: 40, features: ["Cấu hình cân bằng", "Thiết kế mặt bằng", "Hạ tầng cơ bản"] },
    { slug: "gaming-pro", name: `${sample} Gaming Pro`, summary: "Tối ưu doanh thu", machineMin: 40, machineMax: 80, features: ["Khu thi đấu", "Nội thất đồng bộ", "Máy chủ & camera"], featured: true },
    { slug: "cyber-premium", name: `${sample} Cyber Premium`, summary: "Trải nghiệm cao cấp", machineMin: 80, machineMax: 200, features: ["Concept riêng", "Khu VIP", "Vận hành & bảo hành"] },
  ];
  for (const [order, item] of packages.entries()) await prisma.investmentPackage.upsert({ where: { slug: item.slug }, update: { ...item, order, status: PublishStatus.PUBLISHED }, create: { ...item, order, status: PublishStatus.PUBLISHED } });

  await prisma.project.upsert({ where: { slug: "du-an-minh-hoa-cyber-arena" }, update: { title: `${sample} Cyber Arena`, summary: "Dự án minh họa dùng để kiểm tra luồng hiển thị." }, create: { slug: "du-an-minh-hoa-cyber-arena", title: `${sample} Cyber Arena`, summary: "Dự án minh họa dùng để kiểm tra luồng hiển thị.", gallery: [], status: PublishStatus.DRAFT } });
  await prisma.post.upsert({ where: { slug: "bai-viet-minh-hoa-mo-quan-net" }, update: { title: `${sample} Chuẩn bị mở quán net`, excerpt: "Bài viết mẫu, không phải tư vấn kinh doanh chính thức." }, create: { slug: "bai-viet-minh-hoa-mo-quan-net", title: `${sample} Chuẩn bị mở quán net`, excerpt: "Bài viết mẫu, không phải tư vấn kinh doanh chính thức.", status: PublishStatus.DRAFT } });
  await prisma.faq.upsert({ where: { id: "seed-faq-what-is-included" }, update: { question: `${sample} Gói đầu tư gồm những gì?`, answer: "Nội dung minh họa sẽ được thay bằng thông tin đã xác minh." }, create: { id: "seed-faq-what-is-included", question: `${sample} Gói đầu tư gồm những gì?`, answer: "Nội dung minh họa sẽ được thay bằng thông tin đã xác minh.", status: PublishStatus.DRAFT } });
}

main().then(() => prisma.$disconnect()).catch(async (error: unknown) => { console.error("seed.failed", error); await prisma.$disconnect(); process.exit(1); });
