# SEO / AEO Audit — GiangCuon Gaming

Ngày cập nhật: 17/08/2026  
Tên miền chính: `https://giangcuonn.io.vn`

## Phạm vi đã triển khai

- Dùng một URL trụ cột cho mỗi ý định tìm kiếm, không tạo 360 trang từ khóa. Bộ từ khóa được gom thành bốn cụm: thiết kế nội thất quán net, thi công/setup quán net, tư vấn đầu tư và nâng cấp/cải tạo.
- Trang chủ đã định vị rõ dịch vụ thiết kế, thi công và setup quán net/Cyber Gaming tại Đà Nẵng.
- Mở rộng các trang dịch vụ hiện có bằng câu trả lời trực tiếp, quy trình, phạm vi, yếu tố chi phí, lỗi thường gặp, FAQ và liên kết nội bộ.
- Bổ sung URL trụ cột cho `nâng cấp & cải tạo quán net`: `/dich-vu/nang-cap-cai-tao-quan-net`.
- Bổ sung nội dung hỗ trợ cho các bài blog hiện có và cấu trúc `BlogPosting` gồm ngày xuất bản/cập nhật lấy từ dữ liệu nguồn.
- Chuyển các trang chi tiết dự án minh họa sang `noindex, follow`; nội dung hiển thị nói rõ đây là phương án minh họa, không đại diện cho dự án khách hàng đã xác minh.
- Hoàn thiện title, meta description, canonical, Open Graph, Twitter card và `metadataBase` cho các URL chính.
- Thêm JSON-LD hợp lệ, không có điểm đánh giá/review hay thành tích giả: `Organization`, `LocalBusiness`, `WebSite`, `Service`, `BlogPosting`, `FAQPage` và `BreadcrumbList` khi phù hợp.
- Cập nhật `robots.txt` cho phép crawler chung và `OAI-SearchBot`, chặn `GPTBot`, đồng thời loại trừ `/api/`, `/admin/`, `/preview/`.
- Sitemap chỉ liệt kê URL có thể index: trang tĩnh, dịch vụ công khai và bài blog công khai; không đưa trang dự án `noindex` vào sitemap.
- Bổ sung các trang tăng độ tin cậy: Giới thiệu, Chính sách bảo mật, Điều khoản sử dụng, Chính sách bảo hành.

## Phân bổ cụm từ khóa

| Cụm ý định | URL chính | Ví dụ truy vấn được đáp ứng |
| --- | --- | --- |
| Thiết kế | `/thiet-ke-quan-net` | thiết kế nội thất quán net, thiết kế Cyber Gaming, thiết kế quán net Đà Nẵng |
| Thi công / setup | `/thi-cong-setup-quan-net` | thi công quán net, setup quán net trọn gói, setup quán net Đà Nẵng |
| Tư vấn đầu tư | `/tu-van-mo-quan-net` và `/du-toan` | tư vấn mở quán net, chi phí mở quán net, đầu tư Cyber Gaming |
| Nâng cấp / cải tạo | `/nang-cap-cai-tao-quan-net` | nâng cấp quán net, cải tạo quán net, cải tạo phòng net |
| Tối ưu vận hành | `/toi-uu-van-hanh-quan-net` | tối ưu chi phí, quản lý, giảm điện và nâng hiệu quả vận hành |

Không tạo các landing page chỉ thay tên địa phương. Các URL địa phương chỉ nên được tạo khi có thông tin khảo sát, phạm vi phục vụ và nội dung thực tế khác biệt.

## Điều cần làm ngoài mã nguồn

1. Xác minh property `https://giangcuonn.io.vn/` trong Google Search Console và Bing Webmaster Tools, sau đó gửi `/sitemap.xml`.
2. Bổ sung hồ sơ Google Business Profile bằng NAP đã xác minh; không tự công bố dữ liệu doanh nghiệp chưa được chủ sở hữu xác nhận.
3. Khi có dự án thực tế, thay các phương án minh họa bằng case study có sự đồng ý sử dụng hình ảnh, phạm vi thực hiện, thời điểm và bối cảnh rõ ràng.
4. Thêm Google Analytics/Search Console nếu có mã đo lường được cấp; không hard-code ID mẫu.
5. Đo Core Web Vitals bằng PageSpeed Insights và dữ liệu Search Console sau khi site được crawl. Ảnh Full HD/video là ưu tiên trải nghiệm hình ảnh nhưng cần được nén AVIF/WebP có kiểm soát nếu LCP cao.
6. Rà soát định kỳ dữ liệu Supabase: ảnh đại diện, ngày xuất bản, FAQ và nội dung phải đúng với thông tin đã xác minh.

## Kiểm tra kỹ thuật cần thực hiện sau mỗi lần deploy

- `https://giangcuonn.io.vn/robots.txt`
- `https://giangcuonn.io.vn/sitemap.xml`
- Canonical, title, description, H1 trên Trang chủ, Dịch vụ, Blog, FAQ, Liên hệ và trang dịch vụ mới.
- Rich Results Test cho `BlogPosting`, `Service`, `FAQPage` và breadcrumbs.
- Kiểm tra responsive tại 1440px, 1280px, 1024px, 768px và 390px; không để text/CTA hoặc hình ảnh bị tràn.


