import React from "react";
import { gallery } from "../../Data";
import { v4 as uuidv4 } from "uuid";
import { BsPlusLg } from "react-icons/bs";
import "./Gallery.css";
function Gallery() {
  return (
    <section className="gallery section" id="gallery">
      <h2 className="section__title" data-title="Gallery">
        Our Phto Gallery
      </h2>
      <div className="gallery__grid container grid">
        {gallery.map(({ img, title }) => (
          <div className="gallery__item" key={uuidv4()}>
            <img src={img} alt="" className="gallery__img" />
            <a href="/" className="gallery__icon">
              <BsPlusLg />
            </a>
            <h3 className="gallery__title">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
