import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { contactApi } from '../services/api';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email?.trim()) {
      setError("Email is required.");
      return;
    }

    setLoading(true);
    try {
      await contactApi.submit(form);
      setSuccess(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      setError(
        err.data?.message || err.data?.error || err.message || "Failed to send. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-10 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Contact Info */}
          <div>
            <div className="inline-block px-3 py-1 bg-brand-beige text-brand-navy text-xs font-bold rounded-full mb-4">
              Contact Sales
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-6">
              Let's Scale Your <br />
              <span className="text-brand-green">Revenue Together.</span>
            </h1>

            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Have questions about pricing, integrations, or enterprise features? Our team is ready to help you upgrade your sales process.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-brand-navy rounded-xl flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Email us</p>
                  <p className="text-lg font-bold text-brand-navy">leadlegends33@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 text-brand-green rounded-xl flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Call us</p>
                  <p className="text-lg font-bold text-brand-navy">+91 xxxxxxxxxx</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 text-brand-gold rounded-xl flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Visit us</p>
                  <p className="text-lg font-bold text-brand-navy">Indore, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Send a Message</h3>
            <p className="text-sm text-gray-400 mb-6">
              Share a few details and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}
              {success && <p className="text-green-600 text-sm">Thanks! We&apos;ll get back to you within 24 hours.</p>}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-600">First Name</label>
                  <input
                    className="input w-full"
                    placeholder="Enter your first name"
                    value={form.firstName}
                    onChange={handleChange("firstName")}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-600">Last Name</label>
                  <input
                    className="input w-full"
                    placeholder="Enter your last name"
                    value={form.lastName}
                    onChange={handleChange("lastName")}
                  />
                </div>
              </div>

              {/* Contact row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-600">Work Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange("email")}
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-3 flex items-center text-brand-green/80 pointer-events-none">
                      <Phone size={18} />
                    </span>
                    <input
                      className="input w-full pl-10"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange("phone")}
                    />
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-600">
                  Company Name
                </label>
                <input
                  className="input w-full"
                  placeholder="Your company or brand"
                  value={form.company}
                  onChange={handleChange("company")}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-gray-600">
                  How can we help?
                </label>
                <textarea
                  rows="4"
                  className="input w-full"
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell us about your goals, current challenges, or what you’re looking to achieve..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {loading ? "Sending..." : "Send Request"} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;