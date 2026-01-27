"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  UserCheck, Target, BarChart3, Cpu, Database, 
  Search, Share2, Globe, PenTool, Briefcase, 
  LineChart, Settings 
} from "lucide-react";

// 1. Define the interface for a Service item
interface Service {
  name: string;
  icon: React.ReactNode; // ReactNode handles JSX elements like <UserCheck />
}

const services: Service[] = [
  { name: "Virtual Assistant", icon: <UserCheck size={28} /> },
  { name: "Lead Generation", icon: <Target size={28} /> },
  { name: "PPC Expert", icon: <BarChart3 size={28} /> },
  { name: "IT Support", icon: <Settings size={28} /> },
  { name: "Software Developer", icon: <Cpu size={28} /> },
  { name: "Graphic Designer", icon: <PenTool size={28} /> },
  { name: "Financial Analyst", icon: <LineChart size={28} /> },
  { name: "SEO Expert", icon: <Search size={28} /> },
  { name: "Social Media", icon: <Share2 size={28} /> },
  { name: "Web Developer", icon: <Globe size={28} /> },
  { name: "App Developer", icon: <Briefcase size={28} /> },
  { name: "Database Dev", icon: <Database size={28} /> },
];

export default function VirtualServices(): React.ReactElement {
  return (
    <section className="relative bg-[#0a0a0a] pt-24 pb-32 overflow-hidden">
      
      {/* 1. TOP WAVE */}
      <div className="absolute top-0 left-0 w-full leading-[0] z-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            d="M0 0H1440V120C1440 120 1080 40 720 40C360 40 0 120 0 120V0Z" 
            fill="#14b8a6" 
            fillOpacity="0.15"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Virtual Services <span className="text-teal-500">That We Offer:</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Providing high-quality remote staffing solutions across multiple industries.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="mb-4 text-teal-500 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-200 group-hover:text-white">
                {service.name}
              </h3>
              {/* Subtle accent line */}
              <div className="mt-3 h-1 w-0 bg-teal-500 group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-0">
        <svg 
          viewBox="0 0 1440 150" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            d="M0 80C360 160 1080 0 1440 80V150H0V80Z" 
            fill="#14b8a6" 
            fillOpacity="0.1"
          />
          <path 
            d="M0 80C360 160 1080 0 1440 80" 
            stroke="#14b8a6" 
            strokeWidth="2" 
            strokeOpacity="0.3" 
            fill="none"
          />
        </svg>
      </div>

    </section>
  );
}