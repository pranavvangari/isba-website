import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <br/><br/><br/>
      <h1>Recent and Upcoming Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {/* <CardItem
              src='images/resume-workshop-pic1.jpg'
              text='Resume Workshop on October 8th'
              label='October 8th 2024'
              path='/ResumeWorkshopOctEight'
            /> */}
            <CardItem
              src='images/isba-social-pic1.JPG'
              text='ISBA Social Launch'
              label='April 11th 2024'
              path='/SocialEvent'
            />
            <CardItem
              src='images/ey-card-pic-2.jpg'
              text='Ernst & Young Speaker Event'
              label='September 24th 2024'
              path='/EYEvent'
            />
            <CardItem
              src='images/isba-letter-logo.jpg'
              text='Consulting Alumni Panel'
              label='February 6th 2025'
              path='/ConsultingPanel'
            />

            <CardItem
              src='images/isba-letter-logo.jpg'
              text='How to get an internship workshop'
              label='Upcoming'
              path='/'
            />
          </ul>
          
          
        </div>
      </div>

    </div>
    
  );
}

export default Cards;


{/* <CardItem
              src='images/isba-letter-logo.jpg'
              text='Stay tuned for new events for the upcoming Fall 2024 semester!'
              label='Coming Soon'
              path='/'
            /> */}