type ServiceGuide = {
  seoTitle: string;
  description: string;
  answer: string;
  audience: string[];
  problems: string[];
  process: string[];
  inputs: string[];
  costFactors: string[];
  pitfalls: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ href: string; label: string }>;
};

export const serviceCanonicalPaths: Record<string, string> = {
  "thiet-ke-2d-3d": "/thiet-ke-quan-net",
  "lap-dat-phong-may": "/thi-cong-setup-quan-net",
  "tu-van-dau-tu": "/tu-van-mo-quan-net",
};

export function serviceCanonicalPath(slug: string) {
  return serviceCanonicalPaths[slug] ?? `/dich-vu/${slug}`;
}

export const serviceGuides: Record<string, ServiceGuide> = {
  "tu-van-dau-tu": {
    seoTitle: "Tư vấn mở quán net & Cyber Gaming tại Đà Nẵng",
    description: "Tư vấn mở quán net, Cyber Gaming theo mặt bằng, ngân sách và tệp khách hàng tại Đà Nẵng cùng GiangCuon Gaming.",
    answer: "Dịch vụ tư vấn mở quán net giúp xác định quy mô, phân khúc khách hàng và các hạng mục đầu tư trước khi chốt cấu hình hoặc thi công.",
    audience: ["Người đang chuẩn bị mở quán net hoặc Cyber Gaming.", "Chủ quán cần kiểm tra lại phương án đầu tư trước khi nâng cấp.", "Người có mặt bằng nhưng chưa xác định số lượng máy và cách phân khu."],
    problems: ["Ngân sách bị dàn trải vào hạng mục chưa cần thiết.", "Số lượng máy hoặc phân khúc chưa phù hợp với mặt bằng.", "Thiếu thứ tự ưu tiên giữa máy, mạng, điện, nội thất và điều hòa."],
    process: ["Tiếp nhận diện tích, khu vực và mục tiêu vận hành.", "Làm rõ nhóm khách hàng, quy mô dự kiến và các hạng mục cần có.", "Đề xuất hướng phân khu, cấu hình và khoảng đầu tư tham khảo.", "Chuyển sang thiết kế hoặc dự toán chi tiết khi thông tin đã đủ."],
    inputs: ["Diện tích hoặc bản vẽ mặt bằng nếu có.", "Số lượng máy dự kiến và mức đầu tư mong muốn.", "Khu vực triển khai và mô hình khách hàng hướng đến."],
    costFactors: ["Số lượng và phân khúc máy.", "Hiện trạng điện, mạng, điều hòa và mặt bằng.", "Mức độ hoàn thiện nội thất, nhận diện và khu chức năng."],
    pitfalls: ["Chọn cấu hình giống nhau cho mọi nhóm khách hàng.", "Bỏ qua chi phí hạ tầng, điện, làm mát và vận hành.", "Quyết định thiết kế trước khi chốt luồng di chuyển và công năng."],
    faqs: [{ question: "Tư vấn mở quán net cần chuẩn bị gì?", answer: "Thông tin về mặt bằng, quy mô dự kiến, nhóm khách hàng và ngân sách giúp việc tư vấn sát nhu cầu hơn." }, { question: "Mở quán net cần bao nhiêu vốn?", answer: "Vốn phụ thuộc số máy, phân khúc cấu hình, hiện trạng mặt bằng, điện mạng, làm mát, nội thất và chi phí dự phòng. Chỉ có thể xác định khoảng phù hợp khi các đầu vào này đủ rõ." }, { question: "30, 50 hoặc 100 máy cần bao nhiêu diện tích?", answer: "Diện tích không chỉ tính theo vị trí máy mà còn gồm lối đi, quầy, khu phụ trợ, điện và làm mát. Cần kiểm tra mặt bằng cụ thể trước khi chốt số máy." }, { question: "Chọn mặt bằng mở quán net theo tiêu chí nào?", answer: "Nên đánh giá tệp khách hàng, khả năng tiếp cận, điện, internet, làm mát, lối thoát và chi phí cố định thay vì chỉ nhìn vào diện tích." }, { question: "Hoàn vốn quán net được tính như thế nào?", answer: "Thời gian hoàn vốn được ước tính từ tổng vốn đầu tư, doanh thu, chi phí vận hành và các giả định công suất. Đây là dự báo, không phải cam kết lợi nhuận." }],
    related: [{ href: "/du-toan", label: "Tự dự toán chi phí phòng máy" }, { href: "/blog/5-buoc-chuan-bi-mo-phong-may", label: "5 bước chuẩn bị trước khi mở phòng máy" }, { href: "/thiet-ke-quan-net", label: "Thiết kế quán net theo mặt bằng" }],
  },
  "thiet-ke-2d-3d": {
    seoTitle: "Thiết kế quán net 2D/3D, tối ưu mặt bằng tại Đà Nẵng",
    description: "Thiết kế quán net 2D/3D và Cyber Gaming theo mặt bằng, luồng di chuyển và nhận diện không gian tại Đà Nẵng.",
    answer: "Thiết kế quán net 2D/3D giúp kiểm tra công năng, luồng di chuyển và hình dung không gian trước khi thi công, từ đó hạn chế chỉnh sửa tốn kém về sau.",
    audience: ["Chủ đầu tư cần chuyển mặt bằng thành phương án phòng máy rõ ràng.", "Dự án cần thống nhất bố trí trước khi đặt thiết bị hoặc làm nội thất.", "Quán đang cải tạo và muốn tối ưu lại khu máy, quầy hoặc khu VIP."],
    problems: ["Lối đi, quầy và khu máy chồng chéo nhau.", "Không gian đẹp nhưng khó vận hành hoặc thiếu điểm đặt thiết bị.", "Ánh sáng và nhận diện được quyết định muộn, gây phát sinh khi thi công."],
    process: ["Khảo sát thông tin mặt bằng và yêu cầu vận hành.", "Lên layout 2D cho khu máy, quầy, lối đi và khu phụ trợ.", "Phát triển phối cảnh 3D để thống nhất vật liệu, ánh sáng và nhận diện.", "Bàn giao phương án đã chốt để chuẩn bị thi công."],
    inputs: ["Kích thước mặt bằng hoặc ảnh/video hiện trạng.", "Số lượng máy, khu chức năng và nhận diện mong muốn.", "Mức đầu tư dự kiến để chọn mức hoàn thiện phù hợp."],
    costFactors: ["Diện tích và độ phức tạp của mặt bằng.", "Số lượng khu chức năng cần thể hiện.", "Mức độ chi tiết của phối cảnh, vật liệu và nhận diện."],
    pitfalls: ["Chỉ chọn phong cách hình ảnh mà không kiểm tra công năng.", "Không dự trù điểm điện, mạng, điều hòa trong layout.", "Thiết kế quá nhiều chi tiết khó thi công hoặc khó bảo trì."],
    faqs: [{ question: "Thiết kế quán net gồm những gì?", answer: "Phạm vi thường gồm layout công năng, phân khu, luồng di chuyển, định hướng vật liệu, ánh sáng, nhận diện và phối hợp các điểm điện, mạng, làm mát theo thỏa thuận." }, { question: "Chi phí thiết kế quán net phụ thuộc gì?", answer: "Chi phí phụ thuộc diện tích, số khu chức năng, độ phức tạp của mặt bằng, mức chi tiết hồ sơ và số phương án cần phát triển." }, { question: "Diện tích mặt bằng bố trí được bao nhiêu máy?", answer: "Số máy phụ thuộc kích thước bàn ghế, lối đi, quầy, khu phụ trợ và yêu cầu an toàn. Cần có kích thước mặt bằng để lập layout thay vì quy đổi bằng một tỷ lệ cố định." }, { question: "Thiết kế khu VIP khác khu thường thế nào?", answer: "Khu VIP thường cần khoảng ngồi, riêng tư, cấu hình trải nghiệm và nhận diện khác; phương án phải phù hợp tệp khách hàng và khả năng vận hành." }, { question: "Cần tính điện và làm mát từ giai đoạn nào?", answer: "Điện, mạng và làm mát nên được tính ngay khi chốt layout vì số máy, vị trí thiết bị và luồng khí ảnh hưởng trực tiếp đến thiết kế." }],
    related: [{ href: "/blog/xu-huong-thiet-ke-cyber-gaming", label: "Xu hướng thiết kế cyber gaming hiện đại" }, { href: "/thi-cong-setup-quan-net", label: "Thi công và setup quán net" }, { href: "/nang-cap-cai-tao-quan-net", label: "Nâng cấp và cải tạo quán net" }],
  },
  "lap-dat-phong-may": {
    seoTitle: "Thi công & setup quán net trọn gói tại Đà Nẵng",
    description: "Thi công và setup quán net, Cyber Gaming theo quy mô, mặt bằng và nhu cầu vận hành tại Đà Nẵng cùng GiangCuon Gaming.",
    answer: "Thi công và setup quán net là quá trình đồng bộ thiết bị, mạng, điện, nội thất và khu vực vận hành để phòng máy sẵn sàng hoạt động theo phương án đã chốt.",
    audience: ["Chủ đầu tư đã có mặt bằng và cần triển khai đồng bộ.", "Dự án cần phối hợp máy, mạng, nội thất và khu vận hành.", "Quán cần nâng cấp từng hạng mục nhưng vẫn duy trì khả năng vận hành."],
    problems: ["Thiết bị lắp đặt rời rạc, khó kiểm soát tiến độ và bảo hành.", "Hạ tầng mạng, điện hoặc điều hòa không được tính cùng khu máy.", "Thiếu bước kiểm tra trước bàn giao khiến việc vận hành ban đầu lúng túng."],
    process: ["Rà soát phương án, mặt bằng và danh mục thiết bị.", "Triển khai các hạng mục hạ tầng, nội thất và lắp đặt thiết bị theo thứ tự.", "Kiểm tra kết nối, vị trí vận hành và các hạng mục đã thống nhất.", "Bàn giao kèm hướng dẫn vận hành cơ bản và kế hoạch bảo trì phù hợp."],
    inputs: ["Mặt bằng, layout hoặc phương án thiết kế đã chốt.", "Danh mục thiết bị, cấu hình và nhu cầu khu chức năng.", "Điều kiện hiện trạng về điện, internet và thời điểm triển khai."],
    costFactors: ["Khối lượng máy, thiết bị mạng và hạ tầng hiện hữu.", "Mức độ hoàn thiện nội thất và các hạng mục kỹ thuật.", "Khả năng tiếp cận công trình, tiến độ và yêu cầu triển khai."],
    pitfalls: ["Thi công mạng sau khi đã hoàn thiện nội thất.", "Không kiểm tra thông gió và điều hòa theo số lượng máy.", "Bỏ qua checklist bàn giao, nhãn dây và tài liệu vận hành."],
    faqs: [{ question: "Setup quán net trọn gói gồm những gì?", answer: "Phạm vi phụ thuộc nhu cầu thực tế, thường gồm hạ tầng, thiết bị, khu máy, nội thất và bước kiểm tra bàn giao; các hạng mục không thuộc phạm vi phải được nêu rõ trong báo giá." }, { question: "Thi công quán net mất bao lâu?", answer: "Thời gian phụ thuộc quy mô, hiện trạng mặt bằng, hạng mục và lịch cung ứng thiết bị; cần xác nhận sau khi chốt phương án." }, { question: "Báo giá setup quán net được tính theo gì?", answer: "Báo giá dựa trên khối lượng thiết bị, nội thất, điện mạng, làm mát, điều kiện thi công và phạm vi bàn giao đã thống nhất." }, { question: "Hệ thống mạng quán net cần chuẩn bị thế nào?", answer: "Cần xác định số máy, băng thông, sơ đồ mạng, thiết bị trung tâm, đường dây và phương án quản lý trước khi hoàn thiện nội thất." }, { question: "Nghiệm thu setup quán net gồm những bước nào?", answer: "Checklist nghiệm thu cần đối chiếu phạm vi bàn giao, nguồn điện, kết nối mạng, vị trí thiết bị, làm mát, hoàn thiện nội thất và tài liệu vận hành liên quan." }],
    related: [{ href: "/nang-cap-cai-tao-quan-net", label: "Nâng cấp và cải tạo quán net" }, { href: "/blog/cach-chon-cau-hinh-phong-net", label: "Chọn cấu hình phòng máy theo nhóm khách hàng" }, { href: "/tu-van-mo-quan-net", label: "Tư vấn mở quán net" }],
  },
};

