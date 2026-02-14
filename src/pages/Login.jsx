import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    // MOCK login logic
    if (email === "admin@example.com" && password === "admin123") {
      // navigate("/dashboard/admin");
      setUser({ ...user, role: "admin" }); // set user role to admin
      navigate("/dashboard/admin"); // navigate to admin dashboard
    } else if (email === "manager@example.com" && password === "manager123") {
      // navigate("/dashboard/manager");
      setUser({ ...user, role: "manager" }); // set user role to manager
      navigate("/dashboard/manager"); // navigate to manager dashboard
    } else if (email === "sales@example.com" && password === "sales123") {
      // navigate("/dashboard/sales");
      setUser({ ...user, role: "sales" }); // set user role to sales
      navigate("/dashboard/sales"); // navigate to sales dashboard
    } else {
      setError("Invalid credentials");
    }
  };

  // Clear error when user types
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (error) setError("");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-white/60 grid md:grid-cols-2 overflow-hidden">
        {/* Left illustration / highlight panel */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white p-10 relative">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-24 h-24 border border-white/40 rounded-3xl rotate-12 opacity-60" />

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-100 mb-3">
              LeadLegends
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-4">
              Get access to your growth dashboard.
            </h2>
            <p className="text-sm text-blue-100/90 max-w-xs">
              Sign in to manage leads, track performance, and keep every
              conversation moving forward in one simple workspace.
            </p>
          </div>

          <div className="mt-8 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                1
              </span>
              <p className="text-blue-50/95">Centralize all your lead activity.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                2
              </span>
              <p className="text-blue-50/95">Prioritize follow-ups with clarity.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">
                3
              </span>
              <p className="text-blue-50/95">Collaborate with your entire team.</p>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-600 mb-2">
              Welcome back
            </p>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Use your team credentials to access dashboards and your latest
              leads.
            </p>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-slate-700">
                Your email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={handleInputChange(setEmail)}
                className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400 transition"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
                  onClick={() => navigate("/set-password")}
                >
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={handleInputChange(setPassword)}
                className="w-full border border-slate-200 rounded-xl px-3 py-3 text-sm bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-slate-400 transition"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold shadow-md shadow-blue-500/30 transition-transform transform hover:-translate-y-0.5"
            >
              Log in
            </button>
          </form>

          {/* <p className="text-center text-sm text-slate-500 mt-4">
          Demo Users: <br />
          Admin: admin@example.com / admin123 <br />
          Manager: manager@example.com / manager123 <br />
          Sales: sales@example.com / sales123
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;