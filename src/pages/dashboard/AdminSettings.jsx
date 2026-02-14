import React from "react";

const AdminSettings = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-slate-50">
                    Platform Settings
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                    Configure global preferences, security policies, and integrations.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Security &amp; access
                        </h2>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-200">
                                    Enforce 2-factor authentication
                                </p>
                                <p className="text-xs text-slate-400">
                                    Required for all admins and managers.
                                </p>
                            </div>
                            <button className="px-3 py-1.5 rounded-full bg-slate-800 text-xs text-slate-100">
                                Enabled
                            </button>
                        </div>
                        <div className="h-px bg-slate-800" />
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-200">
                                    Session timeout policy
                                </p>
                                <p className="text-xs text-slate-400">
                                    Users are logged out after 30 minutes of inactivity.
                                </p>
                            </div>
                            <span className="text-xs text-slate-300">30 minutes</span>
                        </div>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                        <h2 className="text-sm font-semibold text-slate-100">
                            Lead routing rules
                        </h2>
                        <p className="text-xs text-slate-400">
                            Define how inbound leads are distributed across teams.
                        </p>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex justify-between">
                                <span>Website demo form</span>
                                <span className="text-slate-100">Round robin · Sales India</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Enterprise inquiries</span>
                                <span className="text-slate-100">
                                    Direct assign · Strategic team
                                </span>
                            </li>
                            <li className="flex justify-between">
                                <span>Cold outbound</span>
                                <span className="text-slate-100">Capacity-based · SDR pod</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                        <h2 className="text-sm font-semibold text-slate-100 mb-2">
                            Integrations
                        </h2>
                        <ul className="space-y-2 text-sm text-slate-300">
                            <li className="flex justify-between">
                                <span>CRM (Salesforce)</span>
                                <span className="text-emerald-400 text-xs">Connected</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Email (Outlook)</span>
                                <span className="text-emerald-400 text-xs">Connected</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Slack alerts</span>
                                <span className="text-amber-400 text-xs">Action needed</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                        <h2 className="text-sm font-semibold text-slate-100 mb-2">
                            Audit log
                        </h2>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li>14:02 – Sneha updated lead routing rules.</li>
                            <li>12:47 – Rahul added 23 leads via CSV import.</li>
                            <li>09:15 – New manager role created: “Regional Lead”.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;

