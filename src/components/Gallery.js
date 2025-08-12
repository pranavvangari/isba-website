import React from 'react'
import './Gallery.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

function Gallery() {
    return (
        <div className='social-event-container'>
            <br />
            <br />
            <h1>Gallery</h1>
            <div className='gallery-content'>
                <div className='carousel-container'>
                    <Carousel 
                    className="isba-carousel"
                    autoPlay
                    interval={3000}       // ms between slides
                    infiniteLoop
                    showStatus={false}
                    showThumbs={false}    // optional: hides thumbs to keep it compact
                    swipeable
                    emulateTouch
                    stopOnHover
                    transitionTime={600}>
                        
                        <div>
                            <img src='/images/gallery-pic-8.jpg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                            <img src='/images/gallery-pic-1.jpg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                        <img src='/images/gallery-pic-2.jpg' alt='img 1' />
                        {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                            <img src='/images/gallery-pic-4.jpg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                            <img src='/images/gallery-pic-5.jpg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                            <img src='/images/gallery-pic-6.jpg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        <div>
                            <img src='/images/gallery-pic-7.jpg' alt='img 1' />
                            {/* <p className='legend'>cap for img 1</p> */}
                        </div>
                        
                        
                        
                        
                        
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Gallery