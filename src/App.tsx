import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroFooter from './components/HeroFooter'
import TechTalk from './components/TechTalk'
import Expertise from './components/Expertise'
// import ElevatorComponents from './components/ElevatorComponents'
import CarouselSize from './components/ElevatorComponents'
import Footer from './components/Footer'
import ReasonNew from './components/ReasonNew'

function App() {


  return (
    <>
    <Navbar/>
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
    </>

  )
}

export default App
