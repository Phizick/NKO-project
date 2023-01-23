"use client";
import styles from "./events.module.css";
import "../../styles/Home.css";
import "../../styles/design_tokens.css";
import api from '../../src/utils/Api';
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import heartImg from "../../images/heart.png";
import EventCard from "../../components/EventCard/EventCard";
import { useState, useEffect } from "react";
import EventsModal from "../../components/EventsModal/EventsModal";



export default function Events() {
  const classNames = require("classnames");
  const [state, setState] = useState("current");
  const [modal, setModal] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.getInfo('events')
    .then(res => setEvents(res.results))
    .catch(err => console.log(err))
  }, [])

  const handleStateChange = (st) => {
    setState(st);
  };
  return (
    <div className="App">
      <div className="container">
        <EventsModal modal={modal} setModal={setModal} />

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
          {state === "current" && Boolean(events?.length) &&
            events.map((c) => {
              return c.is_finished === false ? (
                <EventCard key={c.id} {...c} cardInfo={c} setModal={setModal} />
              ) : null;
            })}
          {state !== "current" && Boolean(events?.length) &&
            events.map((c) => {
              return c.is_finished === true ? (
                <EventCard key={c.id} {...c} cardInfo={c} setModal={setModal} />
              ) : null;
            })}
        </div>
        <Footer />
      </div>
    </div>
  );
}
