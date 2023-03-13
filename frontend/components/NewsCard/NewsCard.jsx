"use client";
import styles from "./NewsCard.module.css";
import Image from "next/image";

const NewsCard = ({ title, short_description, created_at, setModal, cardInfo, picture }) => {

  return (
    <div className={styles.card} onClick={() => setModal({ ...cardInfo })}>
      <div className={styles.event_preview}>
        <Image 
          src={picture}
          width = '400' 
          height='250' 
          alt="Image" 
          priority 
        />
      </div>
      <h4 className={styles.date_item}>{created_at.slice(0, 10)}</h4>
      <h3 className={styles.card_title}>{title}</h3>
      <p className={styles.card_body}>{short_description}</p>
    </div>
  );
};

export default NewsCard;
