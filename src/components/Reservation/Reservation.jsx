import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import shapeThree from "../../assets/shape-3.png";
import "./Reservation.css";
function Reservation() {
  return (
    <section className="reservation container" id="reservation">
      <h2 className="section__title" data-title="Reservation">
        Book A Table
      </h2>
      <form className="reservation__form grid">
        <div className="form__input-div">
          <input type="text" placeholder="Your Name" className="form__input" />
        </div>
        <div className="form__input-div">
          <input
            type="email"
            placeholder="Your Email Address"
            className="form__input"
          />
        </div>
        <div className="form__input-div">
          <input type="text" placeholder="Your Phone" className="form__input" />
        </div>
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Date Ex: DD/MM/YY"
            className="form__input"
          />
        </div>
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Time Ex: 01:23PM"
            className="form__input"
          />
        </div>
        <div className="form__input-div">
          <input
            type="text"
            placeholder="Number of People"
            className="form__input"
          />
        </div>
        <div className="form__input-div form__input-textarea">
          <textarea
            placeholder="Your Message"
            className="form__input"
          ></textarea>
        </div>
        <button className="btn btn--flex reservation__btn">
          <FaRegBookmark /> Book A Table
        </button>
      </form>
      <img src={shapeTwo} alt="" className="shape__two" />
      <img src={shapeThree} alt="" className="shape__three" />
    </section>
  );
}

export default Reservation;
