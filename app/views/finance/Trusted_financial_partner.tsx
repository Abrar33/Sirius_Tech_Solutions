"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// --- Static Data & Interface ---
interface StatItem {
  id: number;
  label: string;
  subLabel: string;
}

const HERO_DATA = {
  eyebrow: "Your Trusted Financial Partner",
  title: "Empowering Business Growth Through Expert Solutions",
  description: "With over a decade of experience, certified accountants, and global delivery expertise, we simplify financial operations for businesses of all sizes. From daily bookkeeping to strategic FP&A insights, we enable smarter decisions, stronger compliance, and sustainable growth.",
  stats: [
    { id: 1, label: "80+", subLabel: "Global Clients Served" },
    { id: 2, label: "$500M+", subLabel: "Invoices Processed Every Year" },
    { id: 3, label: "Expertise Across", subLabel: "QuickBooks, Xero, FreshBooks, Zoho Books, Power BI" },
  ] as StatItem[],
};

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FinanceHero = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p 
            variants={itemVariants} 
            className="text-[#00a7a7] text-lg font-medium mb-4"
          >
            {HERO_DATA.eyebrow}
          </motion.p>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8"
          >
            {HERO_DATA.title}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants} 
            className="text-gray-400 text-lg leading-relaxed max-w-xl"
          >
            {HERO_DATA.description}
          </motion.p>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="w-full"
        >
          {HERO_DATA.stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`flex items-start gap-5 py-8 ${
                index !== HERO_DATA.stats.length - 1 ? "border-b border-gray-800" : ""
              }`}
            >
              {/* Arrow Circle */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#111] flex items-center justify-center border border-gray-800">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00a7a7"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              {/* Text Area */}
              <div>
                <h3 className="text-[#00a7a7] text-2xl md:text-3xl font-bold mb-1">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  {stat.subLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FinanceHero;