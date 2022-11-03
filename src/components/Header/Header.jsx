import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header__container}>
        <div>
          <NavLink to="/" className={styles.header__link}>
            Home page
          </NavLink>
        </div>
        <div className={styles.header__text}>
          The most trending NFTs on the web
        </div>
      </div>
    </div>
  );
};

export default Header;
