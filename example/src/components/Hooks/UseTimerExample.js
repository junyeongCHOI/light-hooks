import React from "react";
import { useTimer } from "light-hooks";

const UseTimerExample = () => {
  const [time1, setTime1, start1, stop1] = useTimer();
  const [time2, setTime2, start2, stop2] = useTimer(10, 1000, {
    isCountDown: false,
  });

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
};

export default UseTimerExample;
