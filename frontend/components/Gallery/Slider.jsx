"use client";
import Image from "next/image";
import stylesSlider from "./Slider.module.css";
import { useEffect, useState } from "react";
import api from "../../src/utils/Api";

function Slider() {
  const classNames = require("classnames");
  const [count, setCount] = useState(0);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    api.getInfo('gallery')
    .then(filesInfo => setFiles(filesInfo.results))
    .catch(err => console.log(err))
  }, []);
  

  const leftBtnClick = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(files.length - 1);
    }
  };
  
  const rightBtnClick = () => {
    setCount(count + 1);
    if (count === files.length - 1) {
      setCount(0);
    }
  };

  let filteredImages = files[count];

  return (
    <section className={stylesSlider.slider}>
      <div className={stylesSlider.wrapper}>
        <button
          className={classNames(stylesSlider.btn, stylesSlider.btn_left)}
          onClick={leftBtnClick}
        ></button>
        <button
          className={classNames(stylesSlider.btn, stylesSlider.btn_right)}
          onClick={rightBtnClick}
        ></button>
        {(filteredImages !== undefined && 
            <Image
            className={stylesSlider.slide}
            src={filteredImages.picture}
            width='1280'
            height='680'
            alt='Галерея'
            priority
          />
        )}
      </div>
    </section>
  );
}

export default Slider;