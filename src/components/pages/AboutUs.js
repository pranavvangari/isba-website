import React from 'react'
import '../../App.css'
import './AboutUs.css'


export default function AboutUs() {
    return (
        

        <div className='about-us-container'>

            <div className='about-us-picture'>
                <br /><br /><br /><br /><br /><h1 className='about-us-header'>Meet the Team</h1><br /><br /><br /><br /><br /><br /><br />
            </div>
            
            <div className='laptop-display'>
                <div className="left-person-info-container">
                    <div className="left-person-pic" id='president-picture'>
                        <a href='https://www.linkedin.com/in/swarajdhadkar/' target='_blank'><img src='/images/swaraj-headshot.JPG' alt='president-picture' /></a>
                    </div>
                    <div className="left-person-description">
                        <h3>Swaraj Dhakar</h3>
                        <h5>President</h5>
                        <p> Swaraj is a sophomore from Mumbai India, studying Marketing and Informatics. He hopes to get into consulting and eventually, go back to India and become a social entrepreneur.
                        </p>
                    </div>
                </div>

                <div className="right-person-info-container">
                    <div className="right-person-description">
                        <h3>Saachi Patil</h3>
                        <h5>Vice-President of Finance</h5>
                        <p>Swaraj is currently a Sophomore studying Business and Management. He hopes to learn about Business in Kelley and apply what he has learned to his own business in Indian
                            which specializes in cows and laptops.
                        </p>
                    </div>
                    <div className="right-person-pic">
                    <a href='https://www.linkedin.com/in/saachipatil/' target='_blank'><img src='/images/saachi-headshot.jpeg' alt='vp-finance-picture' /></a>
                    </div>
                </div>

                <div className="left-person-info-container">
                    <div className="left-person-pic" id='vp-tech-picture'>
                    <a href='https://www.linkedin.com/in/pranavvangari' target='_blank'><img src='/images/pranav-headshot.jpeg' alt='vp-tech-picture' /></a>
                    </div> 
                    
                    <div className="left-person-description">
                        <h3>Pranav Vangari</h3>
                        <h5>Vice-President of Technology</h5>
                        <p>
                            Pranav is currently a Sophomore from the Chicago suburbs, majoring in computer science and minoring in math and business. Pranav hopes to use his technical and business skills 
                            to help companies manage products and services
                        </p>
                    </div>  
                </div>
                
                
                <div className="right-person-info-container">
                    <div className="right-person-description">
                        <h3>Saisree Kona</h3>
                        <h5>Vice-President of External Relations</h5>
                        <p>Saisree is currently a Sophomore from Banglore India, double majoring in Marketing and Informatics. 
                        She hopes to go into consulting and start her own business. </p>
                    </div>
                    <div className="right-person-pic" id='vp-marketing-picture'>
                        <a href='https://www.linkedin.com/in/jiyagupta12/ ' target='_blank'><img src='/images/saisree-headshot.jpeg' alt='vp-marketing-picture' /></a>
                    </div>
                </div>
            </div>

            <div className='phone-display'>

                <h1 className='phone-display-header'>Meet the Team</h1>

                <div className="left-person-info-container">
                    <div className="left-person-pic" id='president-picture'>
                        <a href='https://www.linkedin.com/in/swarajdhadkar/' target='_blank'><img src='/images/swaraj-headshot.JPG' alt='president-picture' /></a>
                    </div>
                    <div className="left-person-description">
                        <h3>Swaraj Dhakar</h3>
                        <h5>President</h5>
                        <p>Swaraj is currently a Sophomore studying Business and Management. He hopes to learn about Business in Kelley and apply what he has learned to his own business in Indian
                            which specializes in cows and laptops.
                        </p>
                    </div>
                </div>

                <div className="left-person-info-container" id='vp-tech-container'>
                    <div className="left-person-pic" >
                        <img src='/images/pranav-headshot.jpeg' alt='vp-tech-picture' />
                    </div>
                    <div className="left-person-description">
                        <h3>Pranav Vangari</h3>
                        <h5>Vice-President of Technology</h5>
                        <p>
                            Pranav is currently a Sophomore studying Business and Management. He hopes to learn about Business in Kelley and apply what he has learned to his own business in Indian
                            which specializes in cows and laptops.
                        </p>
                    </div>
                </div>

                <div className="left-person-info-container" id='vp-finance-container'>
                    <div className="left-person-pic">
                        <img src='/images/saachi-headshot.jpeg' alt='vp-finance-picture' />
                    </div>
                    <div className="left-person-description">
                        <h3>Saachi Patil</h3>
                        <h5>Vice-President of Finance</h5>
                        <p>Swaraj is currently a Sophomore studying Business and Management. He hopes to learn about Business in Kelley and apply what he has learned to his own business in Indian
                            which specializes in cows and laptops.
                        </p>
                    </div>
                    
                </div>

                <div className="left-person-info-container" id='vp-external-com-container'>
                    <div className="left-person-pic">
                        <img src='/images/saisree-headshot.jpeg' alt='vp-external-com--picture' />
                    </div>
                    <div className="left-person-description">
                        <h3>Saisree Kona</h3>
                        <h5>Vice-President of External Relations</h5>
                        <p>Saisree is currently a Sophomore studying Business and Management. She hopes to learn about Business in Kelley and apply what he has learned to his own business in Indian
                            which specializes in cows and laptops.
                        </p>
                    </div>
                </div>
            </div>

        </div>
            

    );
}