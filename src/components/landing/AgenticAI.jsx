import React from 'react';
import { ArrowRight, Bot, Sparkles, Check } from 'lucide-react';

const AgenticAI = () => {
  return (
    <section className="py-10 my-3 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">

        {/* Main Card Container with unified blue theme */}
        <div className="relative rounded-[2.5rem] bg-slate-950 overflow-hidden shadow-2xl shadow-blue-500/20">
          {/* Soft Background Gradients (all blue family) */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-blue-600/25 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute top-[20%] right-[20%] w-[40%] h-[40%] bg-sky-400/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 p-8 md:p-20">

            {/* Left: Text Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-400"></span>
                </span>
                <span className="text-sm font-semibold text-sky-100 tracking-wide">
                  Leadcore Agentic AI
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Not just a chatbot. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-300">
                  A Digital Employee.
                </span>
              </h2>

              <p className="text-lg text-slate-100/80 leading-relaxed max-w-lg">
                Our AI doesn't just answer FAQs. It negotiates deals, schedules meetings, and updates your CRM autonomously—24/7, with human-like empathy.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-white text-slate-950 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:scale-105 transform duration-300">
                  Deploy Agents <ArrowRight size={18} />
                </button>
                <button className="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all">
                  See Live Demo
                </button>
              </div>
            </div>

            {/* Right: Glassmorphism UI Mockup */}
            <div className="lg:w-1/2 w-full">
              <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-sky-500 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-lg flex items-center gap-2 animate-bounce">
                  <Sparkles size={14} /> 98% Accuracy
                </div>

                {/* Chat Interface */}
                <div className="space-y-6">
                  {/* User Msg */}
                  <div className="flex justify-end">
                    <div className="bg-blue-900/60 border border-blue-400/30 text-blue-50 px-5 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
                      Can you reschedule the demo with Acme Corp to next Tuesday?
                    </div>
                  </div>

                  {/* Processing State */}
                  <div className="flex items-center gap-2 text-xs text-blue-200/80 ml-10">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
                    Checking calendar availability...
                  </div>

                  {/* AI Msg */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/30 p-[1px]">
                      <div className="w-full h-full bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <Bot size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="bg-white/10 border border-white/10 text-white px-5 py-4 rounded-2xl rounded-tl-sm text-sm shadow-sm w-full">
                      <p className="mb-3">
                        Done. I've moved the meeting to{" "}
                        <span className="font-semibold text-sky-300">
                          Tuesday, Oct 24th at 2:00 PM
                        </span>
                        .
                      </p>

                      {/* Action Card inside Chat */}
                      <div className="bg-black/20 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                          <Check size={16} />
                        </div>
                        <div>
                          <div className="text-xs text-gray-300">
                            Calendar Updated
                          </div>
                          <div className="font-semibold text-xs">
                            Invite sent to rahul@acmecorp.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgenticAI;