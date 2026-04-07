import PropAdvantage from "../components/PropAdvantage"
import PropCta from "../components/PropCta"
import PropHeader from "../components/PropHeader"
import PropHero from "../components/PropHero"
import PropPillerPoint from "../components/PropPillerPoint"
import PropRoadmapSection from "../components/PropRaodmap"
import PropTheMathSection from "../components/PropTheMath"
import PropWorkingModel from "../components/PropWorkingModel"
import useSEO from "../../hooks/useSEO.js"


const PropPage = () => {

 useSEO({
  title: "Promote Coworking, Virtual & Commercial Office Spaces | Earn as Property Influencer | AssetSense",
  
  description:
    "Partner with AssetSense as a property influencer and promote coworking spaces, virtual offices, and commercial properties across Delhi, Gurgaon, and Pan India. Earn commissions by generating quality leads.",
  
  keywords:
    "property influencer India, real estate marketing India, promote office spaces, coworking promotion India, virtual office promotion, commercial property marketing, real estate affiliate India, office space advertising Gurgaon Delhi",
});
  return (
    <div className='bg-[#070604]'>
      <PropHeader/>
      <PropHero/>
      <PropPillerPoint/>
      <PropWorkingModel/>
      <PropTheMathSection/>
      <PropAdvantage/>
      <PropRoadmapSection/>
      <PropCta/>
    </div>
  )
}

export default PropPage
