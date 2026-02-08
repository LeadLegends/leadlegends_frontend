import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
                  <p className="text-lg font-bold text-brand-navy">hello@leadcore.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 text-brand-green rounded-xl flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Call us</p>
                  <p className="text-lg font-bold text-brand-navy">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 text-brand-gold rounded-xl flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Visit us</p>
                  <p className="text-lg font-bold text-brand-navy">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-navy mb-6">Send a Message</h3>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <input className="input" placeholder="First Name" />
                <input className="input" placeholder="Last Name" />
              </div>

              <input className="input" placeholder="Work Email" />
              <input className="input" placeholder="Company Name" />
              <textarea rows="4" className="input" placeholder="Tell us about your requirements..." />

              <button className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg">
                Send Request <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;