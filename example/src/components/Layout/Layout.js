import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = ({ children, hooks, searchInput, setSearchInput }) => {
  const [isProcOpen, setProcOpen] = useState(true);
  const history = useHistory();
  const location = useLocation();

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
        <div
          className={styles.proc_wrap}
          style={{ width: isProcOpen ? "" : 0 }}
        >
          <div
            className={styles.slide_btn}
            onClick={() => setProcOpen((prev) => !prev)}
          >
            {isProcOpen ? "<" : ">"}
          </div>
          <div className={styles.proc}>
            {hooks.map((hook, idx) => (
              <div
                key={`list_${hook.name}_${idx}`}
                className={`${styles.hook} ${
                  location.pathname === `/light-hooks/${hook.name}`
                    ? styles.now
                    : ""
                }`}
                onClick={() => history.push(`/light-hooks/${hook.name}`)}
              >
                {hook.name}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.ctx} style={{ width: isProcOpen ? "" : "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
