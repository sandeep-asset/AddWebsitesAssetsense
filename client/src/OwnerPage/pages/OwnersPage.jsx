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
import HeroPropertyList from '../componets/HeroPropertyList'
import WaysToEarn from '../componets/WaysToEarn'
import OnboardingSteps from '../componets/OnboardingSteps'
import TrustSignals from '../componets/TrustSignals'
import ContactForm from '../componets/ContactForm'
import WhatsAppButton from '../componets/WhatsAppButton'

const OwnersPage = () => {
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
      {/* <section id="features">
        <IncomeStreams />
      </section> */}
      <GoogleTrust />
      <WhatWeHandle />
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
