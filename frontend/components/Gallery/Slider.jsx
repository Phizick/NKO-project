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
    api.getInfo('files')
    .then(filesInfo => setFiles(filesInfo.results))
    .catch(err => console.log(err))
  }, []);
  
  const images = [];

  console.log(files)

  files.map(file => {
    if(file.is_fond_doc === false && file.file_field !== null) {
      images.push({
      src: file.file_field,
      height: 960,
      width: 1280,
      blurHeight: 6,
      blurWidth: 8,
      alt: file.capture
      })
    }
  })

  console.log(images)

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

  // console.log(files.map(file => file.is_fond_doc))
  // console.log(filteredImages.src)

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
        {(filteredImages !== undefined && 
            <Image
            className={stylesSlider.slide}
            src={filteredImages.src}
            width={filteredImages.width}
            height={filteredImages.height}
            alt={filteredImages.alt}
          />
        )}

      </div>
    </section>
  );
}

export default Slider;
