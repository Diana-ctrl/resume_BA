import React from 'react';
import './footer.css';
import { GrInstagram } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>DIANA LYAH</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.instagram.com/diana_lyah/' target={'_blank'}>
          <GrInstagram size={'2rem'} />
        </a>
        <a href='https://www.linkedin.com/in/diana-lyah-7332641a2/' target={'_blank'}>
          <BsLinkedin size={'2rem'} />
        </a>
        <a href='https://github.com/Diana-ctrl' target={'_blank'}>
          <FaGithub size={'2rem'} />
        </a>
      </div>

      <div className='footer_copyright'>
        <small>
          &copy; All right reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer;
