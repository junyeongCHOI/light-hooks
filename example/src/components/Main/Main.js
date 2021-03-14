import React from "react";
import logo from "../../logo.svg";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <img src={logo} alt="logo" />
        <div className={styles.text}>
          <div className={styles.title}>Git</div>
          https://github.com/junyeongCHOI/light-hooks
        </div>
        <div className={styles.text}>
          <div className={styles.title}>DOC</div>
          https://junyeongchoi.github.io/light-hooks
        </div>
        <div className={styles.text}>
          <div className={styles.title}>npm</div>
          https://www.npmjs.com/package/light-hooks
        </div>
      </div>
    </div>
  );
};

export default Main;
