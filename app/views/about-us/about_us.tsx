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

const About_us = () => {
  const companyData = [
  { id: 1, iconName: "Rocket", text: "Founded in 2008" },
  { id: 2, iconName: "Search", text: "15+ years of proven business transformation experience" },
  { id: 3, iconName: "Globe", text: "Presence in 7 countries with 14 state of the art facilities" },
  { id: 4, iconName: "ShieldCheck", text: "Fully compliant with PCI, ISO, SOC2 & GDPR standards" },
  { id: 5, iconName: "Users", text: "A team of 1900+ skilled professionals delivering measurable impact" },
  { id: 6, iconName:" Award", text: "Proudly certified as a Great Place to Work, Canada (5 consecutive years)" },
  { id: 7, iconName: "CheckCircle", text: "Successfully served 580+ clients across 20+ industries and expanding" },
  { id: 8, iconName: "MessageSquare", text: "99.9% on time project completion and 100% client satisfaction" },
];

  return (
    <>
    <ServiceHeader title="About Us" description="Learn more about our company, mission, and values." image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"/>
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