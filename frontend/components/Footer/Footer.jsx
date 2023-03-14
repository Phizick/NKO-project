"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Footer.module.css';
import telegram from "../../images/telegram.svg";
import vk from "../../images/vk.svg"
import ok from "../../images/ok.svg";
import '../../styles/design_tokens.css';
import api from "../../src/utils/Api";

function Footer() {
  const [contactsInfo, setContactsInfo] = useState(null)

  useEffect(() => {
    api.getInfo('contacts')
    .then(res => setContactsInfo(res.results))
    .catch(err => console.log(err))
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.contentinfo}>
              <h3 className={styles.heading}>Навигация</h3>
              <nav className={styles.links}>
                <Link href='/about-us' className={styles.link}>О нас</Link>
                <Link href='/news' className={styles.link}>Новости</Link>
                <Link href='/events' className={styles.link}>Мероприятия</Link>
              </nav>
            </div>
            <div className={styles.contentsocial}>
            {contactsInfo !== null && 
              <>
                <h3 className={styles.heading}>Контакты</h3>
                <nav className={styles.sociallinks}>
                  <a href={contactsInfo[0].telegram} className={styles.sociallink} target="_blank">
                  <Image src={telegram} alt="Телеграм" className={styles.socialicon}/>
                  </a>
                  <a href={contactsInfo[0].vk_url} className={styles.link} target="_blank">
                  <Image src={vk} alt="ВК" className={styles.socialicon} />
                  </a>
                  <a href={contactsInfo[0].ok_url} className={styles.link} target="_blank">
                  <Image src={ok} alt="Одноклассники" className={styles.socialicon}/>
                  </a>
                </nav>
                <p className={styles.info}>{contactsInfo[0].phone}</p>
                <p className={styles.info}>{contactsInfo[0].mail}</p>
              </>
            }
            </div>
          </div>
        </div>
        <div className={styles.contentcopyright}>
          <p className={styles.copyright}>&copy; 2022 Благотворительный фонд "Движение"</p>
          <p className={styles.copyright}>Designed by Artem Korolev</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;