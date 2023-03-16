import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import style from './Document.module.css'
import imagePNG from '../../images/PNG-image.png'
import imageDownload from '../../images/download.png'
import api from '../../src/utils/Api';

function Document() {
  const [foundFiles, setFoundFiles] = useState(null)

  useEffect(() => {
    api.getInfo('files')
    .then(res => setFoundFiles(res.results))
    .catch(err => console.log(err))
  }, [])

  const foundDocuments = foundFiles !== null && foundFiles.filter(doc => {
    if(doc.is_fond_doc === true) {
      return doc
    }
  })

  return (
    <>
    {foundDocuments !== false && foundDocuments.map((document) => {
      return (
        <div className={style.wrapper} key={document.id}>
          <Image className={style.img} src={imagePNG} alt='Логотип PNG файла' />
          <h2 className={style.title}>{document.capture}</h2>
          <a className={style.img_link}  href={document.file_field} target="_blank" download>
            <Image className={style.img_button} src={imageDownload} alt="Кнопка скачать" />
            Скачать
          </a>
      </div>
      )
    })}
    </>

  )
}

export default Document