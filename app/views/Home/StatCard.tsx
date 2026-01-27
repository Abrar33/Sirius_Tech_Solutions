"use client";

import { motion } from "framer-motion";
import React from "react";

// 1. Define the shape of a single stat
interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "500+", label: "Professionals" },
  { value: "100+", label: "Clients" },
  { value: "30+", label: "Industries" },
];

export default function StatsCard(): React.ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="absolute bottom-10 right-10 hidden gap-12 rounded-2xl bg-white/10 px-10 py-6 backdrop-blur-lg md:flex"
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <p className="text-3xl font-bold text-white">{stat.value}</p>
          <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}