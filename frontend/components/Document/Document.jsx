import Image from 'next/image';
import React from 'react';
import style from './Document.module.css'
import imagePNG from '../../images/PNG-image.png'
import imageDownload from '../../images/download.png'

function Document() {
  return (
    <>
      <div className={style.wrapper}>
        <Image className={style.img} src={imagePNG} alt='Логотип PNG файла' />
        <h2 className={style.title}>Название документа</h2>
        <p className={style.description}>размер документа.png</p>
        <button type='button' className={style.button}>
          <Image className={style.img_button} src={imageDownload} alt="Кнопка скачать" />
          Скачать
        </button>
      </div>
    </>
  )
}

export default Document