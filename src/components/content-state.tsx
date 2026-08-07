export function ContentState({ unavailable, label }: { unavailable: boolean; label: string }) {
  return <p className="content-state" role="status">{unavailable ? "Nội dung đang tạm thời chưa thể tải. Vui lòng thử lại sau." : `Chưa có ${label} để hiển thị.`}</p>;
}
