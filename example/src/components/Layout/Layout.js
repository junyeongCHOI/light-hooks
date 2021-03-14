import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = ({ children, hooks, searchInput, setSearchInput }) => {
  const history = useHistory();

  return (
    <div className={styles.wrap}>
      <div className={styles.nav}>
        <div
          className={styles.logo}
          onClick={() => history.push("/light-hooks")}
        >
          light-hooks
        </div>
        <input
          className={styles.search}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="search hooks"
        />
      </div>
      <div className={styles.container}>
        <div className={styles.proc}>
          {hooks.map((hook) => (
            <div
              className={styles.hook}
              onClick={() => history.push(`/light-hooks/${hook.name}`)}
            >
              {hook.name}
            </div>
          ))}
        </div>
        <div className={styles.ctx}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
