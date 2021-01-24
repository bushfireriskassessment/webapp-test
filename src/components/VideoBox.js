import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function VideoBox() {
  return (
    <div className="cards">
      <h1>Find out more about what a risk assessment is and why you need it</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src='./images1/vid-placeholder.jpg'
              text='Testimonials from our customers'
              label='Short Video'
              path='/assessment'
            />
            <CardItem
              src='./images1/vid-placeholder.jpg'
              text='Why Protect Your Property?'
              label='Short Video'
              path='/assessment'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoBox;
