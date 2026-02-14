import React, { useState } from "react";

const SetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasUppercase = /[A-Z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const hasMinLength = newPassword.length >= 8;

  const strengthCompleted = [hasUppercase, hasNumber, hasMinLength].filter(
    Boolean
  ).length;

  const progressClasses =
    strengthCompleted === 0
      ? "bg-slate-200"
      : strengthCompleted === 1
      ? "bg-red-500"
      : strengthCompleted === 2
      ? "bg-amber-500"
      : "bg-emerald-500";

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real submit logic / API
    if ( !newPassword || !confirmPassword) return;
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }
    alert("Password updated (demo only).");
  };

  const handleReset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <div className="rounded-3xl bg-white shadow-2xl border border-slate-200/80 overflow-hidden">
          <div className="px-6 sm:px-10 py-7 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <span className="text-lg font-semibold">🔒</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Set Password
                </h1>
                <p className="text-sm text-slate-500">
                  Create your password to keep your Leadcore account secure.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-6 sm:px-10 py-7 space-y-6">
            {/* Current password */}
            {/* <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                Current Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter current password"
              />
            </div> */}

            {/* New password */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                New Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Create a strong password"
              />
            </div>

            {/* Confirm password */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700">
                  Confirm New Password<span className="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-blue-600 hover:text-blue-700"
                  onClick={handleReset}
                >
                  Clear
                </button>
              </div>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Re-enter new password"
              />
            </div>

            {/* Strength indicator */}
            <div className="pt-1 space-y-2">
              <div className="flex gap-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${progressClasses}`}
                  style={{
                    width: `${(strengthCompleted / 3) * 100}%`,
                  }}
                />
              </div>
              <div className="text-xs text-slate-500">
                Weak password. Must contain:
              </div>
              <ul className="text-xs space-y-1 text-slate-600">
                <li className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      hasUppercase ? "bg-emerald-500" : "bg-slate-300"
                    }`}
                  />
                  At least 1 uppercase
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      hasNumber ? "bg-emerald-500" : "bg-slate-300"
                    }`}
                  />
                  At least 1 number
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      hasMinLength ? "bg-emerald-500" : "bg-slate-300"
                    }`}
                  />
                  At least 8 characters
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col sm:flex-row justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50"
              >
                Discard
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white shadow-md shadow-blue-500/30"
              >
                Apply Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;

