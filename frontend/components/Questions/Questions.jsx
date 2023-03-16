import styles from "./Questions.module.css";
import React, { useEffect, useRef, useState } from "react";
import api from "../../src/utils/Api.js";
import chevron from '../../images/chevron-black.svg'
import Image from "next/image.js";

export default function Questions() {
  const [questions, setQuestions] = useState(null);
  const [accordion, setActiveAccordion] = useState(-1);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();

  useEffect(() => {
    api.getInfo('questions')
    .then(filesInfo => setQuestions(filesInfo.results))
    .catch(err => console.log(err))
  }, []);

  const accordionState = (index) => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
    if(accordion === index) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  }

  return (
    <div className={styles.question_component}>
      <h1 className={styles.title}>Ответы на вопросы</h1>
      {(questions !== null && questions.map(question => {
        return(
          <section className={styles.accordion} key={question.id}>
            <div 
              className={styles.accordionVisible}
              onClick={() => accordionState(question.id)}>
              <h2 className={styles.question}>{question.question}</h2>
              <Image className={accordion === question.id ? styles.accordionImgActive : styles.accordionImg} src={chevron} alt={'chevron'} />
            </div>
            <div className={accordion === question.id ? `${styles.accordionToggle} ${styles.animated}` : `${styles.accordionToggle}`}
              style={{height: accordion === question.id ? `${heightEl}` : "0px"}}
              ref={refHeight}>
                <p className={styles.text} aria-hidden={accordion === question.id ? "true" : "false"}>{question.answer}</p>
            </div>
          </section>
        )
      }))}
    </div>
  );
}
