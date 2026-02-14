import React from "react";

const mockTeams = [
    { name: "North region", leads: 184, meetings: 43, winRate: "24%" },
    { name: "South region", leads: 156, meetings: 39, winRate: "28%" },
    { name: "Strategic accounts", leads: 92, meetings: 31, winRate: "36%" },
];

const ManagerTeamLeads = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-slate-50">
                    Team Leads Overview
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                    Compare pipeline, activity, and outcomes across pods.
                </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                    <thead className="text-xs uppercase text-slate-500">
                        <tr>
                            <th className="px-3 py-1">Team</th>
                            <th className="px-3 py-1">Open leads</th>
                            <th className="px-3 py-1">Meetings booked</th>
                            <th className="px-3 py-1">Win rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockTeams.map((team) => (
                            <tr
                                key={team.name}
                                className="bg-slate-900/60 hover:bg-slate-800/80 transition-colors"
                            >
                                <td className="px-3 py-2 text-slate-200 font-medium">
                                    {team.name}
                                </td>
                                <td className="px-3 py-2 text-slate-300">{team.leads}</td>
                                <td className="px-3 py-2 text-slate-300">{team.meetings}</td>
                                <td className="px-3 py-2 text-slate-300">{team.winRate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagerTeamLeads;

