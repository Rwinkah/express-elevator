import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reason from './components/Reason'
import Expertise from './components/Expertise'
// import ElevatorComponents from './components/ElevatorComponents'
import CarouselSize from './components/ElevatorComponents'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar/>
        <div id='main-page' className='bg-[#fafafa] max-w-[100vw] m-0 p-0 overflow-x-hidden'>
      <Hero  />
      <Reason />
      <Expertise />
      <CarouselSize />
      <Footer />
    </div>
    </>

  )
}

export default App