type BlogGuide = { answer: string; sections: Array<{ heading: string; text: string; bullets?: string[] }>; related: Array<{ href: string; label: string }> };

export const blogGuides: Record<string, BlogGuide> = {
  "5-buoc-chuan-bi-mo-phong-may": {
    answer: "Trước khi mở phòng máy, nên chốt lần lượt khách hàng mục tiêu, mặt bằng, quy mô máy, hạ tầng và phương án vận hành thay vì chỉ bắt đầu từ cấu hình PC.",
    sections: [
      { heading: "1. Xác định mô hình và khách hàng", text: "Phân khúc khách hàng quyết định mức cấu hình, cách bố trí khu máy và mức đầu tư cho trải nghiệm. Hãy làm rõ quán ưu tiên chơi phổ thông, thi đấu, khu VIP hay kết hợp nhiều khu." },
      { heading: "2. Khảo sát mặt bằng trước khi chốt số máy", text: "Mặt bằng cần được xem cùng lối đi, quầy, khu phụ trợ, vị trí điều hòa, điện và đường mạng. Số lượng máy hợp lý không chỉ phụ thuộc diện tích mà còn phụ thuộc khả năng vận hành an toàn và thoải mái." },
      { heading: "3. Chia ngân sách theo hạng mục", text: "Dự toán nên tách rõ máy, màn hình, mạng, điện, nội thất, điều hòa và khoản dự phòng. Cách tách này giúp nhận ra hạng mục nào ảnh hưởng trực tiếp đến trải nghiệm và hạng mục nào có thể triển khai theo giai đoạn.", bullets: ["Thiết bị gaming và phụ kiện", "Hạ tầng mạng, điện, làm mát", "Nội thất, ánh sáng và nhận diện", "Khoản dự phòng cho hiện trạng mặt bằng"] },
      { heading: "4. Chốt layout trước khi đặt thiết bị", text: "Layout là điểm liên kết giữa thiết kế và thi công. Khi vị trí máy, luồng di chuyển và khu vận hành rõ ràng, việc đặt thiết bị và đi hạ tầng sẽ ít phải chỉnh sửa hơn." },
      { heading: "5. Lập checklist trước ngày bàn giao", text: "Checklist cần bao gồm kết nối mạng, nguồn điện, làm mát, vị trí thiết bị, vệ sinh khu máy và hướng dẫn vận hành. Đây là bước giúp phát hiện việc còn thiếu trước khi đón khách." },
    ],
    related: [{ href: "/tu-van-mo-quan-net", label: "Tư vấn mở quán net" }, { href: "/du-toan", label: "Dự toán chi phí phòng máy" }],
  },
  "cach-chon-cau-hinh-phong-net": {
    answer: "Cấu hình phòng máy nên được chọn theo nhóm khách hàng và trò chơi mục tiêu; không nhất thiết mọi vị trí đều dùng một cấu hình giống nhau.",
    sections: [
      { heading: "Bắt đầu từ nhu cầu sử dụng", text: "Hãy xác định nhóm trò chơi, thời gian sử dụng và mức trải nghiệm mà khách hàng mong muốn. Những thông tin này giúp ưu tiên CPU, GPU, màn hình, tai nghe hoặc phụ kiện phù hợp thay vì chỉ nhìn vào một thông số." },
      { heading: "Phân khu cấu hình để dễ đầu tư", text: "Một mô hình có thể chia khu phổ thông, khu thi đấu và khu trải nghiệm cao hơn. Phân khu giúp chủ quán tạo lựa chọn giá hợp lý và có kế hoạch nâng cấp theo nhu cầu thực tế." },
      { heading: "Đừng tách cấu hình khỏi hạ tầng", text: "Máy mạnh vẫn cần mạng ổn định, điện phù hợp, làm mát và không gian ngồi thoải mái. Cấu hình cần được xem như một phần của toàn bộ trải nghiệm phòng máy.", bullets: ["Mạng nội bộ và kết nối internet", "Nguồn điện, UPS hoặc giải pháp dự phòng khi cần", "Điều hòa, thông gió và vị trí tỏa nhiệt", "Màn hình, ghế và khoảng cách bàn máy"] },
      { heading: "Lập kế hoạch nâng cấp", text: "Việc lựa chọn linh kiện và bố trí hạ tầng nên tính đến khả năng bảo trì, thay thế và nâng cấp từng khu. Kế hoạch này giúp tránh phải làm lại toàn bộ khi nhu cầu tăng." },
    ],
    related: [{ href: "/thi-cong-setup-quan-net", label: "Thi công & setup quán net" }, { href: "/goi-dau-tu", label: "Tham khảo gói đầu tư phòng máy" }],
  },
  "xu-huong-thiet-ke-cyber-gaming": {
    answer: "Thiết kế cyber gaming hiện đại ưu tiên công năng, ánh sáng có kiểm soát, nhận diện rõ ràng và trải nghiệm ngồi lâu; hiệu ứng chỉ nên hỗ trợ chứ không thay thế vận hành thực tế.",
    sections: [
      { heading: "Luồng di chuyển là nền tảng", text: "Lối vào, quầy, khu máy, khu chờ và khu phụ trợ cần được bố trí để khách dễ định hướng và nhân sự dễ quan sát. Đây là điểm cần chốt trước khi chọn màu sắc hay vật liệu." },
      { heading: "Ánh sáng phục vụ trải nghiệm", text: "Ánh sáng nên giúp nhận diện từng khu, hỗ trợ quan sát và giảm cảm giác chói khi ngồi trước màn hình. Cần cân đối ánh sáng trang trí với ánh sáng vận hành." },
      { heading: "Nhận diện nên nhất quán", text: "Màu sắc, bảng hiệu, chi tiết nội thất và giao diện không gian cần có cùng ngôn ngữ. Một điểm nhấn rõ ràng thường hiệu quả hơn nhiều chi tiết không liên quan." },
      { heading: "Tính đến bảo trì và nâng cấp", text: "Vật liệu, đường dây, thiết bị chiếu sáng và cách bố trí cần để nhân sự có thể vệ sinh, kiểm tra và thay thế khi cần. Đây là yếu tố giúp không gian giữ được chất lượng sau khi vận hành." },
    ],
    related: [{ href: "/thiet-ke-quan-net", label: "Thiết kế quán net 2D/3D" }, { href: "/du-an", label: "Xem phương án thiết kế phòng máy" }],
  },
};


