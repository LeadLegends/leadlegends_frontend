import React from "react";

const SalesPerformance = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-slate-50">
                    My Performance
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                    Track how you&apos;re doing against your goals this month.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 mb-1">Quota attainment</p>
                    <p className="text-lg font-semibold text-slate-100">72%</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 mb-1">Deals won</p>
                    <p className="text-lg font-semibold text-slate-100">9</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 mb-1">Average deal size</p>
                    <p className="text-lg font-semibold text-slate-100">₹72,000</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                    <p className="text-xs text-slate-400 mb-1">Win rate</p>
                    <p className="text-lg font-semibold text-slate-100">29%</p>
                </div>
            </div>
        </div>
    );
};

export default SalesPerformance;

