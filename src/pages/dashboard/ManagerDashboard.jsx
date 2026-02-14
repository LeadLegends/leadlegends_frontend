import React from "react";

const MetricPill = ({ label, value }) => (
    <div className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-2">
        <span className="text-slate-400">{label}</span>
        <span className="text-slate-100 font-medium">{value}</span>
    </div>
);

const ManagerDashboard = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-50">
                        Team Performance
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Monitor your team’s pipeline, reassign stuck leads, and coach reps.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    <MetricPill label="Active reps" value="12" />
                    <MetricPill label="Leads waiting assignment" value="37" />
                    <MetricPill label="Avg. response time" value="8m 24s" />
                </div>
            </div>

            {/* Top row: assignment & focus list */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Assignment overview */}
                <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Lead Assignment Overview
                        </h2>
                        <span className="text-xs text-slate-500">
                            Suggestion engine enabled
                        </span>
                    </div>

                    <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                        <thead className="text-xs uppercase text-slate-500">
                            <tr>
                                <th className="px-2 py-1">Rep</th>
                                <th className="px-2 py-1">Open leads</th>
                                <th className="px-2 py-1">SLAs at risk</th>
                                <th className="px-2 py-1">Conversion</th>
                                <th className="px-2 py-1 text-right">Suggested action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    rep: "Ananya",
                                    open: 48,
                                    risk: 3,
                                    conv: "32%",
                                    action: "Reassign 10 low-priority leads",
                                },
                                {
                                    rep: "Rahul",
                                    open: 24,
                                    risk: 0,
                                    conv: "41%",
                                    action: "Route more high-intent leads",
                                },
                                {
                                    rep: "Sneha",
                                    open: 35,
                                    risk: 4,
                                    conv: "25%",
                                    action: "Schedule coaching on qualification",
                                },
                            ].map((row) => (
                                <tr
                                    key={row.rep}
                                    className="bg-slate-900/60 hover:bg-slate-800/80 transition-colors"
                                >
                                    <td className="px-2 py-2 text-slate-200 font-medium">
                                        {row.rep}
                                    </td>
                                    <td className="px-2 py-2 text-slate-300">{row.open}</td>
                                    <td className="px-2 py-2">
                                        <span
                                            className={`text-xs px-2 py-1 rounded-full ${row.risk
                                                ? "bg-amber-500/10 text-amber-400"
                                                : "bg-emerald-500/10 text-emerald-400"
                                                }`}
                                        >
                                            {row.risk ? `${row.risk} leads` : "On track"}
                                        </span>
                                    </td>
                                    <td className="px-2 py-2 text-slate-300">{row.conv}</td>
                                    <td className="px-2 py-2 text-right">
                                        <button className="text-xs px-3 py-1.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition">
                                            Apply
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Focus list */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <h2 className="text-sm font-semibold text-slate-100 mb-3">
                        Today’s coaching focus
                    </h2>
                    <ul className="space-y-3 text-sm">
                        <li className="flex justify-between text-slate-300">
                            <span>Deals stuck in qualification &gt; 14 days</span>
                            <span className="text-slate-100 font-medium">19</span>
                        </li>
                        <li className="flex justify-between text-slate-300">
                            <span>Late follow-ups this week</span>
                            <span className="text-amber-400 font-medium">7</span>
                        </li>
                        <li className="flex justify-between text-slate-300">
                            <span>High-intent leads not contacted</span>
                            <span className="text-rose-400 font-medium">3</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom: performance summary */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-semibold text-slate-100">
                        Team Performance Summary
                    </h2>
                    <span className="text-xs text-slate-500">Last 7 days</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <p className="text-slate-400 text-xs mb-1">Meetings booked</p>
                        <p className="text-slate-100 text-lg font-semibold">128</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs mb-1">Avg. lead response</p>
                        <p className="text-slate-100 text-lg font-semibold">6m 12s</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs mb-1">Pipeline coverage</p>
                        <p className="text-slate-100 text-lg font-semibold">3.4x</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs mb-1">Team attainment</p>
                        <p className="text-emerald-400 text-lg font-semibold">118%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;

