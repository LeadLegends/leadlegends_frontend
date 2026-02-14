import React from "react";

const AdminReports = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-50">
                        Reports &amp; Analytics
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Track revenue impact, funnel performance, and team productivity.
                    </p>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition">
                    Schedule weekly report
                </button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Revenue funnel
                        </h2>
                        <span className="text-xs text-slate-500">Quarter to date</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                        {[
                            { label: "Leads", value: "12,430" },
                            { label: "SQLs", value: "3,842" },
                            { label: "Opportunities", value: "1,214" },
                            { label: "Closed won", value: "384" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="bg-slate-900/70 border border-slate-800 rounded-xl p-3"
                            >
                                <p className="text-xs text-slate-400 mb-1">{item.label}</p>
                                <p className="text-base font-semibold text-slate-100">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-slate-400">
                        Funnel conversion:{" "}
                        <span className="text-emerald-400 font-medium">3.1%</span> from
                        lead to closed-won.
                    </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <h2 className="text-sm font-semibold text-slate-100 mb-3">
                        Export center
                    </h2>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex items-center justify-between">
                            <span>Lead-level CSV export</span>
                            <button className="text-xs px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100">
                                Download
                            </button>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Team performance PDF</span>
                            <button className="text-xs px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100">
                                Download
                            </button>
                        </li>
                        <li className="flex items-center justify-between">
                            <span>Executive summary PPTX</span>
                            <button className="text-xs px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-100">
                                Download
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminReports;

