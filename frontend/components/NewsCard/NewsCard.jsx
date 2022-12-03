"use client";
import styles from "./NewsCard.module.css";
import Image from "next/image";
import preview from "../../images/news_preview.png";

const NewsCard = ({ title, description, created_at, setModal, cardInfo }) => {
  return (
    <div className={styles.card} onClick={() => setModal({ ...cardInfo })}>
      <div className={styles.event_preview}>
        <Image src={preview} alt="Image" />
      </div>
      <h4 className={styles.date_item}>{created_at.slice(0, 10)}</h4>
      <h3 className={styles.card_title}>{title}</h3>
      <p className={styles.card_body}>{description}</p>
    </div>
  );
};

export default NewsCard;
