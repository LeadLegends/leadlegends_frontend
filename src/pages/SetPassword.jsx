import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { authApi } from "../services/api";

const SetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!newPassword || !confirmPassword) return;
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
    if (!token) {
      setError("Invalid or expired reset link. Please request a new one.");
      return;
    }

    setLoading(true);
    try {
      await authApi.resetPassword(token, newPassword);
      setSuccess(true);
    } catch (err) {
      setError(
        err.data?.message || err.data?.error || err.message || "Failed to reset password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setNewPassword("");
    setConfirmPassword("");
    setError("");
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

          {success ? (
            <div className="px-6 sm:px-10 py-10 text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-2">Password updated</h2>
              <p className="text-slate-600 text-sm mb-6">You can now sign in with your new password.</p>
              <Link to="/login" className="inline-block px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white">
                Go to login
              </Link>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="px-6 sm:px-10 py-7 space-y-6">
            {!token && (
              <p className="text-amber-600 text-sm">
                No reset token found. Use the link from your reset email, or{" "}
                <Link to="/forgot-password" className="underline">request a new one</Link>.
              </p>
            )}
            {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-slate-700">
                New Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={!token || loading}
                className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
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
                disabled={!token || loading}
                className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-70"
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
                disabled={!token || loading}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-semibold text-white shadow-md shadow-blue-500/30"
              >
                {loading ? "Updating..." : "Apply Changes"}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SetPassword;

