import React from "react";
import ServiceHeader from "./../components/services_header";
import WhyChooseUs from "./WhyChooseUs";
// Note: WhyChooses and certain icons are imported but currently unused in your JSX
import { Globe, Languages, Users, LayoutPanelLeft } from "lucide-react";
import VirtualAssistantServices from "./virtual_assitance_services";
import TrustSection from "../Home/Trust";
import SuccessStories from "../Home/Stories";
import Team from "./Team";
import FeatureHighlight from "./WhyChooseUs";
import { vaHighlight } from "@/app/data/choose_us";
import { TeamMember } from "@/app/types/serviceType";
import { teamMembers } from "@/app/data/team";
import DynamicServiceSection from "../components/dynamic_service";
import { serviceHeaders } from "@/app/data/service_header";
// 1. Define an interface for the Feature items
interface CallCenterFeature {
  icon: React.ReactNode;
  text: string;
}

const callCenterFeatures: CallCenterFeature[] = [
  {
    icon: <Globe />,
    text: "High-volume efficiency with 24/7 global support",
  },
  {
    icon: <Languages />,
    text: "Multilingual agents serving worldwide audiences (20+ languages and dialects)",
  },
  {
    icon: <Users />,
    text: "1000+ trained agents handing 4.6M calls per month",
  },
  {
    icon: <LayoutPanelLeft />,
    text: "AI-Powered Monitoring & Reporting tools",
  },
];

/**
 * VirtualAssistance Page Component
 * TypeScript Functional Component (FC)
 */
const VirtualAssistance: React.FC = () => {
  return (
    <div>
      <ServiceHeader
      {...serviceHeaders.virtualAssistant}
      />

      <FeatureHighlight {...vaHighlight} />

      {/* Specialty Services Section */}
      <VirtualAssistantServices />

      {/* Social Proof & Trust Indicators */}
      <TrustSection />

      {/* Meet the Team Section */}
      <Team
        heading="Our Virtual Assistants At Your Service"
        members={teamMembers}
      />

      {/* Case Studies / Success Stories */}
      <SuccessStories />
          <DynamicServiceSection
        layout="banner"
        image="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
        title="Looking to scale your Virtual Assistance team?"
        description="Partner with Sirius Tech Solutions for talent, technology, and transformation."
        buttonText="Get Started Today"
      />
    </div>
  );
};

export default VirtualAssistance;
