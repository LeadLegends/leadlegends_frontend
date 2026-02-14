import React from "react";

const Account = ({ user }) => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-slate-50">
                    My Account
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                    View your profile information and role inside LeadCore.
                </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-lg font-semibold">
                    {user?.name?.charAt(0) || "U"}
                </div>
                <div>
                    <p className="text-slate-100 font-semibold">
                        {user?.name || "User"}
                    </p>
                    <p className="text-xs text-slate-400">
                        Role: {user?.role || "Unknown"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Account;

