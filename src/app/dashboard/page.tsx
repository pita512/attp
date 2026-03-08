import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ActivityMap from "@/components/dashboard/ActivityMap";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import AlertList from "@/components/dashboard/AlertList";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Building2, Package, Link2, Award, Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Welcome */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tổng quan hệ thống</h1>
          <p className="text-sm text-gray-500 mt-1">Theo dõi và giám sát chuỗi cung ứng toàn quốc</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Tháng 3, 2026</span>
          <button className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors">
            <Plus size={16} />
            Thêm mới
          </button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Doanh nghiệp"
          value="1,284"
          change={3.2}
          subtitle="+42 doanh nghiệp mới tháng này"
          icon={<Building2 size={20} className="text-blue-600" />}
          iconBg="bg-blue-50"
        />
        <StatCard
          title="Sản phẩm đang quản lý"
          value="8,572"
          change={1.5}
          subtitle="+156 sản phẩm mới tháng này"
          icon={<Package size={20} className="text-violet-600" />}
          iconBg="bg-violet-50"
        />
        <StatCard
          title="Chuỗi cung ứng hoạt động"
          value="342"
          change={2.2}
          subtitle="+18 chuỗi mới tháng này"
          icon={<Link2 size={20} className="text-brand-600" />}
          iconBg="bg-brand-50"
        />
        <StatCard
          title="Chứng nhận hiệu lực"
          value="2,104"
          change={-2.1}
          subtitle="+12 cấp mới, 5 hết hạn"
          icon={<Award size={20} className="text-amber-600" />}
          iconBg="bg-amber-50"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-2">
          <PerformanceChart />
        </div>
        <ActivityMap />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <RecentActivity />
        </div>
        <AlertList />
      </div>
    </DashboardLayout>
  );
}
