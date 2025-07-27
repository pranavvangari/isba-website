import React from 'react'
import './Values.css'

function Values() {
    return (
        <div className='values-content'>
            <div class="values-section">
                <h2 className='values-header'>Our Values</h2>
                <div class="values-container">
                    <div class="value-item">
                        <img src="images/professionalism-values-icon.png" alt="Professionalism" />
                        <p>Professionalism</p>
                    </div>
                    <div class="value-item">
                        <img src="images/leadership-values-icon.png" alt="Leadership" />
                        <p>Leadership</p>
                    </div>
                    <div class="value-item">
                        <img src="images/networking-values-icon.png" alt="Networking" />
                        <p>Networking</p>
                    </div>
                    
                </div>
                {/* <button class="learn-more">Learn More</button> */}
            </div>
        </div>
    )
}

export default Values