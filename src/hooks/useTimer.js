import { useState, useRef, useEffect } from "react";

/**
 * timer hook
 * 2021.03.11 junyoung CHOI
 * @param {number} initialTime default: 300
 * @param {number} timeInterval default: 1000ms
 * @param {object} options { isCountDown?: boolean, max?: number, min?:number} isCountDown: default true, max: default Infinity, min: default 0
 * @returns {Array} [time, setTime, start, stop]
 */
const useTimer = (initialTime = 300, timeInterval = 1000, options = {}) => {
  const [time, setTime] = useState(initialTime);
  const optionsRef = useRef({
    isCountDown: true,
    max: Infinity,
    min: 0,
    ...options,
  }).current;
  const isStarted = useRef(false);
  const expectedTime = useRef(0);
  const clearSetT = useRef(null);

  /**
   * timer stop
   * @param {boolean} isReset true: stop and set initial time, false: stop
   */
  const stop = (isReset) => {
    if (!clearSetT) return;

    clearTimeout(clearSetT.current);

    if (isReset) {
      setTime(initialTime);
    }

    isStarted.current = false;

    return isReset ? initialTime : time;
  };

  const start = () => {
    if (isStarted.current) return;

    let run;

    expectedTime.current = Date.now();

    setTimeout(
      (run = () => {
        const drift = Date.now() - expectedTime.current;

        setTime((prev) => {
          if (
            optionsRef.isCountDown
              ? prev <= optionsRef.min
              : prev >= optionsRef.max
          ) {
            return optionsRef.isCountDown ? optionsRef.min : optionsRef.max;
          } else {
            expectedTime.current += timeInterval;
            clearSetT.current = setTimeout(run, timeInterval - drift);
            return optionsRef.isCountDown ? prev - 1 : prev + 1;
          }
        });
      })
    );

    isStarted.current = true;
  };

  useEffect(() => {
    return () => stop();
  }, []);

  return [time, setTime, start, stop];
};

export default useTimer;
