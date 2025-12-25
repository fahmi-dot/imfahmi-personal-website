import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home, PortfolioDetails, NotFound} from './pages'

const App = () => {
   useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio/:id' element={<PortfolioDetails />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App