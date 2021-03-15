import React, { useState, useEffect } from "react";
import { useThrottle } from "light-hooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./common.module.scss";

const UseThrottle = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const throttled = useThrottle((e) => {
    setMousePosition({ x: e.x, y: e.y });
  }, 1000);

  useEffect(() => {
    document.addEventListener("mousemove", throttled);
    return () => {
      document.removeEventListener("mousemove", throttled);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>useThrottle</div>
      <div className={styles.container}>
        useThrottle(func, wait, options)
        <br />
        <br />
        wait = number (ms)
        <br />
        <br />
        options = {`{ leading? : boolean, trailing? : boolean }`}
        <br />
        <br />
        returns throttled function
      </div>
      <div className={styles.title}>Example</div>
      <div className={styles.container}>
        Mouse position: ({mousePosition.x}, {mousePosition.y})
      </div>
      <div className={styles.container}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`
import React, { useState, useEffect } from "react";
import { useThrottle } from "light-hooks";

const UseThrottleTest = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const throttled = useThrottle(
      (e) => setMousePosition({ x: e.x, y: e.y }),
      1000
    );
  
    useEffect(() => {
      document.addEventListener("mousemove", throttled);
      return () => document.removeEventListener("mousemove", throttled);
    }, []);

  return (
      <div>
        Mouse position: ({mousePosition.x}, {mousePosition.y})
      </div>
  );
}

export default UseThrottleTest;
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseThrottle;
