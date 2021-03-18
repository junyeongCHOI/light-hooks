import React from "react";
import { useOutsideClick } from "light-hooks";

const UseOutsideClickExample = () => {
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
};

export default UseOutsideClickExample;
