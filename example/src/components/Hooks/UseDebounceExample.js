import React, { useState } from "react";
import { useDebounce } from "light-hooks";
import styles from "../common.module.scss";

const UseDebounce = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const debounced = useDebounce((value) => setDebouncedValue(value), 500);

  return (
    <>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debounced(e.target.value);
        }}
        placeholder="type"
      />
      result: {debouncedValue}
    </>
  );
};

export default UseDebounce;
