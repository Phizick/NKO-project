"use client";
import React, { useEffect, useState } from "react";
import style from "./Programs.module.css";
import picture from "../../images/children-drawing-02.jpg";
import Link from "next/link";
import Image from "next/image";
import api from "../../src/utils/Api";

function Programs() {
  const [isScreenBig, setIsScreenBig] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.getInfo('projects')
    .then(res => setProjects(res.results))
    .catch(err => console.log(err))
  },[])

  console.log(projects)

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
    if (width > 840) {
      setIsScreenBig(true);
    } else {
      setIsScreenBig(false);
    }
  }
  return (
    <>
      <section className={style.programs}>
        {" "}
        {isScreenBig ? (
          <>
            <h1 className={style.title}>Наши программы</h1>
            <div className={style.program}>
              <p className={style.program__topic}>Социализация</p>
              <h2 className={style.program__title}>Есть место для каждого</h2>
              <p className={style.program__description}>
                Lorem ipsum dolor sit amet consectetur. Dictum cursus elementum
                semper gravida facilisi consectetur sed. Lectus consectetur
                commodo sed feugiat sit. Egestas nunc morbi a laoreet.
              </p>
              <Link href="/events" className={style.program__link}>
                Узнать подробнее &rarr;
              </Link>
            </div>
            <div className={style.program}>
              <p className={style.program__topic}>Помощь родителям</p>
              <h2 className={style.program__title}>Счастье в каждый дом</h2>
              <p className={style.program__description}>
                Lorem ipsum dolor sit amet consectetur. Dictum cursus elementum
                semper gravida facilisi consectetur sed. Lectus consectetur
                commodo sed feugiat sit. Egestas nunc morbi a laoreet.
              </p>
              <Link href="/events" className={style.program__link}>
                Узнать подробнее &rarr;
              </Link>
              <div className={style.square}>
                <Image
                  src={picture}
                  alt="Рисунок детей"
                  className={style.img}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className={style.title}>Наши программы</h1>
            <div className={style.program}>
              <p className={style.program__topic}>Социализация</p>
              <h2 className={style.program__title}>Есть место для каждого</h2>
              <p className={style.program__description}>
                Lorem ipsum dolor sit amet consectetur. Dictum cursus elementum
                semper gravida facilisi consectetur sed. Lectus consectetur
                commodo sed feugiat sit. Egestas nunc morbi a laoreet.
              </p>
              <Link href="/events" className={style.program__link}>
                <button className={style.program__button}>
                  Узнать подробнее
                </button>
              </Link>
            </div>
            <div className={style.program}>
              <p className={style.program__topic}>Помощь родителям</p>
              <h2 className={style.program__title}>Счастье в каждый дом</h2>
              <p className={style.program__description}>
                Lorem ipsum dolor sit amet consectetur. Dictum cursus elementum
                semper gravida facilisi consectetur sed. Lectus consectetur
                commodo sed feugiat sit. Egestas nunc morbi a laoreet.
              </p>
              <Link href="/events" className={style.program__link}>
                <button className={style.program__button} type="button">
                  Узнать подробнее
                </button>
              </Link>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Programs;
