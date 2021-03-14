import { useRef, useEffect, useState } from "react";

/**
 * return isOutsideClick state hook
 * 2021.03.11 junyeong CHOI
 * @returns {Array} [containerRef, isOutsideClick]
 */
const useOutsideClick = () => {
  const containerRef = useRef(null);
  const [isOutsideClick, setOutSideClick] = useState(false);

  const handleClickOutside = (e) => {
    if (containerRef.current) {
      setOutSideClick(!containerRef.current.contains(e.target));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    () => document.removeEventListener("mousedown", handleClickOutside);
  }, [containerRef.current]);

  return [containerRef, isOutsideClick];
};

export default useOutsideClick;
