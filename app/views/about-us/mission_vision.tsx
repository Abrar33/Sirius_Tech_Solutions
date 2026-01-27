"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react"; // Using Lucide for clean icons

const MissionVision = () => {
  const cards = [
    {
      title: "Our Mission",
      description:
        "Our team’s mission is to develop and support digital solutions for our consultants and clients, so they get better, faster insights and results. We are at the forefront of the digital disruption in consultancy by delivering technology solutions that help solve the most difficult problems.",
      icon: <Target className="w-8 h-8 text-teal-400" />,
    },
    {
      title: "Our Vision",
      description:
        "Our dedication to innovation and forward development inspires us to imagine a future where ground-breaking ideas may take off. With steadfast determination, we help people and companies reach new heights of achievement by releasing their latent potential.",
      icon: <Eye className="w-8 h-8 text-teal-400" />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-10 bg-black min-h-screen justify-center items-center">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover="hover"
          className="relative group cursor-pointer w-full max-w-md"
        >
          {/* The Gradient Border/Glow Layer */}
          <motion.div
            variants={{
              hover: { opacity: 1 },
            }}
            initial={{ opacity: 0 }}
            className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-teal-400/50 to-teal-900/20 blur-sm transition duration-500"
          />

          {/* Main Card Body */}
          <motion.div
            variants={{
              hover: {
                background: "linear-gradient(to bottom right, #134e4a, #042f2e, #0a0a0a)",
              },
            }}
            className="relative h-full px-8 py-10 rounded-2xl bg-[#0f0f0f] border border-white/10 flex flex-col gap-4 overflow-hidden transition-colors duration-500"
          >
            {/* Icon and Title */}
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-teal-950/30 border border-teal-500/20">
                {card.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mt-2">
                {card.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
              {card.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default MissionVision;