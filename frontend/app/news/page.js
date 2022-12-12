"use client";
import styles from "./news.module.css";
import stylesErrorPage from "../../pages/404.module.css";
import "../../styles/Home.css";
import "../../styles/design_tokens.css";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import arrowDown from "../../images/arrow-down.svg";
import { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import Dropdown from "../../components/Sort/Dropdown";
import { monthsToFilter } from "./monthsList";
import { cardsInfo } from "./MockData.cards";
import NewsModal from "../../components/NewsModal/NewsModal";
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())


export default function News() {
  const {data,error} = useSWR('https://api.atlas.msk.ru/api/v1/projects/',fetcher)
  useEffect(() => {
    console.log(data)
  })

  const classNames = require("classnames");
  const [hide, setHide] = useState({
    year: true,
    month: true,
  });
  const [modal, setModal] = useState("");
  const [filterBy, setFilterBy] = useState({ year: null, month: null });
  const [filtered, setFiltered] = useState(cardsInfo);
  useEffect(() => {
    filterCards(filtered);
  }, [filterBy]);
  function getYearsToSort() {
    const currentYear = new Date().getFullYear();
    let yearsToSort = Array.from(Array(4), (el, index) => currentYear - index);
    return yearsToSort;
  }
  function handleSortChange(label, item) {
    setFilterBy((prevState) => ({ ...prevState, [label]: item }));
  }
  function filterCards(cards) {
    if (!filterBy.year && !filterBy.month) {
      setFiltered(cardsInfo);
      return true;
    }
    if (filterBy.year && filterBy.month) {
      setFiltered([
        ...cardsInfo.filter(
          (c) =>
            c.created_at.slice(0, 4) === filterBy.year.toString() &&
            c.created_at.slice(5, 7) === filterBy.month.toString()
        ),
      ]);
      return true;
    }
    if (filterBy.year) {
      setFiltered([
        ...cardsInfo.filter(
          (c) => c.created_at.slice(0, 4) === filterBy.year.toString()
        ),
      ]);
      return true;
    }
    if (filterBy.month) {
      setFiltered([
        ...cardsInfo.filter(
          (c) => c.created_at.slice(5, 7) === filterBy.month.toString()
        ),
      ]);
      return true;
    }
    return cards;
  }

  return (
    <div className="App">
      <div className="container">
        <NewsModal modal={modal} setModal={setModal} />

        <Header />
        <div className={styles.stepper}>
          <Link href="/" className={styles.stepper_text}>
            Главная
          </Link>
          <div className={styles.arrow}></div>
          <Link
            href="/news"
            className={classNames(styles.stepper_text, styles.text_active)}
          >
            Новости
          </Link>
        </div>
        <div className={styles.page_title}>
          <div>
            <h1 className={styles.event_title}>Новости</h1>
          </div>
          <div className={styles.btn_holder}>
            <div className={styles.btn_placeholder}>
              <button
                className={styles.btn}
                onClick={() =>
                  setHide((prevState) => ({ ...prevState, year: !hide.year }))
                }
              >
                {filterBy.year ? filterBy.year : "Год"}{" "}
                <Image src={arrowDown} alt="Image" />
              </button>
              <Dropdown
                items={getYearsToSort()}
                hide={hide}
                setHide={setHide}
                label={"year"}
                handleSortChange={handleSortChange}
                setFilterBy={setFilterBy}
              />
            </div>
            <div className={styles.btn_placeholder}>
              <button
                className={classNames(styles.btn, styles.disabled_bg)}
                onClick={() =>
                  setHide((prevState) => ({ ...prevState, month: !hide.month }))
                }
              >
                {filterBy.month
                  ? Object.entries(monthsToFilter).find(
                      (i) => i[1] === filterBy.month
                    )[0]
                  : "Месяц"}{" "}
                <Image src={arrowDown} alt="Image" />
              </button>
              <Dropdown
                items={monthsToFilter}
                hide={hide}
                setHide={setHide}
                label={"month"}
                handleSortChange={handleSortChange}
                setFilterBy={setFilterBy}
              />
            </div>
          </div>
        </div>
        <div className={styles.cards_holder}>
          {filtered.map((c) => {
            return (
              <NewsCard key={c.id} {...c} cardInfo={c} setModal={setModal} />
            );
          })}
          {filtered.length === 0 && (
            <div className={styles.mydiv}>
              <h1
                className={classNames(stylesErrorPage.title, styles.colorCyan)}
              >
                Кажется, здесь пусто...
              </h1>
              <Link className={stylesErrorPage.link} href="/">
                <button
                  className={classNames(
                    stylesErrorPage.button,
                    styles.colorWhite
                  )}
                >
                  Перейти на главную страницу
                </button>
              </Link>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
