import QuestionsComponent from "./QuestionsComponent.jsx";
import styles from "./Questions.module.css";
import React, { useEffect, useState } from "react";
import api from "../../src/utils/Api.js";

export default function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    api.getInfo('questions')
    .then(filesInfo => setQuestions(filesInfo.results))
    .catch(err => console.log(err))
  }, []);

  return (
    <div className={styles.question_component}>
      <h1 className={styles.title}>Ответы на вопросы</h1>
      {(questions !== undefined && questions.map(question => {
        return(
          <QuestionsComponent data={question} key={question.id} />
        )
      }))}
    </div>
  );
}

// export async function getServerSideProps() {
//   const data = await api.getInfo('questions')
//   const questions = await data.results
//   console.log(questions);

//   return {
    
//     props: {
//       questions
//     }
//   }
// }

// getServerSideProps()

