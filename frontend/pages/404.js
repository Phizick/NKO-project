import Link from "next/link";
import stylesErrorPage from './404.module.css';
import '../styles/design_tokens.css';
export default function Custom404() {
  return (
    <div className={stylesErrorPage.div}>
      <h1 className={stylesErrorPage.title}>404</h1>
      <p className={stylesErrorPage.text}>
        Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
        существует. Возможно она устарела, была удалена, или был введен неверный
        адрес в адресной строке
      </p>
      <Link className={stylesErrorPage.link} href="/">
        <button className={stylesErrorPage.button}>
          Перейти на главную страницу
        </button>
      </Link>
    </div>
  );
}
