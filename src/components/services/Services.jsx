import React from 'react'
import './services.css';
import { BsCheckLg } from 'react-icons/bs';

const dataRN = ['Creation and support of the front-end part of applications', 'Creation of logic for receiving and sending data to the server', 'Development of user interface for applications', 'Implementation of navigation', 'Work with animation', 'Connection of maps', 'Connection of analytics and crashlitiks', 'Assembling application builds and uploading them to Google Play and Apple Store', 'Work with Firebase, Swagger', 'Work with bugs'];
const dataReact = ['Creation and support of the front-end part of applications', 'Connection of libraries', 'Creation of logic for receiving and sending data to the server', 'Implementation of navigation', 'Work with animation', 'Work with Firebase, Swagger', 'Work with bugs'];
const dataLayout = ['SCSS', 'SASS', 'CSS', 'Material-UI'];

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h1>Services</h1>

      <div className='container services_container'>

        <article className='service'>
          <div className='service_head'>
            <h3>
              React
            </h3>
          </div>
          <ul className='service_list'>
            {dataReact.map(el =>
              <li>
                <BsCheckLg className='service_list-icon' />
                <p>{el}</p>
              </li>
            )}
          </ul>

        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>
              React Native
            </h3>
          </div>
          <ul className='service_list'>
            {dataRN.map(el =>
              <li>
                <BsCheckLg className='service_list-icon' />
                <p>{el}</p>
              </li>
            )}
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>
              Layout
            </h3>
          </div>
          <ul className='service_list'>
            {dataLayout.map(el =>
              <li>
                <BsCheckLg className='service_list-icon' />
                <p>{el}</p>
              </li>
            )}
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services
