"use client";

import React from "react";
import ServiceHeader from "../components/services_header";
import ServicesSection from "../components/service_section";
import WhyChooses from "../components/dynamic_choose_us";
import SuccessStories from "../Home/Stories";
import DynamicServiceSection from "../components/dynamic_service";
import { Award, Clock, Globe, Languages, MessageSquare, ShieldCheck, TrendingDown } from "lucide-react";

// DATA IMPORTS
import { bpoServices } from "@/app/data/bpoData";
import { serviceHeaders } from "@/app/data/service_header";
import { BpoChooseUs } from "@/app/data/choose_us";
// const Features = [
//   { 
//     icon: <Globe size={24} className="text-emerald-400" />, 
//     text: "Elite Global Talent – Skilled professionals delivering world-class service." 
//   },
//   { 
//     icon: <Clock size={24} className="text-emerald-400" />, 
//     text: "24/7 Customer Support – Round-the-clock availability for maximum satisfaction." 
//   },
//   { 
//     icon: <ShieldCheck size={24} className="text-emerald-400" />, 
//     text: "Ironclad Security – Top-tier data protection for sensitive business information." 
//   },
//   { 
//     icon: <TrendingDown size={24} className="text-emerald-400" />, 
//     text: "Cost-Effective Solutions – Reduce operational costs without compromising quality." 
//   },
//   { 
//     icon: <MessageSquare size={24} className="text-emerald-400" />, 
//     text: "Multi-Channel Expertise – Engage customers via Phone, Email, Chat & Social Media seamlessly." 
//   },
//   { 
//     icon: <Award size={24} className="text-emerald-400" />, 
//     text: "Proven Track Record – Hundreds of satisfied clients across multiple industries." 
//   },
// ];

const Bpo: React.FC = () => {
  return (
    <>
      <ServiceHeader {...serviceHeaders.bpo} />

      {/* Passing the data from the external file */}
      <ServicesSection data={bpoServices} />

      <WhyChooses title="Why Choose Us" features={BpoChooseUs} />
      <SuccessStories />

      <DynamicServiceSection
        layout="banner"
        image="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
        title="At Sirius Tech Solutions, we don’t just answer calls"
        description="We build Customer Loyalty, Accelerate Sales, and Optimize Performance."
        buttonText="Grow With STS"
      />
    </>
  );
};

export default Bpo;