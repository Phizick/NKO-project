"use client";

import classNames from "classnames";
import styles from "./Dropdown.module.css";

const Dropdown = ({
  items,
  hide,
  setHide,
  label,
  handleSortChange,
  setFilterBy,
}) => {

  return (
    <div
      className={classNames(
        styles.dropdown,
        label === "month" && hide.month
          ? styles.hide
          : label === "year" && hide.year
          ? styles.hide
          : null
      )}
    >
      <a
        onClick={() => {
          setHide((prevState) => ({ ...prevState, [label]: true }));
          setFilterBy((prevState) => ({ ...prevState, [label]: null }));
        }}
      >
        Очистить
      </a>
      {items && Array.isArray(items)
        ? items.map((i, index) => (
            <a
              key={label + index}
              onClick={() => {
                handleSortChange(label, i);
                setHide((prevState) => ({ ...prevState, [label]: true }));
              }}
            >
              {i}
            </a>
          ))
        : Object.keys(items).map((i, index) => (
            <a
              key={label + index}
              onClick={() => {
                handleSortChange(label, items[i]);
                setHide((prevState) => ({ ...prevState, [label]: true }));
              }}
            >
              {i}
            </a>
          ))}
    </div>
  );
};

export default Dropdown;
