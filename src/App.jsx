import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, PortfolioDetails, NotFound} from './pages'

const App = () => {
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