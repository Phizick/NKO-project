"use client";
import QuestionsComponent from "./QuestionsComponent.jsx";
import styles from "./Questions.module.css";
import React, { useEffect, useState } from "react";
import api from "../../src/utils/Api.js";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getInfo('questions'),
      api.getInfo('answers')
    ])
    .then(([questionsInfo, answersInfo]) => {
      setQuestions(questionsInfo.results);
      setAnswers(answersInfo.results);
    })
    .catch(err => console.log(err))
  }, []);

  const questionsAndAnswers = []

  questions.map(question => {
    answers.map(answer => {
      if(question.id === answer.id) {
        questionsAndAnswers.push({
          question: question.question,
          answer: answer.answer,
          id: question.id
        })
      }
    })
  })

  return (
    <div className={styles.question_component}>
      <h1 className={styles.title}>Ответы на вопросы</h1>
      {(questionsAndAnswers !== undefined && questionsAndAnswers.map(question => {
        return(
          <QuestionsComponent data={question} key={question.id} />
        )
      }))}
    </div>
  );
}

export default Questions;
