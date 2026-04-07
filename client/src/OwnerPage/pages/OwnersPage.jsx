import React from 'react'
import Header from '../componets/OwnerHeader'

import HowItWorks from '../componets/OwnerHowitWork'
import IncomeStreams from '../componets/OwnerIncomeStream'
import GoogleTrust from '../componets/OwnerGoogleTrust'
import PricingSection from '../componets/OwnerPricing'
import GettingStarted from '../componets/OwnerGetting'
import FinalCTA from '../componets/OwnerFinalCta'
import WhatWeHandle from '../componets/OwnerWhatwehandle'
import WhyChooseUs from '../componets/OwnerWhychooseus'
import Footer from '../../BrokersPage/components/Footer'
import HeroPropertyList from '../componets/HeroPropertyList'
import WaysToEarn from '../componets/WaysToEarn'
import OnboardingSteps from '../componets/OnboardingSteps'
import TrustSignals from '../componets/TrustSignals'
import ContactForm from '../componets/ContactForm'
import WhatsAppButton from '../componets/WhatsAppButton'
import useSEO from '../../hooks/useSEO.js'

const OwnersPage = () => {

  useSEO({
    title: "Direct Property Listing for Coworking & Offices | Asset Sense Workspaces ",
   description:
    "List your commercial property on AssetSense and earn from coworking, virtual office, managed office, and resale opportunities. Get direct leads with zero brokerage across Delhi, Gurgaon, and Pan India.",
  
  keywords:
    "list property India, commercial property listing, coworking space listing, virtual office listing, managed office space India, office space Gurgaon, office space Delhi, monetize property India, direct property leads, no brokerage property listing",
});
  return (
    <div className="min-h-screen">
      <Header />
      <HeroPropertyList/>
      <WaysToEarn/>
      <section id="how-it-works">
      <OnboardingSteps/>
      </section>

      {/* <HeroSection /> */}
      {/* <section id="how-it-works">
        <HowItWorks />
      </section> */}
      {/* 
        <IncomeStreams />
      </section> */}
      <GoogleTrust />
<section id="features">
      <WhatWeHandle />
      </section>
      <section id="pricing">
        <PricingSection/>
      </section>
      <GettingStarted />
      {/* <WhyChooseUs /> */}
      <TrustSignals/>
      {/* <WhatsAppButton/> */}
      <section id="contact">
      <ContactForm/>

      </section>
      <Footer/>
    </div>
  )
}

export default OwnersPage
