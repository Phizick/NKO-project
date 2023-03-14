import style from "./Project.module.css";

function Project({ type, name, short_description, projectInfo, setModal }) {

  return(
    <div className={style.program}>
      <p className={style.program__topic}>{type}</p>
      <h2 className={style.program__title}>{name}</h2>
      <p className={style.program__description}>{short_description}</p>
      <button type="button" className={style.program__button} onClick={() => setModal({ ...projectInfo })}>
        Узнать подробнее &rarr;
      </button>
    </div>
)}

export default Project;