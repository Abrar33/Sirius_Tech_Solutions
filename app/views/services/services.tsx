import React from 'react'
import ServiceHeader from '../components/services_header'
import ServicesSection from '../components/service_section'
import { bpoServices } from '@/app/data/bpoData'
import { serviceHeaders as serviceHeader } from '@/app/data/service_header';
const Services = () => {
  return (
    <>
    <ServiceHeader {...serviceHeader.ourServices}/>
    <ServicesSection data={bpoServices}/>
    </>
  )
}

export default Services