import React, { useState } from "react";
import { Link } from "react-router-dom";
import { authApi } from "../services/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authApi.forgotPassword(email.trim());
      setSent(true);
    } catch (err) {
      setError(
        err.data?.message || err.data?.error || err.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/60 grid md:grid-cols-2 overflow-hidden">
        {/* Left panel - matches Login styling */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white p-10 relative">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-24 h-24 border border-white/40 rounded-3xl rotate-12 opacity-60" />

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-100 mb-3">
              LeadLegends
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Forgot your password?
            </h2>
            <p className="text-sm text-blue-100/90 max-w-xs">
              No worries. Enter your registered email and we’ll send you a
              secure password reset link via email.
            </p>
          </div>

          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                1
              </span>
              <p className="text-blue-50/95">Secure reset process</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                2
              </span>
              <p className="text-blue-50/95">Email verification required</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                3
              </span>
              <p className="text-blue-50/95">Link expires in 15 minutes</p>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          {!sent ? (
            <>
              <div className="mb-8">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-600 mb-2">
                  Reset Password
                </p>
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900">
                  Enter your email address
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  We’ll send a password reset link to your registered email.
                </p>
              </div>

              {error && (
                <p className="text-red-500 text-sm mb-4" role="alert">
                  {error}
                </p>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={handleInputChange}
                    disabled={loading}
                    className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400 transition disabled:opacity-70 disabled:cursor-not-allowed"
                    autoComplete="email"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold shadow-md shadow-blue-500/30 transition-transform transform hover:-translate-y-0.5"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>

              <div className="mt-6 text-sm text-center">
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
                >
                  ← Back to login
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                Check your email
              </h2>
              <p className="text-slate-600 text-sm">
                We’ve sent a password reset link to{" "}
                <span className="font-medium text-slate-800">{email}</span>
              </p>
              <p className="text-slate-500 text-xs mt-2">
                The link will expire in 15 minutes. Check your spam folder if you
                don’t see it.
              </p>

              <Link
                to="/login"
                className="inline-block mt-6 text-blue-600 hover:text-blue-700 hover:underline font-medium text-sm"
              >
                ← Back to login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
