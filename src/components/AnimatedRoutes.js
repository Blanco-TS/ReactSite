import React from 'react';
import Home from './pages/Home';
import Voiture from './Voiture';
import AppClock from './AppClock';
import { Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Compact from './VoitureCompact'

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <div>
        <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/voiture" exact element={<Voiture />} />
          <Route path="/voiturec" exact element={<Compact />} />
          <Route path="/test" exact element={<AppClock />} />
          <Route path="https://twoside.gitbook.io/welcome-to-gitbook/" exact element={() =>{
            window.location.href = 'https://twoside.gitbook.io/welcome-to-gitbook/'; 
            return null;
          }} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
