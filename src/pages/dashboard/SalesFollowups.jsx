import React from "react";

const followups = [
    {
        time: "09:30",
        title: "Call Acme Logistics",
        priority: "High",
    },
    {
        time: "11:00",
        title: "Email proposal to BrightWorks",
        priority: "Medium",
    },
    {
        time: "15:00",
        title: "Demo with Nimbus Retail",
        priority: "High",
    },
    {
        time: "17:30",
        title: "Nurture touch for Vertex Finance",
        priority: "Low",
    },
];

const SalesFollowups = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-slate-50">Follow-ups</h1>
                <p className="text-sm text-slate-400 mt-1">
                    Time-ordered list of all your pending follow-ups for today.
                </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <ul className="space-y-3 text-sm">
                    {followups.map((item) => (
                        <li
                            key={item.title}
                            className="flex items-center justify-between bg-slate-900/60 hover:bg-slate-800/80 rounded-xl px-4 py-3"
                        >
                            <div className="flex flex-col">
                                <span className="text-xs text-slate-500">{item.time}</span>
                                <span className="text-slate-100">{item.title}</span>
                            </div>
                            <span
                                className={`text-xs px-3 py-1.5 rounded-full ${item.priority === "High"
                                    ? "bg-emerald-500/10 text-emerald-400"
                                    : item.priority === "Medium"
                                        ? "bg-amber-500/10 text-amber-400"
                                        : "bg-slate-700/60 text-slate-300"
                                    }`}
                            >
                                {item.priority}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SalesFollowups;

