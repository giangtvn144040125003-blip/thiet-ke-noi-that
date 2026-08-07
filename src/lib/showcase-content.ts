export type ShowcaseProject = {
  id: string; slug: string; title: string; location: string; machineCount: number; category: string; duration: string; summary: string; content: string; coverImage: string;
};

export type ShowcasePost = {
  id: string; slug: string; title: string; excerpt: string; content: string; coverImage: string; category: string;
};

export type ShowcaseService = {
  id: string; slug: string; name: string; summary: string; benefits: string[]; deliverables: string[]; coverImage: string;
};

export type ShowcasePackage = {
  id: string; name: string; summary: string; machineMin: number; machineMax: number; priceFrom: number | null; features: string[]; featured: boolean;
};

export const showcasePackages: ShowcasePackage[] = [
  { id: "showcase-package-1", name: "Starter", summary: "Phòng máy khởi đầu, ưu tiên cân bằng ngân sách và trải nghiệm.", machineMin: 20, machineMax: 40, priceFrom: null, features: ["Cấu hình PC cân bằng", "Thiết kế mặt bằng cơ bản", "Hạ tầng mạng ổn định"], featured: false },
  { id: "showcase-package-2", name: "Gaming Pro", summary: "Mô hình tối ưu doanh thu với khu máy linh hoạt và nhận diện đồng bộ.", machineMin: 40, machineMax: 80, priceFrom: null, features: ["Khu thi đấu linh hoạt", "Nội thất đồng bộ", "Máy chủ & camera"], featured: true },
  { id: "showcase-package-3", name: "Cyber Premium", summary: "Trải nghiệm cao cấp dành cho mô hình lớn, khu VIP và streaming.", machineMin: 80, machineMax: 200, priceFrom: null, features: ["Concept nhận diện riêng", "Khu VIP / streaming", "Kế hoạch vận hành & bảo hành"], featured: false },
];

export const showcaseServices: ShowcaseService[] = [
  { id: "showcase-service-1", slug: "tu-van-dau-tu", name: "Tư vấn đầu tư", summary: "Làm rõ mô hình, dòng vốn và lộ trình mở quán trước khi bắt đầu.", benefits: ["Xác định mô hình phù hợp", "Kiểm soát ngân sách đầu tư", "Có lộ trình triển khai rõ ràng"], deliverables: ["Định hướng mô hình", "Dự toán sơ bộ", "Kế hoạch triển khai"], coverImage: "/images/service-design-hd-v3.webp" },
  { id: "showcase-service-2", slug: "thiet-ke-2d-3d", name: "Thiết kế 2D / 3D", summary: "Tối ưu mặt bằng, luồng di chuyển và nhận diện không gian phòng máy.", benefits: ["Tận dụng mặt bằng", "Định hình nhận diện", "Hình dung trước khi thi công"], deliverables: ["Layout 2D", "Phối cảnh 3D", "Hồ sơ ý tưởng"], coverImage: "/images/gaming-room-hero-hd-v3.webp" },
  { id: "showcase-service-3", slug: "lap-dat-phong-may", name: "Lắp đặt phòng máy", summary: "Đồng bộ cấu hình, hạ tầng mạng và khu vực vận hành cho phòng máy ổn định.", benefits: ["Cấu hình theo nhu cầu", "Hạ tầng có tổ chức", "Dễ vận hành và nâng cấp"], deliverables: ["Lắp đặt thiết bị", "Thi công mạng", "Bàn giao vận hành"], coverImage: "/images/project-esports-hd-v3.webp" },
];

