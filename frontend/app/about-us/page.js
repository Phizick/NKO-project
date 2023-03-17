'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import Document from "../../components/Document/Document.jsx";
import Gallery from "../../components/Gallery/Gallery";
import Programs from "../../components/Programs/Programs";
import ProgramsModal from "../../components/ProgramsModal/ProgramsModal.jsx";
import api from "../../src/utils/Api.js";
import style from './about-us.module.css';

export default function AboutUs() {
  const [about, setAbout] = useState(null);
  const [modal, setModal] = useState("");

  useEffect(() => {
    api.getInfo('contacts')
    .then(res => setAbout(res.results))
    .catch(err => console.log(err))
  }, [])

  return (
    <>
      {modal && <ProgramsModal modal={modal} setModal={setModal} />}
      <BreadCrumbs pageHref={'/about-us'} pageTitle={'О нас'} />
      <section className={style.wrapper}>
        <h1 className={style.title}>О нас:</h1>
        <p className={style.description}>{about !== null && about[0].fund_info}
        </p>
        <Link className={style.link} href="/donation">Сделать пожертвование</Link>
      </section>
      <Programs setModal={setModal} />
      <Gallery />
      <section className={style.document}>
        <h1 className={style.title_document}>Учредительные документы</h1>
        <div className={style.shell}>
          <Document />
        </div>
      </section>
    </>
  )
}
