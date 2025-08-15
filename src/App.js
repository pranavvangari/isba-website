import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs';
import SocialEvent from './components/pages/SocialEvent';
import AboutISBA from './components/pages/AboutISBA';
import EYEvent from './components/pages/EYEvent';
import ResumeWorkshopOctEight from './components/pages/ResumeWorkshopOctEight';
import Footer from './components/Footer';
import ConsultingPanel from './components/pages/ConsultingPanel';
import Resources from './components/pages/Resources';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact Component={Home}/>
          <Route path='/SocialEvent' Component={SocialEvent}></Route>
          <Route path='/AboutUs' Component={AboutUs}></Route>
          <Route path='/Resources' Component={Resources}></Route>
          <Route path='/AboutISBA' Component={AboutISBA}></Route>
          <Route path='/EYEvent' Component={EYEvent}></Route>
          <Route path='/ResumeWorkshopOctEight' Component={ResumeWorkshopOctEight}></Route>
          <Route path='/ConsultingPanel' Component={ConsultingPanel}></Route>
          

        </Switch>
        <Footer />

      </Router>
      

      
    </>
  );
}

export default App;
