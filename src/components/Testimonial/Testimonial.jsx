import React from "react";
import { testimonials } from "../../Data";
import { v4 as uuidv4 } from "uuid";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import { FaStar } from "react-icons/fa";
import { VscTriangleDown } from "react-icons/vsc";
import "./Testimonial.css";
function Testimonial() {
  return (
    <section className="testimonials container section" id="testimonials">
      <h2 className="section__title" data-title="Testimonials">
        What Client Say's
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
      >
        {testimonials.map(({ img, title, service, description }) => (
          <SwiperSlide className="testimonial__item" key={uuidv4()}>
            <div className="testimonial__qoute">
              <p className="testimonial__description">{description}</p>
              <VscTriangleDown className="testimonial__icon" />
            </div>
            <div className="testimonial__content">
              <div className="testimonial__img-wrapper">
                <img src={img} alt="" className="testimonial__img" />
              </div>
              <div>
                <h3 className="testimonial__title">{title}</h3>
                <p className="testimonial__service">{service}</p>

                <div className="testimonial__rating">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonial;
