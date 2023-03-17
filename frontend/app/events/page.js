"use client";
import styles from "./events.module.css";
import "../../styles/Home.css";
import "../../styles/design_tokens.css";
import Image from "next/image";
import heartImg from "../../images/heart.png";
import EventCard from "../../components/EventCard/EventCard";
import { useEffect, useState } from "react";
import EventsModal from "../../components/EventsModal/EventsModal";
import api from "../../src/utils/Api";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

export default function Events() {
  const classNames = require("classnames");
  const moment = require('moment'); 
  const [state, setState] = useState("current");
  const [modal, setModal] = useState("");
  const [cardsInfo, setCardsInfo] = useState(null)

  useEffect(() => {
    api.getInfo('events')
    .then(res => setCardsInfo(res.results))
    .catch(err => console.log(err))
  }, [])

  const handleStateChange = (st) => {
    setState(st);
  };

  const nowTime = moment().format('DD.MM.YYYY h:mm:ss');
  const currentDay = nowTime.toString().slice(0, 20);

  const checkEvent = (item) => {
    const dayOfEvent = item.end_timestamp.toString().slice(0, 19);

    if(dayOfEvent === currentDay || dayOfEvent < currentDay) {
      return true
    }
    return false
  }

  return (
    <div className="App">
      <div className="container">
        {modal && <EventsModal modal={modal} setModal={setModal} />}
        <BreadCrumbs pageHref={'/events'} pageTitle={'Мероприятия'} />
        <div className={styles.page_title}>
          <h1 className={styles.event_title}>Мероприятия</h1>
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
          {cardsInfo !== null && state === "current" &&
            cardsInfo.map((c) => {
              return checkEvent(c) === false ? (
                <EventCard key={c.id} {...c} cardInfo={c} setModal={setModal} checkEvent={checkEvent(c)} />
              ) : null;
            })}
          {cardsInfo !== null && state !== "current" &&
            cardsInfo.map((c) => {
              return checkEvent(c) === true ? (
                <EventCard key={c.id} {...c} cardInfo={c} setModal={setModal} checkEvent={checkEvent(c)} />
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
}
