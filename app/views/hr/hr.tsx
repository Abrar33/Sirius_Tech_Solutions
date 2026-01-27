import React from 'react';
import ServiceHeader from '../components/services_header';
import TalentAcquisition from './HiringAquations';
import HiringApproach from './HiringApproch';
import hrData from '@/app/data/hr';
import HRServiceSection from './HrServices';
import SuccessStories from '../Home/Stories';
import WhyChooseUs from '../virtualAssitance/WhyChooseUs';
import FeatureHighlight from '../virtualAssitance/WhyChooseUs';
import { hrHighlight } from '@/app/data/choose_us';
/**
 * HrServices Page Component
 * Handles the layout for Recruitment, Onboarding, and HR Management sections.
 */
const HrServices: React.FC = () => {
  // Define the header image as a constant for cleaner JSX
  const headerImage = "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg";

  return (
    <>
      <ServiceHeader 
        title="HR Services"
        description="Our HR services are designed to streamline your human resources operations, enhance employee engagement, and ensure compliance with labor laws. From recruitment and onboarding to payroll management and performance evaluation, we provide comprehensive solutions tailored to your business needs."
        image={headerImage}
      />

      {/* Section focusing on finding the right talent */}
      <TalentAcquisition />

      {/* Section focusing on the methodology of hiring */}
      <HiringApproach />
     {hrData.map((service, index) => (
        <HRServiceSection 
          key={index} 
          {...service} 
        />
      ))}
      <FeatureHighlight {...hrHighlight}/>
      <SuccessStories/>
    </>
  );
};

export default HrServices;