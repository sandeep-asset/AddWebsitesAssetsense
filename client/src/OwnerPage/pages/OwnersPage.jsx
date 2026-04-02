import React from 'react'
import Header from '../componets/OwnerHeader'
import { HeroSection } from '../componets/OwnerHeroSection'
import HowItWorks from '../componets/OwnerHowitWork'
import IncomeStreams from '../componets/OwnerIncomeStream'
import GoogleTrust from '../componets/OwnerGoogleTrust'
import PricingSection from '../componets/OwnerPricing'
import GettingStarted from '../componets/OwnerGetting'
import FinalCTA from '../componets/OwnerFinalCta'
import WhatWeHandle from '../componets/OwnerWhatwehandle'
import WhyChooseUs from '../componets/OwnerWhychooseus'
import Footer from '../../BrokersPage/components/Footer'

const OwnersPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="features">
        <IncomeStreams />
      </section>
      <GoogleTrust />
      <WhatWeHandle />
      <section id="pricing">
        <PricingSection/>
      </section>
      <GettingStarted />
      <WhyChooseUs />
      <section id="contact">
        <FinalCTA/>
      </section>
      <Footer/>
    </div>
  )
}

export default OwnersPage
