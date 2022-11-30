"use client";
import styles from "./events.module.css";
import "../../styles/Home.css";
import "../../styles/design_tokens.css";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import heartImg from "../../images/heart.png";
import EventCard from "../../components/EventCard/EventCard";
import { useState } from "react";

const Lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloremque deleniti ipsum aperiam veniam dolorem earum ut inventore quos cumque doloribus sit numquam quisquam ad officiis aspernatur magni, accusamus dignissimos?`;
const cardsInfo = [
  {
    id: 0,
    name: "Название",
    description: Lorem,
    start_datetime: "26 ноя/22",
    is_finished: true,
  },
  {
    id: 1,
    name: "Название",
    description: Lorem,
    start_datetime: "27 ноя/22",
    is_finished: false,
  },
  {
    id: 2,
    name: "Название",
    description: Lorem,
    start_datetime: "28 ноя/22",
    is_finished: false,
  },
  {
    id: 3,
    name: "Название",
    description: Lorem,
    start_datetime: "29 ноя/22",
    is_finished: false,
  },
  {
    id: 4,
    name: "Название",
    description: Lorem,
    start_datetime: "30 ноя/22",
    is_finished: false,
  },
  {
    id: 5,
    name: "Название",
    description: Lorem,
    start_datetime: "30 ноя/22",
    is_finished: false,
  },
  {
    id: 6,
    name: "Название",
    description: Lorem,
    start_datetime: "30 ноя/22",
    is_finished: false,
  },
];

export default function Events() {
  const classNames = require("classnames");
  const [state, setState] = useState("current");

  const handleStateChange = (st) => {
    setState(st);
  };
  return (
    <div className="App">
      <Header />
      <div className={styles.stepper}>
        <Link href="/" className={styles.stepper_text}>
          Главная
        </Link>
        <div className={styles.arrow}></div>
        <Link
          href="/events"
          className={classNames(styles.stepper_text, styles.text_active)}
        >
          Мероприятия
        </Link>
      </div>
      <div className={styles.page_title}>
        <div>
          <h1 className={styles.event_title}>Мероприятия</h1>
        </div>
        <div className={styles.btn_holder}>
          {state === "current" ? (
            <>
              <button
                onClick={() => handleStateChange("current")}
                className={styles.btn}
              >
                Текущие <Image src={heartImg} alt="Image" />
              </button>
              <button
                onClick={() => handleStateChange("previous")}
                className={classNames(styles.btn, styles.disabled_bg)}
              >
                Прошедшие
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleStateChange("current")}
                className={classNames(styles.btn, styles.disabled_bg)}
              >
                Текущие
              </button>
              <button
                onClick={() => handleStateChange("previous")}
                className={styles.btn}
              >
                Прошедшие <Image src={heartImg} alt="Image" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className={styles.cards_holder}>
        {state === "current" &&
          cardsInfo.map((c) => {
            return c.is_finished === false ? (
              <EventCard key={c.id} {...c} />
            ) : null;
          })}
        {state !== "current" &&
          cardsInfo.map((c) => {
            return c.is_finished === true ? (
              <EventCard key={c.id} {...c} />
            ) : null;
          })}
      </div>
      <Footer />
    </div>
  );
}
