import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Bell,
  Search,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from "lucide-react";

// const getPageTitle = (pathname) => {
//   if (pathname.includes("/users")) return "User Management";
//   if (pathname.includes("/leads")) return "Lead Management";
//   if (pathname.includes("/reports")) return "Reports & Analytics";
//   if (pathname.includes("/settings")) return "System Settings";
//   return "Dashboard Overview";
// };

const Topbar = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40">
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-semibold text-slate-100">
            {/* {getPageTitle(location.pathname)} */}
            Dashboard Overview
        </h1>

        {/* Search */}
        <div className="hidden md:flex items-center bg-slate-800 rounded-lg px-3 py-1.5">
          <Search size={16} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search leads, users..."
            className="bg-transparent outline-none text-sm text-slate-200 placeholder-slate-500 ml-2 w-56"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 relative">
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-slate-800 transition">
          <Bell size={18} className="text-slate-400" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div
          onClick={() => setOpen(!open)}
          className="
    flex items-center gap-3 cursor-pointer
    px-3 py-2 rounded-xl
    border border-transparent
    hover:bg-slate-800 hover:border-slate-700
    transition-all duration-200
    group
  "
        >
          {/* Avatar */}
          <div
            className="
    w-9 h-9 rounded-full
    bg-gradient-to-br from-indigo-500 to-purple-600
    text-white flex items-center justify-center
    font-semibold text-sm
    shadow-md
  "
          >
            {user?.name?.charAt(0) || "A"}
          </div>

          {/* Name + Role */}
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-200">
              {user?.name || "Admin"}
            </span>
            <span className="text-[11px] text-slate-400">
              {user?.role || "Administrator"}
            </span>
          </div>

          {/* Arrow */}
          <ChevronDown
            size={16}
            className="
      text-slate-400
      transition-transform duration-200
      group-hover:text-slate-200
      "
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    
          />
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 top-14 w-48 bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 cursor-pointer">
              <User size={16} /> Profile
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 cursor-pointer">
              <Settings size={16} /> Settings
            </button>
            <div className="h-px bg-slate-800 my-1" />
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:bg-slate-800 cursor-pointer"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
