import React from "react";
import styles from './Footer.module.css';
import telegram from "../../images/telegram.svg";
import vk from "../../images/vk.svg";
import ok from "../../images/ok.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columnfind}>
          <h3 className={styles.heading}>Поиск по сайту</h3>
            <form className={styles.searchform} >
              <input type="search" className={styles.forminput} placeholder="Поиск по сайту"/>
              <button className={styles.formbtn}></button>
            </form>
        </div>
        <div className={styles.content}>
          <div className={styles.contentinfo}>
            <h3 className={styles.heading}>Навигация</h3>
            <nav className={styles.links}>
              <a href='/aboutus' className={styles.link}>О нас</a>
              <a href='/news' className={styles.link}>Новости</a>
              <a href='/events' className={styles.link}>Мероприятия</a>
              <a href='/library' className={styles.link}>Библиотека</a>
              <a href='/boardquest' className={styles.link}>Вопрос - ответ</a>
            </nav>
          </div>
          <div className={styles.contentsocial}>
            <h3 className={styles.heading}>Контакты</h3>
            <nav className={styles.sociallinks}>
              <a href='#' className={styles.sociallink} target="_blank">
                <img src={telegram} alt="Телеграм" className={styles.socialicon}/>
              </a>
              <a href='https://vk.com/fondmotionfoundation' className={styles.link} target="_blank">
                <img src={vk} className={styles.socialicon}/>
              </a>
              <a href='#' className={styles.link} target="_blank">
                <img src={ok} alt="Одноклассники" className={styles.socialicon}/>
              </a>
            </nav>
            <p className={styles.info}>+7 921 971 2439</p>
            <p className={styles.info}>motionfoundation@mail.ru</p>
          </div>
        </div>
      </div>
      <div className={styles.contentcopyright}>
        <p className={styles.copyright}>&copy; 2022 Благотворительный фонд "Движение"</p>
        <p className={styles.copyright}>Designed by Artem Korolev</p>
      </div>
    </footer>
  );
}

export default Footer;