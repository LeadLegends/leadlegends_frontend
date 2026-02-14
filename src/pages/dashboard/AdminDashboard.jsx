import React from "react";

const StatCard = ({ label, value, trend, trendLabel }) => (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-2 shadow-sm">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
            {label}
        </span>
        <div className="flex items-end justify-between">
            <span className="text-2xl font-semibold text-slate-50">
                {value}
            </span>
            {trend && (
                <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${trend > 0
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-rose-500/10 text-rose-400"
                        }`}
                >
                    {trend > 0 ? "+" : ""}
                    {trend}% {trendLabel}
                </span>
            )}
        </div>
    </div>
);

const AdminDashboard = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-800">
                        Admin Control Center
                    </h1>
                    <p className="text-sm text-slate-500 mt-1">
                        High-level overview of your lead engine, teams, and platform health.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 bg-indigo-600 text-slate-200 hover:bg-slate-800 transition">
                        Download Report
                    </button>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition">
                        Add New User
                    </button>
                </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                <StatCard
                    label="Total Leads in System"
                    value="18,245"
                    trend={12}
                    trendLabel="vs last month"
                />
                <StatCard
                    label="Active Users"
                    value="142"
                    trend={5}
                    trendLabel="last 24h"
                />
                <StatCard
                    label="Conversion Rate"
                    value="27.4%"
                    trend={3.2}
                    trendLabel="vs last month"
                />
                <StatCard
                    label="Data Health Score"
                    value="96 / 100"
                    trend={-1.3}
                    trendLabel="vs last week"
                />
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Left: Pipeline performance */}
                <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Pipeline by Stage
                        </h2>
                        <span className="text-xs text-slate-500">Last 30 days</span>
                    </div>

                    <div className="space-y-4">
                        {[
                            { label: "New", value: "4,320", progress: 40, color: "bg-sky-500" },
                            {
                                label: "Contacted",
                                value: "3,870",
                                progress: 36,
                                color: "bg-indigo-500",
                            },
                            {
                                label: "Qualified",
                                value: "2,140",
                                progress: 23,
                                color: "bg-emerald-500",
                            },
                            {
                                label: "Closed Won",
                                value: "985",
                                progress: 14,
                                color: "bg-purple-500",
                            },
                        ].map((stage) => (
                            <div key={stage.label} className="space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-300">{stage.label}</span>
                                    <span className="text-slate-400">{stage.value}</span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div
                                        className={`h-full ${stage.color}`}
                                        style={{ width: `${stage.progress}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: System activity */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Platform Activity
                        </h2>
                        <span className="text-xs text-emerald-400">
                            Live
                        </span>
                    </div>

                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between text-slate-300">
                            <span>New users onboarded</span>
                            <span className="text-slate-100 font-medium">12</span>
                        </li>
                        <li className="flex justify-between text-slate-300">
                            <span>Teams actively using workflows</span>
                            <span className="text-slate-100 font-medium">7</span>
                        </li>
                        <li className="flex justify-between text-slate-300">
                            <span>API errors (last 24h)</span>
                            <span className="text-emerald-400 font-medium">0.15%</span>
                        </li>
                        <li className="flex justify-between text-slate-300">
                            <span>Automations executed</span>
                            <span className="text-slate-100 font-medium">4,812</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

