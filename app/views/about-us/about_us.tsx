import React from 'react'
import ServiceHeader from '../components/services_header'
import ProvenImpactSection from './detail'
// import { Award, CheckCircle, Globe, MessageSquare, Rocket, Search, ShieldCheck, Users } from 'lucide-react';
import CompanyHighlights from './detail';
import DynamicServiceSection from '../components/dynamic_service';
import Team from '../virtualAssitance/Team';
import MissionVision from './mission_vision';
import CertificationsSection from './certification_section';
import { teamMembers } from '@/app/data/team';
import { serviceHeaders } from '@/app/data/service_header';

const About_us = () => {
const companyData = [
  // STATS (Items 5 & 8) - High visibility numbers
  { 
    id: 5, 
    iconName: "Users", 
    title: "Expert Team",
    text: "A team of 100+ skilled professionals delivering measurable impact" 
  },
  { 
    id: 8, 
    iconName: "MessageSquare", 
    title: "Reliability",
    text: "99.9% on time project completion and 100% client satisfaction" 
  },
  
  // NARRATIVE (Items 1, 2, & 7) - Detailed context
  { 
    id: 1, 
    iconName: "Rocket", 
    title: "Our Origin",
    text: "Founded in 2020, Sirius Tech Solutions is a global business transformation partner with over 5 years of proven expertise in empowering enterprises across the world. With a team of 100+ skilled professionals, we deliver measurable impact across BPO, HR, IT, Virtual Assistance, Digital Marketing, and Finance & Accounts services" 
  },
  { 
    id: 2, 
    iconName: "Search", 
    title: "Global Operations",
    text: "Operating across UK, USA, Canada, South Africa, Germany, Sweden, Australia, Netherlands, Ireland, France, Saudi Arabia, UAE, Qatar, Singapore, New Zealand, Switzerland, and Italy, we enable businesses to thrive with borderless technology and strategic insights." 
  },
  { 
    id: 7, 
    iconName: "CheckCircle", 
    title: "Proven Excellence",
    text: "With 580+ clients served across 20+ industries, a 99.9% on-time project completion rate, and 100% client satisfaction, we are committed to transforming challenges into opportunities for growth. Guided by visionary leaders with 20+ years of industry mastery, we combine expertise, innovation, and dedication to drive success globally." 
  },
];

  return (
    <>
    <ServiceHeader {...serviceHeaders.about_us}/>
    <CompanyHighlights data={companyData} />
    <MissionVision/>
    <CertificationsSection/>
    <Team heading='Our Leadership' members={teamMembers}/>
    <DynamicServiceSection layout="banner"
        image="https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg"
        title="Your Growth Start Here"
        description="Let’s break barriers and explore new frontiers of innovation together!"
        buttonText="Get Started Today"
    />
    </>
  )
}

export default About_us