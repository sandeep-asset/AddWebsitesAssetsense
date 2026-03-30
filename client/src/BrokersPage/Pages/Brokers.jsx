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

const Brokers = () => {
  return (
    <div>
        <Header/>
        <BrokerHeroSection/>
        <WhyBrokersChoose/>
        <CoreServices/>
        <AdvancedPackages/>
        <HowItWorks/>
        <BenefitsSection/>
        <TrustSection/>
        <FinalCTA/>
        <Footer/>
    </div>
  )
}

export default Brokers;
