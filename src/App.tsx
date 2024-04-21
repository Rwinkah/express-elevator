import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reason from './components/Reason'
import Expertise from './components/Expertise'
// import ElevatorComponents from './components/ElevatorComponents'
import CarouselSize from './components/ElevatorComponents'

function App() {


  return (
    <div id='main-page' className='bg-[#fafafa] max-w-[100vw] m-0 p-0 overflow-hidden'>
      <Navbar />
      <Hero />
      <Reason />
      <Expertise />
      <div className='%]'>
      <CarouselSize />
      </div>
    </div>
  )
}

export default App
