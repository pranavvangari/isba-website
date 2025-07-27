import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './SocialEvent.css'



export default function EYEvent() {
    return (
        
        <div className='social-event-container'>
            <br />
            <br />
            
            <div className='social-event-content'>
                <div className='carousel-container'>
                    <Carousel>
                        <div>
                            <img src='/images/ey-event-pic1.jpeg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                            <img src='/images/ey-event-pic2.jpeg' alt='img 2' />
                            {/* <p className='legend'>cap for img 2</p> */}
                        </div>
                        <div>
                            <img src='/images/ey-event-pic5.jpeg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                            <img src='/images/ey-event-pic4.jpeg' alt='img 2' />
                            {/* <p className='legend'>cap for img 2</p> */}
                        </div>
                        
                        
                        
                        
                    </Carousel>
                </div>
                <div className='event-info'>
                    <h1 className='social-event-title'>Ernst & Young Speaker Event</h1>
                    <p>Pavan Idnani, a technology consultant at EY and an IU alum, spoke about his experience about being an IU student and landing an internship at EY, securing a full-time return offer by the end. Pavan spoke about how
                       during his internship, he set a goal to speak to three full-time employees through out his eight-week internship, gaining many connections throughout the company, ultimately showcasing his out-going nature and technology skills.   
                    </p>
                </div>
            </div>
            <div className='footer-div'>

            </div>
        </div>
        
    );
}

