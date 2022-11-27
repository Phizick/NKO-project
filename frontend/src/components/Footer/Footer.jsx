import React from "react";
import "./Footer.css";
import telegram from "../../images/telegram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column-find">
          <h3 class="footer__column-heading">Поиск по сайту</h3>
            <form className="footer__search-form" >
              <input type="search" className="footer__form-input" placeholder="Поиск по сайту"/>
              <button className="footer__form-btn"></button>
            </form>
        </div>
        <div className="footer__column_content">
          <div className="footer__column_content_info">
            <h3 className="footer__column-heading">Навигация</h3>
            <nav className="footer__column-links">
              <a href='/aboutus' className="footer__column-link">О нас</a>
              <a href='/news' className="footer__column-link">Новости</a>
              <a href='/events' className="footer__column-link">Мероприятия</a>
              <a href='/library' className="footer__column-link">Библиотека</a>
              <a href='/boardquest' className="footer__column-link">Вопрос - ответ</a>
            </nav>
          </div>
          <div className="footer__column_content_social">
            <h3 className="footer__column-heading">Контакты</h3>
            <nav className="footer__column-links">
              <a href='#' className="footer__column-link">
                <img src={telegram} alt="Телеграм" className="footer__social-icon"/>
              </a>
              <a href='https://vk.com/fondmotionfoundation' className="footer__column-link">
                <img src="images/vk.svg" alt="ВКонтакте" className="footer__social-icon"/>
              </a>
              <a href='#' className="footer__column-link">
                <img src="images/ok.svg" alt="Одноклассники" className="footer__social-icon"/>
              </a>
            </nav>
            <p className="footer__column-link">+7 921 971 2439</p>
            <p className="footer__column-link">motionfoundation@mail.ru</p>
          </div>
        </div>
      </div>
      <div className="footer__content_copyright">
        <p className="footer__copyright">&copy; 2022 Благотворительный фонд "Движение"</p>
        <p className="footer__copyright">Designed by Artem Korolev</p>
      </div>
    </footer>
  );
}

export default Footer;