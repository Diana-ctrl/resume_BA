import React from 'react'
import CV from '../../assets/CV.pdf';
import './header.css';

const Buttons = () => {
  return (
    <div className='but'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#contact' className='btn btn-primary'>Go to contacts</a>
    </div>
  )
}

export default Buttons
