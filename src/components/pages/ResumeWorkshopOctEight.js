import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './ResumeWorkshopOctEight.css';
import './SocialEvent.css'
import Footer from '../Footer';


export default function SocialEvent() {
    return (
        
        <div className='social-event-container'>
            <br />
            <br />
            
            <div className='social-event-content'>
                
                <div className='event-info'>
                    <h1 className='social-event-title'>LinkedIn and Resume Workshop</h1>
                    <p>Learn how to build your LinkedIn and Resume on October 8th 2024 from Rachel Landis, a Kelley Professor who teaches Kelley Compass II.
                       RSVP with this <a href='https://forms.gle/i2J6rBq8fZxSy8nh6' target='_blank'>link</a> and join us to enchance your professional portfolio. 
                    </p>
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

