import React from "react";
import { useOutsideClick } from "light-hooks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./common.module.scss";

const UseOutsideClick = () => {
  const [containerRef, isOutsideClick] = useOutsideClick();

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>useOutsideClick</div>
      <div className={styles.container}>
        useOutsideClick()
        <br />
        <br />
        returns [containerRef, isOutsideClick]
      </div>
      <div className={styles.title}>Example</div>
      <div className={styles.container}>
        <div
          style={{
            width: 300,
            height: 300,
            backgroundColor: "pink",
            marginBottom: 16,
          }}
        >
          wrap
          <div
            style={{
              width: 150,
              height: 150,
              backgroundColor: "skyblue",
              margin: "50px auto",
            }}
            ref={containerRef}
          >
            container
          </div>
        </div>
        isOutsideClick: {isOutsideClick ? "true" : "false"}
      </div>
      <div className={styles.container}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`
import React from "react";
import { useOutsideClick } from "light-hooks";

const UseOutsideClickTest = () => {
  const [containerRef, isOutsideClick] = useOutsideClick();

  return (
    <>
      <div
        style={{
          width: 300,
          height: 300,
          backgroundColor: "pink",
          marginBottom: 16,
        }}
      >
        wrap
        <div
          style={{
            width: 150,
            height: 150,
            backgroundColor: "skyblue",
            margin: "50px auto",
          }}
          ref={containerRef}
        >
          container
        </div>
      </div>
      isOutsideClick: {isOutsideClick ? "true" : "false"}
    </>
  );
}

export default UseOutsideClickTest;
          `}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default UseOutsideClick;
