import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({user,setUser}) => {
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
      setUser({...user, role: "admin"}); // set user role to admin
      navigate("/dashboard/admin"); // navigate to admin dashboard
    } else if (email === "manager@example.com" && password === "manager123") {
      // navigate("/dashboard/manager");
      setUser({...user, role: "manager"}); // set user role to manager
      navigate("/dashboard/manager"); // navigate to manager dashboard
    } else if (email === "sales@example.com" && password === "sales123") {
      // navigate("/dashboard/sales");
      setUser({...user, role: "sales"}); // set user role to sales
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
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange(setEmail)}
            className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange(setPassword)}
            className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Forgot password */}
          <div className="flex justify-end text-xs">
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => alert("Forgot Password clicked!")}
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Log In
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
  );
};

export default Login;