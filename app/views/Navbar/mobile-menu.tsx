"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, X } from "lucide-react";
import { serviceGroups } from "./nav-items";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: string[];
}

export default function MobileNavigation({ isOpen, onClose, navItems }: MobileNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Helper to format paths (Sync with your Navbar logic)
  const getPath = (item: string) => {
    if (item === "Home") return "/";
    return `/${item.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[61] h-screen w-[85%] max-w-sm bg-[#0a0a0a] p-8 border-l border-white/10 lg:hidden overflow-y-auto"
          >
            {/* Close Button inside drawer */}
            <div className="flex justify-end mb-8">
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item} className="flex flex-col">
                  {item === "Services" ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between text-xl font-bold text-white py-2 text-left"
                      >
                        <span>{item}</span>
                        <motion.div animate={{ rotate: isServicesOpen ? 180 : 0 }}>
                          <ChevronDown />
                        </motion.div>
                      </button>

                      {/* Nested Accordion */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden space-y-2 mt-2 ml-2 border-l border-white/10"
                          >
                            {serviceGroups.flatMap((g) => g.links).map((service) => (
                              <Link
                                key={service.name}
                                href={service.path}
                                onClick={onClose}
                                className="flex items-center gap-3 p-3 text-gray-400 hover:text-teal-500 transition-colors"
                              >
                                <span className="text-teal-500/80">{service.icon}</span>
                                <span className="text-sm font-medium">{service.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={getPath(item)}
                      onClick={onClose}
                      className="text-xl font-bold text-white py-2"
                    >
                      {item}
                    </Link>
                  )}
                </div>
              ))}

              <hr className="border-white/10 my-4" />

              <Link
                href="/contact"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-teal-500 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-teal-400 transition-colors"
              >
                Contact Us <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}