import React from 'react';
import './testimonials.css';
import Img1 from '../../assets/photo1.jpg';
import Img2 from '../../assets/photo2.jpg';

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    name: 'Valeria Kovalyova',
    photo: Img1,
    review: 'Diana is an employee with whom it is a pleasure to work in a team. She will always help, give good advice and help solve the problem.',
    workPosition: 'Business analyst',
  },
  {
    name: 'Olshevsky Dmitry',
    photo: Img2,
    review: 'A very hard working employee. Very responsible and never gives up. If she does not know the answer to any question, then this is not a problem for her, she will look for this advice until she gets it.',
    workPosition: 'Senior front-end developer'
  },]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from colleaguess</h5>
      <h1>Testimonials</h1>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className='container testimonials_container'
        Pagination>
        {data.map(({ name, photo, review, workPosition }, index) =>
          <SwiperSlide className='testimonial' key={index}>
            <div className='avatar'>
              <img src={photo} alt='Avatar One' />
            </div>
            <h5 className='colleague_name'>
              {name}
            </h5>
            <h4 className='colleague_position'>
              {workPosition}
            </h4>
            <small className='colleague_review'>
              {review}
            </small>
          </SwiperSlide>
        )}
      </Swiper>



    </section >
  )
}

export default Testimonials;
