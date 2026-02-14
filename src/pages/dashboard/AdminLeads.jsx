import React from "react";

const segments = [
    { label: "High intent", leads: 56, conv: "41%", color: "bg-emerald-500" },
    { label: "Trial users", leads: 112, conv: "24%", color: "bg-sky-500" },
    { label: "Cold outbound", leads: 238, conv: "9%", color: "bg-slate-500" },
];

const AdminLeads = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-50">
                        Global Leads View
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Get a single source of truth across all teams and sources.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 text-slate-200 hover:bg-slate-800 transition">
                        Import CSV
                    </button>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition">
                        Create view
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Lead sources &amp; quality
                        </h2>
                        <span className="text-xs text-slate-500">Last 30 days</span>
                    </div>

                    <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                        <thead className="text-xs uppercase text-slate-500">
                            <tr>
                                <th className="px-3 py-1">Source</th>
                                <th className="px-3 py-1">Leads</th>
                                <th className="px-3 py-1">MQL rate</th>
                                <th className="px-3 py-1">Owner</th>
                                <th className="px-3 py-1 text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    source: "Website demo form",
                                    leads: 324,
                                    mql: "63%",
                                    owner: "Marketing",
                                    status: "Healthy",
                                },
                                {
                                    source: "Paid campaigns",
                                    leads: 612,
                                    mql: "38%",
                                    owner: "Growth",
                                    status: "Monitor",
                                },
                                {
                                    source: "Partner referrals",
                                    leads: 87,
                                    mql: "72%",
                                    owner: "Alliances",
                                    status: "Star",
                                },
                            ].map((row) => (
                                <tr
                                    key={row.source}
                                    className="bg-slate-900/60 hover:bg-slate-800/80 transition-colors"
                                >
                                    <td className="px-3 py-2 text-slate-200 font-medium">
                                        {row.source}
                                    </td>
                                    <td className="px-3 py-2 text-slate-300">{row.leads}</td>
                                    <td className="px-3 py-2 text-slate-300">{row.mql}</td>
                                    <td className="px-3 py-2 text-slate-300">{row.owner}</td>
                                    <td className="px-3 py-2 text-right">
                                        <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200">
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <h2 className="text-sm font-semibold text-slate-100 mb-3">
                        Segments performance
                    </h2>
                    <div className="space-y-3">
                        {segments.map((seg) => (
                            <div key={seg.label}>
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="text-slate-300">{seg.label}</span>
                                    <span className="text-slate-400">
                                        {seg.leads} leads · {seg.conv} win rate
                                    </span>
                                </div>
                                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                                    <div
                                        className={`h-full ${seg.color}`}
                                        style={{ width: seg.conv }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLeads;

