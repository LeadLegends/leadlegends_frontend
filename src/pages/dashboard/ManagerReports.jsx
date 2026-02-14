import React from "react";

const ManagerReports = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-50">
                        Manager Reports
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Weekly and monthly summaries tailored for frontline leaders.
                    </p>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition">
                    Send to email
                </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                <h2 className="text-sm font-semibold text-slate-100">
                    This week&apos;s highlights
                </h2>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li>North region beat meeting target by 18%.</li>
                    <li>Response time improved by 11% across the team.</li>
                    <li>Win rate on partner referrals increased to 39%.</li>
                </ul>
            </div>
        </div>
    );
};

export default ManagerReports;

