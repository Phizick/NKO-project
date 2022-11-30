"use client";
import img1 from "../../images/slide1.jpg";
import img2 from "../../images/slide2.jpg";
import img3 from "../../images/slide3.jpg";
import img4 from "../../images/slide4.jpg";
import img5 from "../../images/slide5.jpg";
import img6 from "../../images/slide6.jpg";
import img7 from "../../images/slide7.jpg";
import Image from "next/image";
import stylesSlider from "./Slider.module.css";
import { useState } from "react";
function Slider() {
  const classNames = require("classnames");
  const [count, setCount] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const leftBtnClick = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(images.length - 1);
    }
  };
  const rightBtnClick = () => {
    setCount(count + 1);
    if (count === images.length - 1) {
      setCount(0);
    }
  };
  let filteredImages = images[count];
  return (
    <section className={stylesSlider.slider}>
      <div className={stylesSlider.div}>
        <button
          className={classNames(stylesSlider.btn, stylesSlider.btn_left)}
          onClick={leftBtnClick}
        ></button>
        <button
          className={classNames(stylesSlider.btn, stylesSlider.btn_right)}
          onClick={rightBtnClick}
        ></button>
        <Image
          className={stylesSlider.slide}
          src={filteredImages.src}
          width={filteredImages.width}
          height={filteredImages.height}
          alt="Фото"
        />
      </div>
    </section>
  );
}

export default Slider;
