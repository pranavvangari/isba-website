import React from 'react'
import './Resources.css'
import Footer from '../Footer'

import '../../App.css'




function Resources() {
    return (
        <div className='resources-container'>
            <div className='resources-picture'>
                <br /><br /><br /><br /><br /><h1 className='resources-header'>Resources</h1><br /><br /><br /><br /><br /><br /><br />
            </div>

            <br /><br /><br />


            <div class="values-section">
                <h2 className='values-header'>Helpful Links</h2>
                <br />
                <div class="values-container">
                    <div class="value-item">
                        <a href="https://one.iu.edu/" target="_blank" rel="noopener noreferrer"><h3>One.IU</h3></a>
                        <p>One.IU is the place where you will find almost anything you need, whether you want to see your schedule, register for classes, pay your fees, and much more!</p>
                    </div>
                    <div class="value-item">
                        <a href="https://beinvolved.indiana.edu/" target="_blank" rel="noopener noreferrer"><h3>beINvolved</h3></a>
                        <p>beINvolved contains every single organization, so that it is easy for you to find and show interest in the ones that interest you. </p>
                    </div>
                    <div class="value-item">
                        <h3>TBD</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    
                </div>
                {/* <button class="learn-more">Learn More</button> */}
            </div>
            
            
                
        </div>
    )
}

export default Resources