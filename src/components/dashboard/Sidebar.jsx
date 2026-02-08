import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";

const Sidebar = ({ menu, onLogout }) => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 h-screen fixed left-0 top-0 flex flex-col">
      
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <h1 className="text-lg font-bold text-white">LeadCore</h1>
      </div>

      {/* Menu + Logout Wrapper */}
      <div className="flex flex-col justify-between flex-1">
        
        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors
                ${
                  isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-800">
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:bg-slate-800 transition cursor-pointer"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

      </div>
    </aside>
  );
};

export default Sidebar;