"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// 1. Define the Country interface
interface Country {
  name: string;
  code: string;
}

const countries: Country[] = [
  { name: "UK", code: "GB" },
  { name: "USA", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "South Africa", code: "ZA" },
  { name: "Germany", code: "DE" },
  { name: "Sweden", code: "SE" },
  { name: "Australia", code: "AU" },
  { name: "Netherlands", code: "NL" },
  { name: "Ireland", code: "IE" },
  { name: "France", code: "FR" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "UAE", code: "AE" },
  { name: "Qatar", code: "QA" },
  { name: "Singapore", code: "SG" },
  { name: "New Zealand", code: "NZ" },
  { name: "Switzerland", code: "CH" },
  { name: "Italy", code: "IT" },
  { name: "Spain", code: "ES" },
];

const GlobalReach: React.FC = () => {
  // 2. Type the Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Empowering business <br />
            <span className="text-teal-500">worldwide</span> remotely
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl font-light"
          >
            We offer our expert services across various borders, ensuring top-tier
            solutions for countries like:
          </motion.p>
        </div>

        {/* Countries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {countries.map((country) => (
            <motion.div
              key={country.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(20, 184, 166, 0.1)",
                borderColor: "rgba(20, 184, 166, 0.5)",
              }}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 transition-colors cursor-default"
            >
              <span className="text-white font-semibold text-lg group-hover:text-teal-400 transition-colors text-center">
                {country.name}
              </span>
              <div className="mt-2 h-1 w-0 bg-teal-500 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReach;