import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateUserForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Sales",
    phone: "",
    status: "Active",
  });

  const handleChange = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real API integration
    navigate("/dashboard/admin/users");
    console.log("Create user payload", form);
    alert("User created (demo only).");
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl px-6 sm:px-8 py-6">
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Create new user
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Add a teammate to Leadcore with the correct role and status.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Ananya Sharma"
              value={form.name}
              onChange={handleChange("name")}
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Work email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="user@company.com"
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Phone
            </label>
            <input
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={handleChange("phone")}
            />
          </div>
        </div>

        {/* Role + Status */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Role<span className="text-red-500">*</span>
            </label>
            <select
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={form.role}
              onChange={handleChange("role")}
            >
              <option>Admin</option>
              <option>Manager</option>
              <option>Sales</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-slate-600">
              Status
            </label>
            <select
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={form.status}
              onChange={handleChange("status")}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-1">
          <button
            type="button"
            className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 bg-white hover:bg-slate-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white shadow-md shadow-blue-500/30"
          >
            Save user
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;

