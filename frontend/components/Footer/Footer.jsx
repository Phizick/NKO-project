import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Footer.module.css';
import telegram from "../../images/telegram.svg";
import vk from "../../images/vk.svg"
import ok from "../../images/ok.svg";
import '../../styles/design_tokens.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentinfo}>
            <h3 className={styles.heading}>Навигация</h3>
            <nav className={styles.links}>
              <Link href='/about-us' className={styles.link}>О нас</Link>
              <Link href='/news' className={styles.link}>Новости</Link>
              <Link href='/events' className={styles.link}>Мероприятия</Link>
              <Link href='/boardquest' className={styles.link}>Вопрос - ответ</Link>
            </nav>
          </div>
          <div className={styles.contentsocial}>
            <h3 className={styles.heading}>Контакты</h3>
            <nav className={styles.sociallinks}>
              <a href='#' className={styles.sociallink} target="_blank">
              <Image src={telegram} alt="Телеграм" className={styles.socialicon}/>
              </a>
              <a href='https://vk.com/fondmotionfoundation' className={styles.link} target="_blank">
              <Image src={vk} alt="ВК" className={styles.socialicon} />
              </a>
              <a href='#' className={styles.link} target="_blank">
              <Image src={ok} alt="Одноклассники" className={styles.socialicon}/>
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