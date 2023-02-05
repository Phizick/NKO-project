"use client";
import styles from "./QuestionsComponent.module.css";

export default function QuestionsComponent(props) {

  console.log(props.data.question)

  function handleCloseButtonClick({ target }) {
    const footerElement = target
      .closest(".question_panel")
      .querySelector(".question_footer");
    footerElement.classList.toggle("show");
    footerElement.classList.toggle("hide");
    footerElement.querySelector(".footer_text").classList.toggle("hideText");

    if (
      target.closest(".question_panel").querySelector(".-pause") &&
      !target.closest(".question_panel").querySelector(".-play")
    ) {
      target
        .closest(".question_panel")
        .querySelector(".button-play")
        .beginElement();
      target
        .closest(".question_panel")
        .querySelector("#button")
        .classList.toggle("-pause");
      target
        .closest(".question_panel")
        .querySelector("#button")
        .classList.toggle("-play");
    } else {
      target
        .closest(".question_panel")
        .querySelector(".button-pause")
        .beginElement();
      target
        .closest(".question_panel")
        .querySelector("#button")
        .classList.toggle("-pause");
      target
        .closest(".question_panel")
        .querySelector("#button")
        .classList.toggle("-play");
    }
  }

  return (
      <div className={styles.questions}>
        <div className={styles.question_panel}>
        <div className={styles.question_header}>
            <h2 className={styles.title}>{props.data.question}</h2>
            <button
              id="button"
              className="-pause"
              onClick={handleCloseButtonClick}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="#EFF0F0" />
                <path
                  d="M11 11L21 21M21 11L11 21"
                  stroke="#494E50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    className="button-pause"
                    attributeName="d"
                    attributeType="XML"
                    dur="0.15s"
                    begin="none"
                    fill="freeze"
                    from="M11 13.5L16 18.5L21 13.5"
                    to="M11 11L21 21M21 11L11 21"
                  />
                  <animate
                    className="button-play"
                    attributeName="d"
                    attributeType="XML"
                    dur="0.15s"
                    begin="none"
                    fill="freeze"
                    from="M11 11L21 21M21 11L11 21"
                    to="M11 13.5L16 18.5L21 13.5"
                  />
                </path>
              </svg>
            </button>
          </div>
          <div className={`${styles.question_footer} ${styles.show}`}>
            <p className={styles.footer_text}>{props.data.answer}</p>
          </div>
        </div>
      </div>
  );
}
