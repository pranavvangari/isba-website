import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Navbar from '../Navbar';
import Values from '../Values';


function Home () {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Values />
        </>
    )
}

export default Home;