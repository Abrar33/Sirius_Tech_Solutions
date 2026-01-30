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
  { id: 1, iconName: "Rocket", text: "Founded in 2020" },
  { id: 2, iconName: "Search", text: "5+ years of proven business transformation experience" },
  { id: 5, iconName: "Users", text: "A team of 100+ skilled professionals delivering measurable impact" },
  { id: 7, iconName: "CheckCircle", text: "Successfully served 580+ clients across 20+ industries and expanding" },
  { id: 8, iconName: "MessageSquare", text: "99.9% on time project completion and 100% client satisfaction" },
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