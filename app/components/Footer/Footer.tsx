"use client"; // Required for Lucide icons and interactivity

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Linkedin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import logo from '@/public/assets/3.png';
import Image from 'next/image';
// 1. Define TypeScript Interfaces
interface NavLink {
  name: string;
  href: string;
}

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamic year for 2026

  const usefulLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and conditions", href: "/terms" },
  ];

  const services = [
   { name: "IT Services", slug: "it" },
  { name: "BPO Services", slug: "bpo" },
  { name: "Finance & Accounting", slug: "finance" },
  { name: "HR Solutions", slug: "hr" },
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Virtual Assistance", slug: "virtual-assistance" },
];

  return (
    <footer className="relative bg-[#020a0a] text-white pt-24 overflow-hidden font-sans">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#0f3d39] via-[#020a0a] to-black opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Call to Action Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to scale your business with Sirius Tech Solutions?
            </h2>
            <p className="text-gray-300 text-lg">
              Your growth starts here! Scale smarter with Sirius Tech Solutions. Book your free consultation now!
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex bg-white rounded-md overflow-hidden p-1 min-w-[320px] md:min-w-112.5">
            <input 
              type="email" 
              placeholder="Email" 
              className="grow px-4 py-3 text-black focus:outline-none placeholder:text-gray-500"
            />
            <button className="bg-[#14b8a6] hover:bg-[#0d9488] transition-colors text-white px-8 py-3 flex items-center gap-2 font-semibold rounded-sm">
              Send <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <hr className="border-gray-800/60 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              {/* <div className="text-4xl font-bold tracking-tighter"> */}
                <Image src={logo} alt="Sirius Tech Solutions Logo" className="w-30 h-20 scale-200 hover:scale-x-100 object-contain" />
              {/* </div> */}
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              &copy; {currentYear} Sirius Solutions<br />
              A trusted global partner empowering businesses with smarter outsourcing and innovative technology.
            </p>
            <div className="flex gap-3">
              <SocialIcon href="https://linkedin.com" icon={<Linkedin className="w-4 h-4" />} />
              <SocialIcon href="https://facebook.com" icon={<Facebook className="w-4 h-4" />} />
              <SocialIcon href="https://instagram.com" icon={<Instagram className="w-4 h-4" />} />
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-[#14b8a6]">Contact</h3>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white" /> +92-3115616556
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white" /> info@siriustechsolutions.com
              </li>
            </ul>
          </div>

          {/* Useful Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-8 text-[#14b8a6]">Quick Links</h3>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#14b8a6] transition-colors flex items-center gap-2 group text-sm">
                    <ArrowUpRight className="w-4 h-4 text-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
         {/* Services Column */}
<div>
  <h3 className="text-xl font-bold mb-8 text-[#14b8a6]">Services</h3>
  <ul className="space-y-4">
    {services.map((service) => (
      <li key={service.slug}>
        <Link 
          href={`/services/${service.slug}`} 
          className="text-gray-300 hover:text-[#14b8a6] transition-colors flex items-center gap-2 group text-sm"
        >
          <ArrowUpRight className="w-4 h-4 text-[#14b8a6] opacity-0 group-hover:opacity-100 transition-opacity" />
          {service.name}
        </Link>
      </li>
    ))}
  </ul>
</div>
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-gray-800 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-sm text-gray-400 font-medium">
            Copyright © Sirius Tech Solutions {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// 2. Typed SocialIcon Component
function SocialIcon({ icon, href }: SocialIconProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-2.5 bg-white text-black rounded-md hover:bg-[#14b8a6] hover:text-white transition-all shadow-sm"
    >
      {icon}
    </a>
  );
}
