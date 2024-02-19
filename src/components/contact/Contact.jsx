import React, { useRef } from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { SiGooglemessages } from 'react-icons/si';
import { FaTelegramPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_glirjlw', 'template_679cc21', form.current, 'dGASW0H8dHpV9uj4U')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h1>Contact me</h1>
      <div className='container contact_container'>

        <div className='contact_options'>

          <article className='contact_option'>
            <MdEmail size={'2rem'} className='contact_option-icon' />
            <h4>Email</h4>
            <h5>dianalyah23@gmail.com</h5>
            <a href='mailto:dianalyah23@gmail.com' target={'_blank'}>Sent a message</a>
          </article>

          <article className='contact_option'>
            <SiGooglemessages size={'2rem'} className='contact_option-icon' />
            <h4>Linkedin</h4>
            <h5>Diana Lyah</h5>
            <a href='https://www.linkedin.com/in/diana-lyah-7332641a2/' target={'_blank'}>Sent a message</a>
          </article>

          <article className='contact_option'>
            <FaTelegramPlane size={'2rem'} className='contact_option-icon' />
            <h4>Telegram</h4>
            <h5>+375 (25) 541 38 74</h5>
            <a href='https://t.me/DianaLyah' target={'_blank'}>Sent a message</a>
          </article>

        </div>

        <form ref={form} action='' className='forms' onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn'>
            Send message
          </button>
        </form>

      </div>

    </section >
  )
}

export default Contact
