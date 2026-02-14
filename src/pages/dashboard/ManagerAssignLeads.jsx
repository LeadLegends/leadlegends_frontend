import React from "react";

const mockQueue = [
    { company: "Acme Logistics", score: 92, region: "India", owner: "Unassigned" },
    { company: "Nimbus Retail", score: 88, region: "APAC", owner: "Unassigned" },
    { company: "Vertex Finance", score: 74, region: "EMEA", owner: "Unassigned" },
];

const ManagerAssignLeads = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-50">
                        Lead Assignment
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Balance workload across your team and protect SLAs.
                    </p>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition">
                    Auto-assign suggestions
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Unassigned leads queue
                        </h2>
                        <span className="text-xs text-slate-500">Top by score</span>
                    </div>
                    <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                        <thead className="text-xs uppercase text-slate-500">
                            <tr>
                                <th className="px-3 py-1">Company</th>
                                <th className="px-3 py-1">Score</th>
                                <th className="px-3 py-1">Region</th>
                                <th className="px-3 py-1">Owner</th>
                                <th className="px-3 py-1 text-right">Assign to</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockQueue.map((lead) => (
                                <tr
                                    key={lead.company}
                                    className="bg-slate-900/60 hover:bg-slate-800/80 transition-colors"
                                >
                                    <td className="px-3 py-2 text-slate-200 font-medium">
                                        {lead.company}
                                    </td>
                                    <td className="px-3 py-2 text-slate-300">{lead.score}</td>
                                    <td className="px-3 py-2 text-slate-300">{lead.region}</td>
                                    <td className="px-3 py-2 text-slate-400">{lead.owner}</td>
                                    <td className="px-3 py-2 text-right">
                                        <button className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-100 hover:bg-slate-700 transition">
                                            Pick assignee
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <h2 className="text-sm font-semibold text-slate-100 mb-3">
                        Capacity snapshot
                    </h2>
                    <ul className="space-y-3 text-sm text-slate-300">
                        <li className="flex justify-between">
                            <span>Ananya</span>
                            <span className="text-emerald-400 text-xs">Low load · +12 ok</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Rahul</span>
                            <span className="text-slate-200 text-xs">Balanced · +5 ok</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sneha</span>
                            <span className="text-amber-400 text-xs">High load · 0 free</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManagerAssignLeads;

