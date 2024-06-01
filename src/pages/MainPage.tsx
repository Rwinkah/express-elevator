import Hero from "@/components/Hero"
import HeroFooter from "@/components/HeroFooter"
import ReasonNew from "@/components/ReasonNew"
import Expertise from "@/components/Expertise"
import CarouselSize from "@/components/ElevatorComponents"
import TechTalk from "@/components/TechTalk"
import Footer from "@/components/Footer"

export default function MainPage() {
    return(
        <div id='main-page' className='flex flex-col gap-5 bg-[#fafafa] max-w-[100vw] m-0 p-0 overflow-x-hidden'>
        <Hero  />
        <HeroFooter />
        {/* <Reason /> */}
        <ReasonNew/>
        <TechTalk />
        <Expertise />
        <CarouselSize />
        <Footer />
      </div>
    )
}