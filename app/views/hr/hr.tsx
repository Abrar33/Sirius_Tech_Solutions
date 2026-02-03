import React from "react";
import ServiceHeader from "../components/services_header";
import TalentAcquisition from "./HiringAquations";
import HiringApproach from "./HiringApproch";
import hrData from "@/app/data/hr";
import HRServiceSection from "./HrServices";
import SuccessStories from "../Home/Stories";
import WhyChooseUs from "../virtualAssitance/WhyChooseUs";
import FeatureHighlight from "../virtualAssitance/WhyChooseUs";
import { hrHighlight } from "@/app/data/choose_us";
import DynamicServiceSection from "../components/dynamic_service";
import { serviceHeaders } from "@/app/data/service_header";
/**
 * HrServices Page Component
 * Handles the layout for Recruitment, Onboarding, and HR Management sections.
 */
const HrServices: React.FC = () => {
  // Define the header image as a constant for cleaner JSX
  const headerImage =
    "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg";

  return (
    <>
      <ServiceHeader
      {...serviceHeaders.hr}
      />

      {/* Section focusing on finding the right talent */}
      <TalentAcquisition />

      {/* Section focusing on the methodology of hiring */}
      <HiringApproach />
      {hrData.map((service, index) => (
        <HRServiceSection key={index} {...service} />
      ))}
      <FeatureHighlight {...hrHighlight} />
      <SuccessStories />
          <DynamicServiceSection
        layout="banner"
        image="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
        title="Looking to scale your HR team or build a future-ready workforce?"
        description="Partner with ST Solutions for talent, technology, and transformation."
        buttonText="Get Started Today"
      />
    </>
  );
};

export default HrServices;
