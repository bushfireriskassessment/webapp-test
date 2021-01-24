import React from 'react'
import '../App.css'
import { Button } from './Button'
import './MainSection.css'

function MainSection() {
  return (
    <div className='main-container'>
      <img className='main-logo' src='./images1/BRA-logo.png' alt="BRA LOGO"></img>
      <h1>BUSHFIRE RISK ASSESSMENTS</h1>
      <p>Understand risk and build community resilience</p>
      <div className='main-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          LEARN MORE <i class="fas fa-play-circle"></i>
        </Button>
      </div>

    </div>



  )
}

export default MainSection
