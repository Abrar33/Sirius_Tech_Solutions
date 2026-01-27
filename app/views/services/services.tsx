import React from 'react'
import ServiceHeader from '../components/services_header'
import ServicesSection from '../components/service_section'
import { bpoServices } from '@/app/data/bpoData'

const Services = () => {
  return (
    <>
    <ServiceHeader title='Our Services'description='We offer a wide range of services to help your business thrive' image=''/>
    <ServicesSection data={bpoServices}/>
    </>
  )
}

export default Services