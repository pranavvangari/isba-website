import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import './SocialEvent.css'



export default function SocialEvent() {
    return (
        
        <div className='social-event-container'>
            <br />
            <br />
            
            <div className='social-event-content'>
                <div className='carousel-container'>
                    <Carousel>
                        <div>
                            <img src='/images/isba-social-pic1.jpg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                            <img src='/images/isba-social-pic2.jpg' alt='img 2' />
                            {/* <p className='legend'>cap for img 2</p> */}
                        </div>
                        <div>
                            <img src='/images/isba-social-pic3.jpg' alt='img 3' />
                            {/* <p className='legend'>cap for img 2</p> */}
                        </div>
                        <div>
                            <img src='/images/isba-social-pic7.jpg' alt='img 7' />
                            {/* <p className='legend'>cap for img 2</p> */}
                        </div>
                        <div>
                            <img src='/images/isba-social-pic4.jpg' alt='img 4' />
                            {/* <p className='legend'>cap for img 2</p> */}
                        </div>
                        <div>
                            <img src='/images/isba-social-pic6.jpg' alt='img 6' />
                            {/* <p className='legend'>cap for img 2</p> */}
                        </div>
                        <div>
                            <img src='/images/isba-social-pic5.jpg' alt='img 5' />
                            {/* <p className='legend'>cap for img 2</p> */}
                        </div>
                        
                        
                    </Carousel>
                </div>
                <div className='event-info'>
                    <h1 className='social-event-title'>ISBA Social</h1>
                    <p>The ISBA Social was an event held on April 11th, 2024. Swaraj, the president of ISBA, aimed to put ISBA's name out into the campus as a new club that wants to make a mark on IU.
                        With a great turnout, many students were excited to learn about ISBA and how it can help them in their life both academically and professionally. 
                        
                    </p>
                </div>
            </div>

        </div>
        
    );
}

