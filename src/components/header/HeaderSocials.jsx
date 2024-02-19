import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import './header.css';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/diana-lyah-7332641a2/' target='_blank' rel="noreferrer" ><BsLinkedin size={'2rem'} /></a>
      <a href='https://github.com/Diana-ctrl' target='_blank' rel="noreferrer"><BsGithub size={'2rem'} /></a>
    </div>
  )
}

export default HeaderSocials
