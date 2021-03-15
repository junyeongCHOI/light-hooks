import React from "react";
import { useTimer } from "light-hooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./common.module.scss";

const UseTimer = () => {
  const [time1, setTime1, start1, stop1] = useTimer();
  const [time2, setTime2, start2, stop2] = useTimer(10, 1000, {
    isCountDown: false,
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>useTimer</div>
      <div className={styles.container}>
        useTimer(initialTime, timeInterval, options)
        <br />
        <br />
        initialTime = number (default = 300)
        <br />
        <br />
        timeInterval = number (default = 1000ms)
        <br />
        <br />
        options =
        {`{ isCountDown?: boolean, max?: number, min?:number} isCountDown: default true, max: default Infinity, min: default 0`}
        <br />
        <br />
        returns [time, setTime, start, stop]
      </div>
      <div className={styles.title}>Example</div>
      <div className={styles.container}>
        <div style={{ marginBottom: 16 }}>
          <button onClick={() => setTime1(1000)}>Set time 1000</button>
          <button onClick={() => start1()}>Start count down</button>
          <button onClick={() => stop1()} style={{ marginRight: 16 }}>
            Stop count down and reset
          </button>
          time1: {time1}
        </div>
        <div>
          <button onClick={() => setTime2(1000)}>Set time 1000</button>
          <button onClick={() => start2()}>Start count up</button>
          <button onClick={() => stop2(true)} style={{ marginRight: 16 }}>
            Stop count up and reset(initial time)
          </button>
          time2: {time2}
        </div>
      </div>
      <div className={styles.container}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`
import React from "react";
import { useTimer } from "light-hooks";

const UseTimer = () => {
  const [time1, setTime1, start1, stop1] = useTimer();
  const [time2, setTime2, start2, stop2] = useTimer(10, 1000, { isCountDown: false });

  return (
    <>
      <div style={{ marginBottom: 16 }}>
      <button onClick={() => setTime1(1000)}>Set time 1000</button>
      <button onClick={() => start1()}>Start count down</button>
      <button onClick={() => stop1()} style={{ marginRight: 16 }}>
        Stop count down and reset
      </button>
      time1: {time1}
      </div>
      <div>
      <button onClick={() => setTime2(1000)}>Set time 1000</button>
      <button onClick={() => start2()}>Start count up</button>
      <button onClick={() => stop2(true)} style={{ marginRight: 16 }}>
        Stop count up and reset(initial time)
      </button>
      time2: {time2}
      </div>
    </>
  );
}

export default UseTimer;
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseTimer;
