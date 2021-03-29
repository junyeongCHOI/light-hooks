import React from "react";
import { useTimer } from "light-hooks";
import styles from "../common.module.scss";

const UseTimerExample = () => {
  const [time1, setTime1, start1, stop1] = useTimer();
  const [time2, setTime2, start2, stop2] = useTimer(10, 1000, {
    isCountDown: false,
  });

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <button className={styles.btn} onClick={() => setTime1(1000)}>
          Set time 1000
        </button>
        <button className={styles.btn} onClick={() => start1()}>
          Start count down
        </button>
        <button
          className={styles.btn}
          onClick={() => stop1()}
          style={{ marginRight: 16 }}
        >
          Stop count down and reset
        </button>
        time1: {time1}
      </div>
      <div>
        <button className={styles.btn} onClick={() => setTime2(1000)}>
          Set time 1000
        </button>
        <button className={styles.btn} onClick={() => start2()}>
          Start count up
        </button>
        <button
          className={styles.btn}
          onClick={() => stop2(true)}
          style={{ marginRight: 16 }}
        >
          Stop count up and reset(initial time)
        </button>
        time2: {time2}
      </div>
    </>
  );
};

export default UseTimerExample;
