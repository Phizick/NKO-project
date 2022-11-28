"use client";

import styles from "./Header.module.css";

export default function BurgerMenuSVG() {
  function handleMenuClick() {
    document.querySelector(".dropdown-content").classList.toggle("show");
  }
  return (
    <svg
      className={styles.burger_menu}
      width="20"
      onClick={handleMenuClick}
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5"
        stroke="#164F64"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
