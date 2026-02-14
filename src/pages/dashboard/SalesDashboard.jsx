import React from "react";

const LeadCard = ({ company, status, value, nextAction }) => (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col gap-2 hover:border-slate-600 transition">
        <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-100">{company}</h3>
            <span
                className={`text-[11px] px-2 py-1 rounded-full ${status === "Hot"
                    ? "bg-emerald-500/10 text-emerald-400"
                    : status === "Warm"
                        ? "bg-amber-500/10 text-amber-400"
                        : "bg-slate-700/60 text-slate-300"
                    }`}
            >
                {status} lead
            </span>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Potential value</span>
            <span className="text-slate-100 font-medium">{value}</span>
        </div>
        <p className="text-xs text-slate-400 mt-1">Next action: {nextAction}</p>
    </div>
);

const SalesDashboard = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-50">
                        My Sales Workspace
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Focus view for your day – prioritized leads, follow-ups, and quota.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 text-slate-200 hover:bg-slate-800 transition">
                        View pipeline
                    </button>
                    <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition">
                        Add new lead
                    </button>
                </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 mb-1">This month&apos;s quota</p>
                    <p className="text-lg font-semibold text-slate-100">₹8,00,000</p>
                    <p className="text-xs text-emerald-400 mt-1">72% to goal</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 mb-1">Meetings booked</p>
                    <p className="text-lg font-semibold text-slate-100">23</p>
                    <p className="text-xs text-slate-400 mt-1">+5 vs last week</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 mb-1">Leads to contact today</p>
                    <p className="text-lg font-semibold text-slate-100">14</p>
                    <p className="text-xs text-amber-400 mt-1">3 are SLA at risk</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 mb-1">Win rate</p>
                    <p className="text-lg font-semibold text-slate-100">29%</p>
                    <p className="text-xs text-slate-400 mt-1">Top 15% of the team</p>
                </div>
            </div>

            {/* Main grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                {/* Priority leads */}
                <div className="xl:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Priority leads for today
                        </h2>
                        <span className="text-xs text-slate-500">
                            Ordered by intent + SLA
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <LeadCard
                            company="Acme Logistics"
                            status="Hot"
                            value="₹1,40,000"
                            nextAction="Call decision maker at 11:30 AM"
                        />
                        <LeadCard
                            company="BrightWorks Studio"
                            status="Warm"
                            value="₹85,000"
                            nextAction="Send proposal deck"
                        />
                        <LeadCard
                            company="Nimbus Retail"
                            status="Hot"
                            value="₹2,10,000"
                            nextAction="Schedule product demo"
                        />
                        <LeadCard
                            company="Vertex Finance"
                            status="Cold"
                            value="₹60,000"
                            nextAction="Follow up on evaluation call"
                        />
                    </div>
                </div>

                {/* Follow-ups timeline */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                    <h2 className="text-sm font-semibold text-slate-100 mb-3">
                        Follow-ups timeline
                    </h2>
                    <ul className="space-y-3 text-xs">
                        <li className="flex justify-between text-slate-300">
                            <span>09:30 – Call Acme Logistics</span>
                            <span className="text-emerald-400 font-medium">High</span>
                        </li>
                        <li className="flex justify-between text-slate-300">
                            <span>11:00 – Email proposal to BrightWorks</span>
                            <span className="text-amber-400 font-medium">Medium</span>
                        </li>
                        <li className="flex justify-between text-slate-300">
                            <span>15:00 – Demo with Nimbus Retail</span>
                            <span className="text-emerald-400 font-medium">High</span>
                        </li>
                        <li className="flex justify-between text-slate-300">
                            <span>17:30 – Nurture touch for Vertex Finance</span>
                            <span className="text-slate-400 font-medium">Low</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SalesDashboard;

