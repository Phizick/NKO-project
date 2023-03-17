import Link from 'next/link';
import React from 'react';
import styles from './BreadCrumbs.module.css'

export default function BreadCrumbs({pageHref, pageTitle}) {
  const classNames = require("classnames");

  return (
    <div className={styles.stepper}>
      <Link href="/" className={styles.stepper_text}>
        Главная
      </Link>
      <div className={styles.arrow}></div>
      <Link
        href={pageHref}
        className={classNames(styles.stepper_text, styles.text_active)}
      >
        {pageTitle}
      </Link>
    </div>
  )
}
