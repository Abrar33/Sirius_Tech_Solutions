"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceHeader from "../components/services_header";
import FinanceHero from "./Trusted_financial_partner";
import ServicesSection from "../components/service_section";
import ProvenImpact from "./impact"; // Your impact component
import { FinancialServices,impactData } from "@/app/data/financialData"
import { serviceHeaders } from "@/app/data/service_header";
import WhyChooses from "../components/dynamic_choose_us";
import { Globe, Languages } from "lucide-react";
import SuccessStories from "../Home/Stories";
import DynamicServiceSection from "../components/dynamic_service";

const Finance = () => {
  const financeHeader = serviceHeaders?.financeAccounting;
const Features = [
  { icon: <Globe size={24} />, text: "Elite Global Talent..." },
  { icon: <Languages size={24} />, text: "Ironclad Security..." },
  // ... rest of features
];
  if (!financeHeader) return null;

  return (
    <main className="bg-black">
      <ServiceHeader {...financeHeader} />

      {/* 1. Hero Section with Side Stats */}
      <FinanceHero />

      <section id="finance-services" className="py-24 relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, #14b8a6 0%, transparent 70%)`,
            filter: "blur(120px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span className="text-teal-400 font-semibold tracking-widest uppercase text-sm">
              Precision & Growth
            </motion.span>
            <motion.h2 className="mt-4 text-4xl md:text-6xl font-extrabold text-white">
              Finance &{" "}
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Accounts Services
              </span>
            </motion.h2>
          </div>

          {/* 2. Proven Impact Section */}
          {/* This matches the layout where stats appear before the detailed service list */}
          <div className="mb-20">
            <ProvenImpact stats={impactData} title="Our Proven Impact" />
          </div>

          {/* 3. Reusable Services Section */}
          {/* This renders the image/text alternating blocks */}
          <ServicesSection data={FinancialServices} />
        </div>
      </section>
      <WhyChooses title="Why Choose Us" features={Features} />
      <SuccessStories/>
       <DynamicServiceSection
        layout="banner"
        image="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
        title="At Sirius Tech Solutions, we don’t just answer calls"
        description="We build Customer Loyalty, Accelerate Sales, and Optimize Performance."
        buttonText="Grow With STS"
      />
    </main>
  );
};

export default Finance;