import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Navbar from '../Navbar';
import Values from '../Values';
import Gallery from '../Gallery';


function Home () {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Gallery />
            <Values />
            
        </>
    )
}

export default Home;