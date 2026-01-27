"use client";

import React from "react";
import ServiceHeader from "../components/services_header";
import ServicesSection from "../components/service_section";
import WhyChooses from "../components/dynamic_choose_us";
import SuccessStories from "../Home/Stories";
import DynamicServiceSection from "../components/dynamic_service";
import { Globe, Languages } from "lucide-react";

// DATA IMPORTS
import { bpoServices } from "@/app/data/bpoData";
import { serviceHeaders } from "@/app/data/service_header";

const Features = [
  { icon: <Globe size={24} />, text: "Elite Global Talent..." },
  { icon: <Languages size={24} />, text: "Ironclad Security..." },
  // ... rest of features
];

const Bpo: React.FC = () => {
  return (
    <>
      <ServiceHeader {...serviceHeaders.bpo} />

      {/* Passing the data from the external file */}
      <ServicesSection data={bpoServices} />

      <WhyChooses title="Why Choose Us" features={Features} />
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