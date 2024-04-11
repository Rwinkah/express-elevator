import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reason from './components/Reason'
import Expertise from './components/Expertise'

function App() {


  return (
    <div id='main-page' className='bg-[#fafafa] max-w-[100vw] m-0 p-0'>
      <Navbar />
      <Hero />
      <Reason />
      <Expertise />
    </div>
  )
}

export default App
