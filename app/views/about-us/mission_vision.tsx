"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const MissionVision = () => {
  const missionPoints = [
    "World-class BPO, HR, IT, and Digital solutions.",
    "Empowering enterprises with cutting-edge technology.",
    "Unmatched client satisfaction and timely delivery.",
    "Building a culture of excellence and sustained growth."
  ];

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Dynamic Green Glow Backgrounds */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* MISSION CARD - Emerald Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-br from-emerald-500/40 via-transparent to-transparent group"
          >
            <div className="h-full p-8 md:p-12 rounded-[23px] bg-[#0a0a0a] backdrop-blur-3xl border border-white/5 flex flex-col hover:bg-[#0f0f0f] transition-colors duration-500">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-500">
                  <Target className="w-9 h-9 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Our Mission</h2>
                  <div className="h-1 w-12 bg-emerald-500 mt-1 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                {missionPoints.map((point, i) => (
                  <div key={i} className="flex gap-3 items-start group/point">
                    <div className="mt-1 bg-emerald-500/20 p-1 rounded-md">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    </div>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover/point:text-emerald-50 group-hover:text-gray-300 transition-colors">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* VISION CARD - Darker Green/Black Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-[1px] rounded-3xl bg-gradient-to-tr from-green-500/40 via-transparent to-transparent group"
          >
            <div className="h-full p-8 md:p-12 rounded-[23px] bg-[#0a0a0a] backdrop-blur-3xl border border-white/5 flex flex-col justify-center relative overflow-hidden">
              {/* Subtle inner glow for Vision */}
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-emerald-500/5 blur-3xl rounded-full" />
              
              <div className="flex items-center gap-5 mb-10 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover:border-green-500/50 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-500">
                  <Eye className="w-9 h-9 text-green-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight">Our Vision</h2>
                  <div className="h-1 w-12 bg-green-500 mt-1 rounded-full" />
                </div>
              </div>

              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl font-medium text-gray-300 leading-relaxed italic border-l-4 border-emerald-500/50 pl-6 group-hover:text-white transition-colors duration-500">
                  "To be the leading global partner in business transformation, delivering innovative, seamless, and scalable solutions that empower enterprises to thrive in a digital-first world."
                </p>
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;