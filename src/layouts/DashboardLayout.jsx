import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

import {
  LayoutDashboard,
  ClipboardList,
  Users,
  FileText,
  BarChart3,
  Clock,
  TrendingUp,
  Settings,
} from "lucide-react";

const salesSidebarMenu = [
  {
    label: "Dashboard",
    path: "/dashboard/sales",
    icon: LayoutDashboard,
  },
  {
    label: "My Leads",
    path: "/dashboard/sales/leads",
    icon: FileText,
  },
  {
    label: "Follow-ups",
    path: "/dashboard/sales/followups",
    icon: Clock,
  },
  {
    label: "My Performance",
    path: "/dashboard/sales/performance",
    icon: TrendingUp,
  },
];

const managerSidebarMenu = [
  {
    label: "Dashboard",
    path: "/dashboard/manager",
    icon: LayoutDashboard,
  },
  {
    label: "Lead Assignment",
    path: "/dashboard/manager/assign-leads",
    icon: ClipboardList,
  },
  {
    label: "Team Leads",
    path: "/dashboard/manager/team-leads",
    icon: FileText,
  },
  {
    label: "Sales Performance",
    path: "/dashboard/manager/performance",
    icon: BarChart3,
  },
  {
    label: "Reports",
    path: "/dashboard/manager/reports",
    icon: Users,
  },
];

const adminSidebarMenu = [
  { label: "Dashboard", path: "/dashboard/admin", icon: LayoutDashboard },
  { label: "Users", path: "/dashboard/admin/users", icon: Users },
  { label: "Leads", path: "/dashboard/admin/leads", icon: FileText },
  { label: "Reports", path: "/dashboard/admin/reports", icon: BarChart3 },
  { label: "Settings", path: "/dashboard/admin/settings", icon: Settings },
];

const handleLogout = () => {
  console.log("User logged out");

  // Clear stored login info (later)

  //   localStorage.removeItem("token");

  // Redirect to login

  //   window.location.href = "/login";
};

const DashboardLayout = ({ user}) => {
//   // MOCK USER (replace later with auth)
//   const user = {
//     name: "Vinod",
//     role: "sales", // change to manager / admin / sales  to test
//   };
  const sidebarByRole = {
    admin: adminSidebarMenu,
    manager: managerSidebarMenu,
    sales: salesSidebarMenu,
  };

  const menu = sidebarByRole[user.role];
  return (
    <div className="h-screen bg-slate-100">
      {/* Fixed Sidebar */}
      <Sidebar menu={menu} onLogout={handleLogout} />

      {/* Content Wrapper (shifted right) */}
      <div className="ml-64 flex flex-col h-full">
        {/* Topbar */}
        <Topbar user={user} onLogout={handleLogout} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
