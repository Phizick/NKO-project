"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./QuestionsComponent.module.css";
import chevron from '../../images/chevron-black.svg'


export default function QuestionsComponent(props) {
  const [toggle, steToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    steToggle(!toggle);
  }

  return (
    <section className={styles.accordion}>
      <button 
        className={styles.accordionVisible}
        onClick={toggleState}>
        <h2 className={styles.question}>{props.data.question}</h2>
        <Image className={toggle ? styles.accordionImgActive : styles.accordionImg} src={chevron} alt={'chevron'} />
      </button>
      <div className={toggle ? `${styles.accordionToggle} ${styles.animated}` : `${styles.accordionToggle}`}
        style={{height: toggle ? `${heightEl}` : "0px"}}
        ref={refHeight}>
          <p className={styles.text} aria-hidden={toggle ? "true" : "false"}>{props.data.answer}</p>
      </div>
    </section>
  )
}
