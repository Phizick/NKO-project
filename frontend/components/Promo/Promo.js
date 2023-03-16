"use client";
import { useEffect, useState } from "react";
import styles from "./Promo.module.css";
import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import photo3 from "../../images/photo3.png";
import heart from "../../images/heart.png";
import Link from "next/link";
import Image from "next/image";

function Promo() {
  const [isScreenBig, setIsScreenBig] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", listenerCallback);
    return () => {
      window.removeEventListener("resize", listenerCallback);
    };
  }, []);

  useEffect(() => {
    resizedEnded();
  }, []);

  let resizeDisplay;

  function listenerCallback() {
    clearTimeout(resizeDisplay);
    resizeDisplay = setTimeout(resizedEnded, 500);
  }

  function resizedEnded() {
    const width = window.innerWidth;
    if (width > 750) {
      setIsScreenBig(true);
    } else {
      setIsScreenBig(false);
    }
  }

  return (
    <div className={styles.promo}>
      {isScreenBig ? (
        <>
          <h1 className={styles.title}>
            Мы занимаемся помощью людям с&nbsp;ментальными нарушениями. Каждый
            человек -
            <Image src={photo1} width='40' height='40' alt="Фото 1" className={styles.image} />
            <Image src={photo2} width='40' height='40' alt="Фото 2" className={styles.image} />
            <Image src={photo3} width='40' height='40' alt="Фото 3" className={styles.image} />
            особенный
          </h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur. Massa sit a malesuada
            venenatis lacinia. Viverra id leo viverra egestas purus. Gravida
            fermentum vitae sagittis sapien consectetur pellentesque.
          </p>
        </>
      ) : (
        <>
          <div className={styles.images}>
            <Image src={photo1} width='40' height='40' alt="Фото 1" className={styles.image} />
            <Image src={photo2} width='40' height='40' alt="Фото 2" className={styles.image} />
            <Image src={photo3} width='40' height='40' alt="Фото 3" className={styles.image} />
          </div>
          <h1 className={styles.title}>
            Мы занимаемся помощью людям с&nbsp;ментальными нарушениями.
          </h1>
        </>
      )}
      {isScreenBig ? (
        <div className={styles.links}>
          <Link href="/about-us" className={styles.aboutUs}>
            О нашем проекте
          </Link>
          <Link href="/donation" className={styles.donation}>
            Сделать пожертвование
            <Image src={heart} width='14' height='14' alt="Сердечко" className={styles.littleImg} />
          </Link>
        </div>
      ) : (
        <div className={styles.links}>
          <Link href="/donation" className={styles.donation}>
            Сделать пожертвование
            <Image src={heart} width='14' height='14' alt="Сердечко" className={styles.littleImg} />
          </Link>
          <Link href="/about-us" className={styles.aboutUs}>
            О нашем проекте
          </Link>
        </div>
      )}
    </div>
  );
}

export default Promo;
