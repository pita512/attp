"use client";

import SectionPage from "@/components/ui/SectionPage";
import Badge from "@/components/ui/Badge";

const alerts = [
  { id: "CB001", title: "Nhiệt độ kho vượt ngưỡng", doi_tuong: "Kho lạnh Hà Nội - KL01", loai: "Môi trường", muc_do: "danger", trang_thai: "danger", ngay: "08/03/2026 07:12" },
  { id: "CB002", title: "Tem nhãn hết hạn sắp tới", doi_tuong: "Lô TN-2024-0892", loai: "Tem nhãn", muc_do: "warning", trang_thai: "warning", ngay: "08/03/2026 06:45" },
  { id: "CB003", title: "API timeout liên tục", doi_tuong: "Endpoint /v2/events", loai: "Hệ thống", muc_do: "danger", trang_thai: "warning", ngay: "08/03/2026 06:30" },
  { id: "CB004", title: "Chứng chỉ VietGAP sắp hết hạn", doi_tuong: "HTX Rau sạch Lâm Đồng", loai: "Chứng chỉ", muc_do: "warning", trang_thai: "success", ngay: "07/03/2026 22:00" },
  { id: "CB005", title: "Phát hiện QR bị scan bất thường", doi_tuong: "UID-VN-00293811", loai: "Bảo mật", muc_do: "danger", trang_thai: "danger", ngay: "07/03/2026 21:15" },
  { id: "CB006", title: "Lô hàng chưa cập nhật sự kiện", doi_tuong: "Lô TCA-2026-0041", loai: "Truy xuất", muc_do: "warning", trang_thai: "warning", ngay: "07/03/2026 18:00" },
  { id: "CB007", title: "Webhook gửi thất bại 5 lần", doi_tuong: "Đối tác Aeon Vietnam", loai: "Tích hợp", muc_do: "warning", trang_thai: "success", ngay: "07/03/2026 17:30" },
  { id: "CB008", title: "Người dùng đăng nhập sai 10 lần", doi_tuong: "user: lnguyen@acb.vn", loai: "Bảo mật", muc_do: "danger", trang_thai: "success", ngay: "07/03/2026 16:20" },
  { id: "CB009", title: "Dung lượng lưu trữ > 85%", doi_tuong: "Server SG-NODE-02", loai: "Hệ thống", muc_do: "warning", trang_thai: "warning", ngay: "07/03/2026 14:00" },
  { id: "CB010", title: "Sản phẩm không có chứng chỉ", doi_tuong: "SP-00412 Cá tra phi-lê", loai: "Chứng chỉ", muc_do: "info", trang_thai: "danger", ngay: "07/03/2026 11:45" },
  { id: "CB011", title: "Lô hàng nhập khẩu thiếu hồ sơ", doi_tuong: "Lô NK-2026-0088", loai: "Truy xuất", muc_do: "warning", trang_thai: "warning", ngay: "07/03/2026 10:00" },
  { id: "CB012", title: "Thời gian vận chuyển quá hạn", doi_tuong: "Lô VC-HN-HCMC-2026-019", loai: "Vận chuyển", muc_do: "danger", trang_thai: "success", ngay: "06/03/2026 23:00" },
  { id: "CB013", title: "Cập nhật firmware cảm biến", doi_tuong: "Sensor IoT kho lạnh Cần Thơ", loai: "Thiết bị", muc_do: "info", trang_thai: "success", ngay: "06/03/2026 20:00" },
  { id: "CB014", title: "Sự kiện truy xuất bị thiếu thông tin GPS", doi_tuong: "SK-2026-0394", loai: "Dữ liệu", muc_do: "info", trang_thai: "danger", ngay: "06/03/2026 18:30" },
  { id: "CB015", title: "Chứng chỉ GlobalGAP hết hạn", doi_tuong: "Công ty TNHH Thủy sản Minh Phú", loai: "Chứng chỉ", muc_do: "danger", trang_thai: "warning", ngay: "06/03/2026 15:00" },
  { id: "CB016", title: "Database backup thất bại", doi_tuong: "DB-PROD-01", loai: "Hệ thống", muc_do: "danger", trang_thai: "success", ngay: "06/03/2026 04:00" },
  { id: "CB017", title: "Số lượng UID sắp hết", doi_tuong: "Pool UID-REGION-MB", loai: "UID", muc_do: "warning", trang_thai: "warning", ngay: "05/03/2026 22:00" },
  { id: "CB018", title: "API key hết hạn sắp tới", doi_tuong: "Partner: FPT.vn", loai: "Tích hợp", muc_do: "info", trang_thai: "success", ngay: "05/03/2026 18:00" },
  { id: "CB019", title: "Phát hiện dữ liệu QR bị trùng lặp", doi_tuong: "Lô QR-2026-0711", loai: "Dữ liệu", muc_do: "warning", trang_thai: "danger", ngay: "05/03/2026 14:30" },
  { id: "CB020", title: "Cập nhật chính sách bảo mật", doi_tuong: "Toàn hệ thống", loai: "Hệ thống", muc_do: "info", trang_thai: "success", ngay: "04/03/2026 09:00" },
];

const columns = [
  { key: "id", label: "Mã", width: "90px" },
  { key: "title", label: "Tiêu đề" },
  { key: "doi_tuong", label: "Đối tượng" },
  { key: "loai", label: "Loại" },
  {
    key: "muc_do",
    label: "Mức độ",
    render: (row: Record<string, unknown>) => {
      const map: Record<string, { label: string; variant: "danger" | "warning" | "info" }> = {
        danger: { label: "Nghiêm trọng", variant: "danger" },
        warning: { label: "Cảnh báo", variant: "warning" },
        info: { label: "Thông tin", variant: "info" },
      };
      const m = map[row.muc_do as string] ?? { label: row.muc_do as string, variant: "info" as const };
      return <Badge variant={m.variant}>{m.label}</Badge>;
    },
  },
  {
    key: "trang_thai",
    label: "Trạng thái",
    render: (row: Record<string, unknown>) => {
      const map: Record<string, { label: string; variant: "danger" | "warning" | "success" }> = {
        danger: { label: "Chưa xử lý", variant: "danger" },
        warning: { label: "Đang xử lý", variant: "warning" },
        success: { label: "Đã xử lý", variant: "success" },
      };
      const m = map[row.trang_thai as string] ?? { label: row.trang_thai as string, variant: "warning" as const };
      return <Badge variant={m.variant}>{m.label}</Badge>;
    },
  },
  { key: "ngay", label: "Ngày tạo" },
];

export default function Page() {
  return (
    <SectionPage
      title="Cảnh báo hệ thống"
      subtitle="Danh sách cảnh báo và rủi ro cần xử lý"
      stats={[
        { label: "Tổng cảnh báo", value: alerts.length, variant: "info" },
        { label: "Chưa xử lý", value: alerts.filter((a) => a.trang_thai === "danger").length, variant: "danger" },
        { label: "Đang xử lý", value: alerts.filter((a) => a.trang_thai === "warning").length, variant: "warning" },
        { label: "Đã xử lý", value: alerts.filter((a) => a.trang_thai === "success").length, variant: "success" },
      ]}
      tableColumns={columns}
      tableData={alerts}
      searchKeys={["id", "title", "doi_tuong", "loai"]}
      addLabel="Tạo cảnh báo"
    />
  );
}
