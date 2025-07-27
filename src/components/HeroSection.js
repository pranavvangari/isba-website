import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css'
import { Link } from 'react-router-dom';


function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1 className='hero-main-title'>INDIAN STUDENT BUSINESS ASSOCIATION</h1>
            <p>Indiana University Bloomington</p>
            <div className='hero-btns'>
                {/* <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button> */}
                <a href="#cards-section" className='get-started-button'>GET STARTED</a>
                
            </div>
            <div id='cards-section'>

            </div>
        </div>
        
    )
}

export default HeroSection