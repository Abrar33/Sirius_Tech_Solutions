"use client";

import React from 'react';
import ServiceHeader from '../components/services_header';
import WhyChooses from '../components/dynamic_choose_us';
import { Globe, Languages } from 'lucide-react';
import SuccessStories from '../Home/Stories';
import ServicesSection from '../components/service_section';
import { MarketingChooseUs } from '@/app/data/choose_us';
import DynamicServiceSection from '../components/dynamic_service';
import { serviceHeaders } from '@/app/data/service_header';

// 1. Define the Feature interface (Matches your dynamic_choose_us component)
interface MarketingFeature {
  icon: React.ReactElement; // Must be ReactElement, not ReactNode, for cloneElement to work
  text: string;
}

// 2. Define the Service interface for the main content grid
interface MarketingService {
  title: string;
  description: string;
  points: string[];
  buttonText: string;
  image: string;
  reverse: boolean;
}



const services: MarketingService[] = [
  {
    title: "Social Media Management",
    description: "Turn followers into loyal customers with a data-driven social strategy. Our social media experts manage everything from content creation to community engagement.",
    points: [
      "Account setup & brand alignment",
      "Content calendar planning & design",
      "Audience engagement & reputation management",
      "Paid social campaigns & analytics"
    ],
    buttonText: "Engage Your Audience Today",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Social-Media-Management.webp",
    reverse: false
  },
  {
    title: "Website Content & Design Development",
    description: "Your website is your digital storefront—it must impress, inform, and convert. We build responsive, user-friendly, and SEO-optimized websites designed to elevate your brand.",
    points: [
      "Custom website design & UI/UX",
      "Content development that resonates with your audience",
      "SEO optimization for visibility",
      "E-commerce integration & performance tracking"
    ],
    buttonText: "Build a Website That Converts",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Website-Content-Design-Development.webp",
    reverse: true
  },
  {
    title: "Content Marketing",
    description: "Content fuels digital growth. From blogs to branded assets, we create engaging, SEO-optimized content that educates, inspires, and converts",
    points: [
      "Blog posts, whitepapers & case studies",
      "Video and infographic content",
      "Content strategy & distribution",
      "SEO keyword research & optimization"
    ],
    buttonText: "Boost Your Rankings",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Content-Marketing.webp",
    reverse: false
  },
  {
    title: "Email Marketing & Automation",
    description: "Nurture leads and drive repeat sales with personalized email journeys. We create automated workflows that work for you while you sleep.",
    points: [
      "Email list segmentation & growth",
      "Custom newsletter design & copywriting",
      "Automated drip campaigns & funnels",
      "A/B testing & conversion optimization"
    ],
    buttonText: "Start Your Campaign",
    image: "https://ncrisolutions.com/wp-content/uploads/2025/08/Email-Marketing.webp",
    reverse: true
  }
];

const DigitalMarketing: React.FC = () => {
  return (
    <>
      <ServiceHeader
      {...serviceHeaders.digitalMarketing}
      />
      
      {/* ServicesSection expects data: ServiceItem[] */}
      <ServicesSection data={services}/>
      
      {/* WhyChooses expects features: Feature[] */}
      <WhyChooses 
        title='Why Choose Our Digital Marketing Services' 
        features={MarketingChooseUs} 
      />
      
      <SuccessStories />
          <DynamicServiceSection
        layout="banner"
        image="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
        title="Looking to scale your Digital Marketing team?"
        description="Partner with ST Solutions for talent, technology, and transformation."
        buttonText="Get Started Today"
      />
    </>
  );
}

export default DigitalMarketing;