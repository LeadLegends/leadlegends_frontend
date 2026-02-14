import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-5 my-3 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-15 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-beige border border-brand-gold/40 text-brand-navy text-xs font-semibold tracking-wide mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              The #1 AI CRM for Growth
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-brand-navy leading-tight">
              Master Your Leads. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-gold">
                Scale Your Revenue.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Stop losing customers to chaos. Leadcore uses AI to capture, score, and convert leads automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-navy text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-brand-green/30"
              >
                Start Free Trial <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-brand-navy border border-gray-200 hover:border-brand-navy hover:bg-brand-beige transition-all"
              >
                Book Demo
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-brand-gold" />
                No credit card required
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-brand-gold" />
                14-day free trial
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 relative flex justify-center">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-gold/25 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-green/25 rounded-full blur-3xl"></div>

            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 transform rotate-1 hover:rotate-0 transition-all duration-500 w-full max-w-md">
              <div className="bg-brand-beige rounded-xl p-8 flex flex-col items-center justify-center h-80">
                <Zap size={64} className="text-brand-navy mb-4" />
                <h3 className="text-2xl font-bold text-brand-navy">
                  AI Dashboard Preview
                </h3>
                <p className="text-gray-400 mt-2">
                  Interactive Mockup Here
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
