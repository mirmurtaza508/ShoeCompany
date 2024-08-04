import React from "react";
import style from "./menu.module.css";

const MenuBtn = ({ setIsOpen, isOpen }) => {
  return (
    <>
      <div className={`${style.container} ml-6`}>
        <input
          className={`${style.label_check} `}
          id={style.label_check}
          type="checkbox"
          onClick={() => setIsOpen(!isOpen)}
        />
        <label
          htmlFor={style.label_check}
          className={`${style.hamburger_label} `}
        >
          <div className={style.line1}></div>
          <div className={style.line2}></div>
          <div className={style.line3}></div>
          <label></label>
        </label>
      </div>
    </>
  );
};

export default MenuBtn;
