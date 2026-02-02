"use client";
import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

// 1. Define the shape of a single highlight item
interface HighlightItem {
  id: number;
  iconName: string;
  title: string; // Added this so we can have bold headings
  text: string;
}

// 2. Define the props for the component
interface CompanyHighlightsProps {
  data: HighlightItem[];
}

// 3. Apply the interface to the component
const CompanyHighlights: React.FC<CompanyHighlightsProps> = ({ data }) => {
  return (
    <section className="bg-[#050505] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-teal-500 font-mono text-sm uppercase tracking-[0.3em] mb-4">Our Impact</h2>
          <div className="h-1 w-20 bg-teal-500 rounded-full" />
        </div>

        {/* This "Bento Grid" spread makes long text look much better */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {data.map((item, index) => {
            const LucideIcon = (Icons as any)[item.iconName] || Icons.HelpCircle;
            
            // Logic: items with more than 150 characters take more space
            const isLong = item.text.length > 150;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${
                  isLong ? "md:col-span-3" : "md:col-span-2"
                } relative group p-8 rounded-3xl bg-[#0A0A0A] border border-gray-800 hover:border-teal-500/40 transition-all duration-500`}
              >
                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-500 group-hover:scale-110 transition-transform">
                    <LucideIcon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-white text-xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-base">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;