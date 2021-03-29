import React, { useState } from "react";
import { useGlobalEvent } from "light-hooks";
import styles from "../common.module.scss";

const UseGlobalEventExample = () => {
  const [count, setCount] = useState(0);
  const emit = useGlobalEvent("increment", () =>
    setCount((count) => count + 1)
  );

  return (
    <>
      <button
        className={styles.btn}
        onClick={() => emit("increment")}
        style={{ marginRight: 16 }}
      >
        Increment
      </button>
      count: {count}
    </>
  );
};

export default UseGlobalEventExample;
