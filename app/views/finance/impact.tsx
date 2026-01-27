"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ImpactStat, ProvenImpactProps } from "@/app/types/serviceType";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProvenImpact: React.FC<ProvenImpactProps> = ({ 
  title = "Proven Impact", 
  stats 
}) => {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-white text-3xl font-bold mb-10 ml-2"
        >
          {title}
        </motion.h2>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={cardVariants}
              className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 flex items-center gap-6 hover:border-teal-900/50 transition-colors group"
            >
              {/* Circle Container */}
              <div className="flex-shrink-0 w-24 h-24 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-gray-800 group-hover:border-teal-500/30 transition-all">
                <span className="text-[#00a7a7] text-2xl font-bold">
                  {stat.percentage}
                  <span className="text-sm ml-0.5">%</span>
                </span>
              </div>

              {/* Label Content */}
              <p className="text-gray-200 text-lg leading-snug font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProvenImpact;