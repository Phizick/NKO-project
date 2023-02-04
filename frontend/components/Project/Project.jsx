import style from "./Project.module.css";
import Link from "next/link";

function Project(props) {

  return(
    <div className={style.program}>
      <p className={style.program__topic}>Социализация</p>
      <h2 className={style.program__title}>{props.data.name}</h2>
      <p className={style.program__description}>{props.data.description}</p>
      <Link href="/events" className={style.program__link}>
        Узнать подробнее &rarr;
      </Link>
    </div>
)}

export default Project;