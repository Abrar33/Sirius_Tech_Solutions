"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

// Local Imports
import MegaMenu from "./mega-menu";
import MobileNavigation from "./mobile-menu";
import { serviceGroups } from "./nav-items";
import logoImg from "@/public/assets/3.png"; // Use @ alias for cleaner imports

const navItems = ["Home", "About Us", "Services", "Resources"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 top-0 z-50 flex items-center transition-all duration-500 ${
          isScrolled || mobileMenuOpen
            ? "h-20 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-2xl"
            : "h-24 bg-transparent"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="relative h-32 w-36">
            <Image 
              src={logoImg} 
              alt="Company Logo" 
              fill 
              priority
              className="object-contain scale-125"
            />
          </Link>

          {/* Desktop Navigation */}
         {/* Desktop Navigation */}
<ul className="hidden items-center gap-10 lg:flex h-full">
  {navItems.map((item) => (
    <li
      key={item}
      className="relative flex h-full items-center cursor-pointer text-sm font-semibold tracking-wide text-gray-300/90"
      onMouseEnter={() => setHoveredItem(item)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {/* Wrap everything in a Link. 
          Even "Services" now points to its own page.
      */}
      <Link
        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
        className={`flex items-center gap-1 py-8 transition-colors hover:text-white ${
          hoveredItem === item ? "text-white" : ""
        }`}
      >
        {item}
        {item === "Services" && (
          <motion.span animate={{ rotate: hoveredItem === "Services" ? 180 : 0 }}>
            <ChevronDown size={14} />
          </motion.span>
        )}
      </Link>

      {/* Animated Underline */}
      {hoveredItem === item && (
        <motion.span
          layoutId="underline"
          className="absolute bottom-6 left-0 h-[2px] w-full bg-teal-500"
        />
      )}

      {/* Mega Menu Integration (Triggered by hover) */}
      <AnimatePresence>
        {item === "Services" && hoveredItem === "Services" && (
          <MegaMenu />
        )}
      </AnimatePresence>
    </li>
  ))}
</ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:block rounded-md bg-teal-500 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black hover:bg-teal-400 transition-all"
            >
              Contact Us ↗
            </Link>
            
            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Integration */}
      <MobileNavigation 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        navItems={navItems}
      />
    </>
  );
}