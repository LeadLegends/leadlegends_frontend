import React from "react";

const mockLeads = [
    {
        company: "Acme Logistics",
        contact: "Rohit Verma",
        stage: "Discovery",
        value: "₹1,40,000",
        nextAction: "Call today · 11:30 AM",
    },
    {
        company: "BrightWorks Studio",
        contact: "Ananya Rao",
        stage: "Proposal sent",
        value: "₹85,000",
        nextAction: "Follow up on proposal",
    },
    {
        company: "Nimbus Retail",
        contact: "Shruti Iyer",
        stage: "Demo booked",
        value: "₹2,10,000",
        nextAction: "Prepare demo notes",
    },
];

const SalesLeads = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-slate-50">My Leads</h1>
                <p className="text-sm text-slate-400 mt-1">
                    A focused view of all leads assigned to you.
                </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <table className="w-full text-sm text-left border-separate border-spacing-y-2">
                    <thead className="text-xs uppercase text-slate-500">
                        <tr>
                            <th className="px-3 py-1">Company</th>
                            <th className="px-3 py-1">Contact</th>
                            <th className="px-3 py-1">Stage</th>
                            <th className="px-3 py-1">Value</th>
                            <th className="px-3 py-1">Next action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mockLeads.map((lead) => (
                            <tr
                                key={lead.company}
                                className="bg-slate-900/60 hover:bg-slate-800/80 transition-colors"
                            >
                                <td className="px-3 py-2 text-slate-200 font-medium">
                                    {lead.company}
                                </td>
                                <td className="px-3 py-2 text-slate-300">{lead.contact}</td>
                                <td className="px-3 py-2 text-slate-300">{lead.stage}</td>
                                <td className="px-3 py-2 text-slate-300">{lead.value}</td>
                                <td className="px-3 py-2 text-slate-400">{lead.nextAction}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesLeads;

