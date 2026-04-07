import React from 'react'
import BrokerHeroSection from '../components/BrokerHerosection'
import Header from '../components/Header'
import WhyBrokersChoose from '../components/WhyBrokersChoose'
import CoreServices from '../components/CoreServices'
import HowItWorks from '../components/HowItWorks'
import BenefitsSection from '../components/BenefitsSection'
import TrustSection from '../components/TrustSection'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import AdvancedPackages from '../components/AdvancedPackages'
import PricingSection from '../components/PricingSection'
import useSEO from '../../hooks/useSEO.js'

const Brokers = () => {
  useSEO({
  title: "Find Office Spaces for Clients | Broker Platform for Coworking & Commercial Properties | AssetSense",
  
  description:
    "Join AssetSense as a broker and access premium coworking spaces, managed offices, and commercial properties across Delhi, Gurgaon, and Pan India. Close deals faster with verified listings and direct owner connections.",
  
  keywords:
    "property brokers India, commercial real estate brokers, coworking brokers Delhi, office space brokers Gurgaon, broker platform India, real estate leads India, managed office brokers, virtual office brokers, office leasing brokers India",
});
  return (
    <div>
        <Header/>
        <BrokerHeroSection/>
        <WhyBrokersChoose/>
        <CoreServices/>
        <PricingSection/>
        {/* <AdvancedPackages/> */}
        <HowItWorks/>
        <BenefitsSection/>
        <TrustSection/>
        <FinalCTA/>
        <Footer/>
    </div>
  )
}

export default Brokers;
