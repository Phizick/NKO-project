import styles from "./news.module.css";
import '../../styles/design_tokens.css';
import image from "../../images/news.png";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className={styles.news}>
      <div className={styles.content}>
        <Image src={image} alt="Картинка к новости" className={styles.image} />
        <div className={styles.block}>
          <h2 className={styles.title}>Название новости</h2>
          <p className={styles.text}>
            {" "}
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fug.
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fug.
          </p>
          <Link href="/news" className={styles.link}>
            Смотреть другие новости
          </Link>
        </div>
      </div>
    </div>
  );
}
