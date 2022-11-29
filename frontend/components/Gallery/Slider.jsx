"use client";

import "./Slider.component.css";
import Image from "next/image";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.jpg";
import slide6 from "../../images/slide6.jpg";
import slide7 from "../../images/slide7.jpg";

const Slider = () => {
  let offset = 0;
  let slidesCount = 0;
  const handleButtonRightClick = () => {
    if (slidesCount < 6) {
      const sliderLine = document.querySelector(".slider-line");
      const slideCircles = document.querySelectorAll(".slide-circle");
      const widthForOffest = sliderLine.closest(".slider").offsetWidth;
      slideCircles.forEach((c) => {
        c.classList.remove("active");
      });
      offset += widthForOffest + 48;
      slidesCount++;
      slideCircles[slidesCount].classList.add("active");
      sliderLine.style.left = `-${offset}px`;
    }
  };
  const handleButtonLeftClick = () => {
    if (slidesCount > 0) {
      const sliderLine = document.querySelector(".slider-line");
      const slideCircles = document.querySelectorAll(".slide-circle");
      const widthForOffest = sliderLine.closest(".slider").offsetWidth;
      slideCircles.forEach((c) => {
        c.classList.remove("active");
      });
      offset -= widthForOffest + 48;
      slidesCount--;
      slideCircles[slidesCount].classList.add("active");
      sliderLine.style.left = `-${offset}px`;
    }
  };
  function goToSlide(count) {
    const sliderLine = document.querySelector(".slider-line");
    const slideCircles = document.querySelectorAll(".slide-circle");
    const widthForOffest = sliderLine.closest(".slider").offsetWidth;
    slideCircles.forEach((c) => {
      c.classList.remove("active");
    });
    slideCircles[count].classList.add("active");
    slidesCount = count;
    offset = count * (widthForOffest + 48);
    sliderLine.style.left = `-${offset}px`;
  }
  return (
    <div className="slider-component">
      <div className="slider">
        <div className="slider-line">
          <Image src={slide1} alt="" />
          <Image src={slide2} alt="" />
          <Image src={slide3} alt="" />
          <Image src={slide4} alt="" />
          <Image src={slide5} alt="" />
          <Image src={slide6} alt="" />
          <Image src={slide7} alt="" />
        </div>
      </div>
      <button className="buttonLeft" onClick={handleButtonLeftClick}>
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            r="44.5"
            transform="matrix(-1 0 0 1 45 45)"
            fill="#E75D22"
            stroke="#FCFCFD"
          />
          <path
            d="M60.75 45H29.25M29.25 45L45 29.25M29.25 45L45 60.75"
            stroke="#FCFCFD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button className="buttonRight" onClick={handleButtonRightClick}>
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="45" cy="45" r="44.5" fill="#E75D22" stroke="#FCFCFD" />
          <path
            d="M29.25 45H60.75M60.75 45L45 29.25M60.75 45L45 60.75"
            stroke="#FCFCFD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="slider-page">
        <button
          className="slide-circle active"
          onClick={() => goToSlide(0)}
        ></button>
        <button className="slide-circle" onClick={() => goToSlide(1)}></button>
        <button className="slide-circle" onClick={() => goToSlide(2)}></button>
        <button className="slide-circle" onClick={() => goToSlide(3)}></button>
        <button className="slide-circle" onClick={() => goToSlide(4)}></button>
        <button className="slide-circle" onClick={() => goToSlide(5)}></button>
        <button className="slide-circle" onClick={() => goToSlide(6)}></button>
      </div>
    </div>
  );
};

export default Slider;
