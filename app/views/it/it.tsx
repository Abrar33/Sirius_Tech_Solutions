import React from 'react';
import ServiceHeader from '../components/services_header';
import ItServices from './itServices';
import SuccessStories from '@/app/views/Home/Stories'
import DynamicServiceSection from './DynamicService';

/**
 * SoftwareServices Page Component
 * This component assembles the Software Services view using various sections.
 */
const SoftwareServices: React.FC = () => {
  return (
    <>
      {/* Hero / Header Section */}
      <ServiceHeader 
        title="Software Services" 
        description="Our software services encompass a wide range of solutions designed to meet your business needs, from custom software development to system integration and maintenance."
        image="https://ncrisolutions.com/wp-content/uploads/2025/08/IT-Services-Banner-2048x569.webp"  
      />      
      
      {/* IT Specific Services Grid */}
      <ItServices />
      
      {/* Customer Success Case Studies */}
      <SuccessStories />
      
      {/* Call to Action Banner */}
      <DynamicServiceSection
        layout="banner"
        image="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
        title="Looking to scale your IT team or build a future-ready product?"
        description="Partner with ST Solutions for talent, technology, and transformation."
        buttonText="Get Started Today"
      />
    </>
  );
};

export default SoftwareServices;