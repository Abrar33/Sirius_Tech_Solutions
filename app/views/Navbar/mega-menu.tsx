"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Rocket, ArrowUpRight } from 'lucide-react';
import { serviceGroups } from './nav-items';

export default function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-5xl mt-4 bg-black border border-white/10 shadow-2xl overflow-hidden rounded-xl"
    >
      <div className="flex flex-col lg:flex-row p-8 gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 flex-grow">
          {serviceGroups.map((group, idx) => (
            <div key={idx} className="space-y-4">
              {group.links.map((link) => (
                <div key={link.name} className="group relative">
                  <Link 
                    href={link.path} 
                    className="flex items-center gap-4 py-3 text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="p-2 bg-white/5 border border-white/10 rounded-md group-hover:bg-teal-500 group-hover:text-black transition-all">
                      {link.icon}
                    </div>
                    <span className="text-sm font-medium tracking-wide">{link.name}</span>
                  </Link>
                  <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div className="lg:w-96 flex-shrink-0">
          <div className="bg-[#14b8a6] rounded-2xl p-8 h-full flex flex-col justify-between text-black relative overflow-hidden group/card">
            <Rocket className="absolute top-0 right-0 p-4 opacity-10 w-32 h-32 rotate-12" />
            <h4 className="relative z-10 text-2xl font-extrabold leading-tight mb-6">
              Your Growth Partner for Complete Solutions!
            </h4>
            <Link 
              href="/contact"
              className="relative z-10 w-fit flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-zinc-900 transition-colors"
            >
              Free Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}