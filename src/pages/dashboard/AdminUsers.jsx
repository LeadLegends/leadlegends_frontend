import React from "react";
import { useNavigate } from "react-router-dom";


const mockUsers = [
    {
        name: "Ananya Sharma",
        email: "ananya@leadcore.io",
        role: "Manager",
        status: "Active",
        lastActive: "2 min ago",
    },
    {
        name: "Rahul Mehta",
        email: "rahul@leadcore.io",
        role: "Sales Executive",
        status: "Active",
        lastActive: "18 min ago",
    },
    {
        name: "Sneha Patil",
        email: "sneha@leadcore.io",
        role: "Sales Executive",
        status: "Invited",
        lastActive: "Not yet",
    },
    {
        name: "Admin",
        email: "admin@example.com",
        role: "Admin",
        status: "Active",
        lastActive: "Yesterday",
    },
];

const AdminUsers = () => {
    const navigate = useNavigate();
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-800">
                        User Management
                    </h1>
                    <p className="text-sm text-slate-600 mt-1">
                        Control who has access to LeadCore and what they can do.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button onClick={() => navigate("/dashboard/admin/users/create-user")} className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition">
                        Create user
                    </button>
                </div>
            </div>

           

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>SSO connected</span>
                    </div>
                    <div className="flex gap-2 text-xs">
                        <button className="px-3 py-1.5 rounded-full bg-slate-800 text-slate-200">
                            All
                        </button>
                        <button className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                            Admins
                        </button>
                        <button className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                            Managers
                        </button>
                        <button className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                            Sales
                        </button>
                    </div>
                </div>

                <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                    <thead className="text-xs uppercase text-slate-500">
                        <tr>
                            <th className="px-3 py-1">User</th>
                            <th className="px-3 py-1">Role</th>
                            <th className="px-3 py-1">Status</th>
                            <th className="px-3 py-1">Last active</th>
                            <th className="px-3 py-1 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockUsers.map((user) => (
                            <tr
                                key={user.email}
                                className="bg-slate-900/60 hover:bg-slate-800/80 transition-colors"
                            >
                                <td className="px-3 py-2">
                                    <div className="flex flex-col">
                                        <span className="text-slate-100 font-medium">
                                            {user.name}
                                        </span>
                                        <span className="text-slate-400 text-xs">
                                            {user.email}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-3 py-2 text-slate-300">{user.role}</td>
                                <td className="px-3 py-2">
                                    <span
                                        className={`text-xs px-2 py-1 rounded-full ${user.status === "Active"
                                            ? "bg-emerald-500/10 text-emerald-400"
                                            : "bg-slate-700/60 text-slate-300"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-3 py-2 text-slate-400">{user.lastActive}</td>
                                <td className="px-3 py-2 text-right">
                                    <button className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700 transition">
                                        Manage
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminUsers;

