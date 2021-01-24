import React from 'react'
import '../App.css'
import { Button } from './Button'
import './AssessmentMain.css'

function AssessmentMain() {
  return (
    <div className='assessmain-container'>
      <h1>IS YOUR PROPERTY AT RISK?</h1>
      <p>Find out if you reside in bushfire prone land </p>
      <p>by entering your address below</p>
      <div className='input-areas'>
        <form>
          <input
            className='address-input'
            name='email'
            type='email'
            placeholder='Enter your address'
          />
          <Button buttonStyle='btn--primary' buttonSize='btn--xlarge'>Search</Button>
        </form>
      </div>
    </div>
  )
}

export default AssessmentMain
