import React from "react";

const ManagerPerformance = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-50">
                        Performance Insights
                    </h1>
                    <p className="text-sm text-slate-400 mt-1">
                        Understand what drives top performers and where to coach.
                    </p>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium border border-slate-700 text-slate-200 hover:bg-slate-800 transition">
                    Export dashboard
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                    <h2 className="text-sm font-semibold text-slate-100">
                        Rep performance distribution
                    </h2>
                    <p className="text-xs text-slate-400">
                        3 reps are above 120% of quota, 2 are below 70%.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                            <p className="text-slate-400 text-xs mb-1">Top performers</p>
                            <p className="text-slate-100 text-lg font-semibold">3</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs mb-1">On track</p>
                            <p className="text-slate-100 text-lg font-semibold">6</p>
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs mb-1">At risk</p>
                            <p className="text-amber-400 text-lg font-semibold">2</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <h2 className="text-sm font-semibold text-slate-100">
                        Coaching opportunities
                    </h2>
                    <ul className="space-y-2 text-xs text-slate-300">
                        <li>Improve qualification questions for inbound demos.</li>
                        <li>Standardize follow-up sequences for no-shows.</li>
                        <li>Shadow top performers on discovery calls.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManagerPerformance;