export const showcaseProjects: ShowcaseProject[] = [
  { id: "showcase-project-1", slug: "cyber-arena-80-may", title: "Cyber Arena / 80 máy", location: "Đà Nẵng", machineCount: 80, category: "Dự án tiêu biểu", duration: "45 ngày", summary: "Không gian thi đấu, khu máy phổ thông và khu streaming được tổ chức thành một luồng trải nghiệm liền mạch.", content: "Dự án minh họa cho quy trình tư vấn mặt bằng, thiết kế nhận diện, triển khai hạ tầng và hoàn thiện khu vận hành. Cấu hình được chia theo hành vi sử dụng để tối ưu trải nghiệm người chơi.", coverImage: "/images/project-esports-hd-v3.webp" },
  { id: "showcase-project-2", slug: "gaming-hub-50-may", title: "Gaming Hub / 50 máy", location: "Hải Châu, Đà Nẵng", machineCount: 50, category: "Gaming hub", duration: "32 ngày", summary: "Mô hình gọn, rõ nhận diện và ưu tiên công năng cho một phòng máy vận hành linh hoạt mỗi ngày.", content: "Dự án minh họa tập trung vào luồng di chuyển, ánh sáng khu máy và khu vực quầy dịch vụ. Mọi hạng mục được cân đối để phù hợp với quy mô 50 máy.", coverImage: "/images/investment-lounge-hd-v3.webp" },
  { id: "showcase-project-3", slug: "esports-lounge-40-may", title: "Esports Lounge / 40 máy", location: "Sơn Trà, Đà Nẵng", machineCount: 40, category: "Esports lounge", duration: "28 ngày", summary: "Không gian premium cho cộng đồng chơi game, kết hợp chỗ ngồi thoải mái và các góc nội dung nổi bật.", content: "Dự án minh họa cho mô hình lounge nhỏ gọn với trọng tâm là trải nghiệm, cách âm, ánh sáng và điểm nhấn thương hiệu trong không gian.", coverImage: "/images/gaming-room-hero-hd-v3.webp" },
];

export const showcasePosts: ShowcasePost[] = [
  { id: "showcase-post-1", slug: "5-buoc-chuan-bi-mo-phong-may", title: "5 bước chuẩn bị trước khi mở phòng máy", excerpt: "Từ khảo sát mặt bằng đến lựa chọn cấu hình, đây là các điểm cần làm rõ trước khi quyết định đầu tư.", content: "Một kế hoạch khởi đầu tốt cần xác định người chơi mục tiêu, diện tích sử dụng, số lượng máy, chi phí hạ tầng và cách vận hành. Việc lập thứ tự ưu tiên giúp ngân sách đi đúng vào những trải nghiệm khách hàng thực sự cảm nhận.", coverImage: "/images/service-design-hd-v3.webp", category: "Kinh nghiệm đầu tư" },
  { id: "showcase-post-2", slug: "cach-chon-cau-hinh-phong-net", title: "Chọn cấu hình phòng máy theo nhóm khách hàng", excerpt: "Không phải mọi khu máy đều cần cùng một cấu hình. Hãy phân nhóm nhu cầu để đầu tư hiệu quả hơn.", content: "Khu thi đấu, khu phổ thông và khu VIP có hành vi sử dụng khác nhau. Phân tầng cấu hình giúp tối ưu ngân sách ban đầu, dễ nâng cấp và tạo thêm lựa chọn cho khách hàng.", coverImage: "/images/investment-lounge-hd-v3.webp", category: "Tư vấn cấu hình" },
  { id: "showcase-post-3", slug: "xu-huong-thiet-ke-cyber-gaming", title: "Xu hướng thiết kế cyber gaming hiện đại", excerpt: "Ánh sáng, nhận diện và luồng di chuyển đang quyết định cảm nhận của khách hàng ngay từ lần đầu bước vào.", content: "Một không gian hiện đại không chỉ cần đẹp trong ảnh. Nó phải dễ định hướng, thoải mái khi ngồi lâu, thuận tiện vận hành và có những điểm nhấn đủ mạnh để khách hàng muốn quay lại.", coverImage: "/images/project-esports-hd-v3.webp", category: "Thiết kế không gian" },
];
