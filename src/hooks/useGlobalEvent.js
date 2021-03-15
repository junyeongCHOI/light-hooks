import { useEffect } from "react";

/**
 * return useGlobalEvent hook
 * 2021.03.15 junyeong CHOI
 * @param {string} eventName
 * @param {function} func
 * @param {Array} arg
 * @returns {function} globalEmit
 */
const useGlobalEvent = (eventName, func, arg = []) => {
  const setEvent = (eventStr) => {
    if (!window.useGlobalEvent[eventStr]) {
      window.useGlobalEvent[eventStr] = new Event(eventStr);
    }
  };

  const globalEmit = (emitName) => {
    if (typeof emitName !== "string") {
      return;
    }

    setEvent(emitName);

    document.dispatchEvent(window.useGlobalEvent[emitName]);
  };

  useEffect(() => {
    if (!window) {
      throw "require window";
    }

    if (!window.useGlobalEvent) {
      window.useGlobalEvent = {};
    }

    if (
      !eventName ||
      typeof eventName !== "string" ||
      typeof func !== "function"
    ) {
      return;
    }

    setEvent(eventName);

    document.addEventListener(eventName, func);
    return () => document.removeEventListener(eventName, func);
  }, arg);

  return globalEmit;
};

export default useGlobalEvent;
