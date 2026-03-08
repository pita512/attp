"use client";

import SectionPage from "@/components/ui/SectionPage";
import Badge from "@/components/ui/Badge";
import { users } from "@/lib/mock-data";

const columns = [
  { key: "id", label: "Mã", width: "90px" },
  { key: "name", label: "Họ và tên" },
  { key: "email", label: "Email" },
  { key: "role", label: "Vai trò" },
  { key: "department", label: "Phòng ban" },
  { key: "lastLogin", label: "Đăng nhập cuối" },
  {
    key: "status",
    label: "Trạng thái",
    render: (row: Record<string, unknown>) => (
      <Badge variant={row.status === "active" ? "success" : "neutral"}>
        {row.status === "active" ? "Hoạt động" : "Vô hiệu hóa"}
      </Badge>
    ),
  },
];

export default function Page() {
  return (
    <SectionPage
      title="Danh sách người dùng"
      subtitle="Quản lý tài khoản và phân quyền người dùng hệ thống"
      stats={[
        { label: "Tổng người dùng", value: users.length, variant: "info" },
        { label: "Đang hoạt động", value: users.filter((u) => u.status === "active").length, variant: "success" },
        { label: "Vô hiệu hóa", value: users.filter((u) => u.status === "inactive").length, variant: "neutral" },
      ]}
      tableColumns={columns}
      tableData={users}
      searchKeys={["name", "email", "role"]}
      addLabel="Thêm người dùng"
    />
  );
}
