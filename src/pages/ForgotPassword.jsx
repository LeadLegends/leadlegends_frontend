import React, { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Connect API here
    console.log("Reset link sent to:", email);

    setSent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-400 p-10 text-white flex flex-col justify-center">
          <h2 className="text-sm tracking-widest uppercase mb-4 opacity-80">
            LeadCore
          </h2>

          <h1 className="text-3xl font-bold mb-6">
            Forgot your password?
          </h1>

          <p className="opacity-90 mb-8">
            No worries. Enter your registered email and we’ll send you a secure
            password reset link.
          </p>

          <div className="space-y-4 text-sm">
            <p>• Secure reset process</p>
            <p>• Email verification required</p>
            <p>• Link expires in 15 minutes</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-10 flex flex-col justify-center">
          {!sent ? (
            <>
              <h2 className="text-blue-600 text-sm tracking-widest uppercase mb-2">
                Reset Password
              </h2>

              <h1 className="text-2xl font-semibold mb-6">
                Enter your email address
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md"
                >
                  Send Reset Link
                </button>
              </form>

              <div className="mt-6 text-sm text-center">
                <a
                  href="/login"
                  className="text-blue-600 hover:underline"
                >
                  Back to login
                </a>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="text-green-600 text-4xl mb-4">✓</div>
              <h2 className="text-2xl font-semibold mb-2">
                Check your email
              </h2>
              <p className="text-gray-600">
                We’ve sent a password reset link to <br />
                <span className="font-medium">{email}</span>
              </p>

              <a
                href="/login"
                className="inline-block mt-6 text-blue-600 hover:underline"
              >
                Back to login
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
