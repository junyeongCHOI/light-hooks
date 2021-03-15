import React, { useState } from "react";
import { useGlobalEvent } from "light-hooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./common.module.scss";

const UseGlobalEvent = () => {
  const [count, setCount] = useState(0);
  const emit = useGlobalEvent("increment", () =>
    setCount((count) => count + 1)
  );

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>useGlobalEvent</div>
      <div className={styles.container}>
        useGlobalEvent(eventName, func, array)
        <br />
        <br />
        eventName = string
        <br />
        <br />
        func = listenr function
        <br />
        <br />
        array = useEffect dependency array (add, remove eventlistener)
        <br />
        <br />
        returns globalEmit function
      </div>
      <div className={styles.title}>Example</div>
      <div className={styles.container}>
        <button onClick={() => emit("increment")} style={{ marginRight: 16 }}>
          Increment
        </button>
        count: {count}
      </div>
      <div className={styles.container}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`//Count.js
import React, { useState } from "react";
import { useGlobalEvent } from "light-hooks";

const UseGlobalEvent = () => {
  const [count, setCount] = useState(0);
  useGlobalEvent("increment", () =>
    setCount((count) => count + 1)
  );

  return (
    <div>
      count: {count}
    </div>
  );
}

export default UseGlobalEvent;
          `}
        </SyntaxHighlighter>
      </div>
      <div className={styles.container}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`//Increment.js
import React, { useState } from "react";
import { useGlobalEvent } from "light-hooks";

const UseGlobalEvent = () => {
  const emit = useGlobalEvent();

  return (
      <button onClick={() => emit("increment")} style={{ marginRight: 16 }}>
        Increment
      </button>
  );
}

export default UseGlobalEvent;
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseGlobalEvent;
