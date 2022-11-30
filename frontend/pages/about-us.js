import Link from "next/link";
import Document from "../components/Document/Document";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Programs from "../components/Programs/Programs";
import style from './about-us.module.css';

export default function AboutUs() {
  return (

    <>
      <Header />
      <section className={style.wrapper}>
        <h1 className={style.title}>О нас</h1>
        <p className={style.description}>Lorem ipsum dolor sit amet consectetur. 
          Dictum cursus elementum semper gravida facilisi consectetur sed. Lectus consectetur commodo sed feugiat sit. 
          Egestas nunc morbi a laoreet. Lorem ipsum dolor sit amet consectetur. 
          Dictum cursus elementum semper gravida facilisi consectetur sed. 
          Lectus consectetur commodo sed feugiat sit. Egestas nunc morbi a laoreet.  
          Lorem ipsum dolor sit amet consectetur. Dictum cursus elementum semper gravida facilisi consectetur sed. 
          Lectus consectetur commodo sed feugiat sit. Egestas nunc morbi a laoreet.  
          Lorem ipsum dolor sit amet consectetur. Dictum cursus elementum semper gravida facilisi consectetur sed. 
          Lectus consectetur commodo sed feugiat sit. Egestas nunc morbi a laoreet.
        </p>
        <Link className={style.link} href="/donation">Сделать пожертвование</Link>
      </section>
      <Programs />
      <Gallery />
      <Document />
      <Footer />
    </>
  )
}
