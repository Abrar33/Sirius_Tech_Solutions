import React from 'react'
import ServiceHeader from '../components/services_header'
import ServicesSection from '../components/service_section'
import { bpoServices } from '@/app/data/bpoData'

const Services = () => {
  return (
    <>
    <ServiceHeader title='I'description='iu' image=''/>
    <ServicesSection data={bpoServices}/>
    </>
  )
}

export default Services