import PropAdvantage from "../components/PropAdvantage"
import PropCta from "../components/PropCta"
import PropHeader from "../components/PropHeader"
import PropHero from "../components/PropHero"
import PropPillerPoint from "../components/PropPillerPoint"
import PropRoadmapSection from "../components/PropRaodmap"
import PropTheMathSection from "../components/PropTheMath"
import PropWorkingModel from "../components/PropWorkingModel"


const PropPage = () => {
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
