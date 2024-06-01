import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Gallery from './components/Gallery'

function App() {


  return (
    <Router>
      <>
      <Navbar/>
      <Routes>
       <Route  path="/" element={<MainPage/>}/>
       <Route path="/gallery" element={<Gallery/>}/>
      </Routes>

      </>
    </Router>


  )
}

export default App
