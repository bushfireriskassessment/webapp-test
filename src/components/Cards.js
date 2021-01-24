import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Our blog features posts to keep you up to date with the latest in bushfire safety</h1>
      <div className="cards--container">
        <div className="cards--wrapper">
          <ul className="cards--items">
            <CardItem
              src='./images1/blog-1.jpg'
              text='How the outcomes of the Royal Commission are impacting homeowners'
              label='Article'
              path='/blog'
            />
            <CardItem
              src='./images1/blog-2.jpg'
              text='Data-driven bushfire risk analysis could drive insurance premiums down'
              label='Blog Post'
              path='/blog'
            />
            <CardItem
              src='./images1/blog-3.jpg'
              text='Simple steps to build your home to standard in a cost-effective way'
              label='Advice'
              path='/blog'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
