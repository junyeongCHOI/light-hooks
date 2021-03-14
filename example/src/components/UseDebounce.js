import React, { useState } from "react";
import { useDebounce } from "light-hooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./common.module.scss";

const UseDebounce = () => {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const debounced = useDebounce((value) => setDebouncedValue(value), 1500);

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>useDebounce</div>
      <div className={styles.container}>
        useDebounce(func, wait, options)
        <br />
        <br />
        wait = number (ms)
        <br />
        <br />
        {`
        options = { leading? : boolean, trailing? : boolean }
        `}
        <br />
        <br />
        returns debounced function
      </div>
      <div className={styles.title}>Usage</div>
      <div className={styles.container}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`
import { useDebounce } from "light-hooks";

const DebounceTest = () => {

  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const debounced = useDebounce((value) => setDebouncedValue(value), 1500);

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
}

export default DebounceTest;
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.title}>Example</div>
      <div className={styles.container}>
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
      </div>
    </div>
  );
};

export default UseDebounce;
