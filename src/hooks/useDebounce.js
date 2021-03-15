import debounce from "lodash.debounce";
import { useRef, useEffect } from "react";

/**
 * debounce hook
 * 2021.03.11 junyeong CHOI
 * @param {function} fn
 * @param {number} wait default 1000ms
 * @param {object} options { leading?: boolean; trailing?: boolean; }
 * @returns {function} debounced function
 */
const useDebounce = (fn, wait = 1000, options) => {
  const fnRef = useRef(debounce((...arg) => fn(...arg), wait, options)).current;

  useEffect(() => {
    return () => fnRef.cancel();
  }, []);

  return fnRef;
};

export default useDebounce;
