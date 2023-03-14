'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import Document from "../../components/Document/Document.jsx";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Programs from "../../components/Programs/Programs";
import ProgramsModal from "../../components/ProgramsModal/ProgramsModal.jsx";
import api from "../../src/utils/Api.js";
import style from './about-us.module.css';

export default function AboutUs() {
  const [about, setAbout] = useState([]);
  const [modal, setModal] = useState("");

  useEffect(() => {
    api.getInfo('about')
    .then(res => setAbout(res.results))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header />
      {modal && <ProgramsModal modal={modal} setModal={setModal} />}
      <section className={style.wrapper}>
        <h1 className={style.title}>{about !== undefined &&
          about.map(el => el.title)
        }</h1>
        <p className={style.description}>{about !== undefined &&
          about.map(el => el.info)
        }
        </p>
        <Link className={style.link} href="/donation">Сделать пожертвование</Link>
      </section>
      <Programs setModal={setModal} />
      <Gallery />
      <section className={style.document}>
        <h1 className={style.title_document}>Учредительные документы</h1>
        <div className={style.shell}>
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
          <Document />
        </div>
      </section>
      <Footer />
    </>
  )
}
