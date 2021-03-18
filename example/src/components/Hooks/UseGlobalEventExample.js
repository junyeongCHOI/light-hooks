import React, { useState } from "react";
import { useGlobalEvent } from "light-hooks";

const UseGlobalEventExample = () => {
  const [count, setCount] = useState(0);
  const emit = useGlobalEvent("increment", () =>
    setCount((count) => count + 1)
  );

  return (
    <>
      <button onClick={() => emit("increment")} style={{ marginRight: 16 }}>
        Increment
      </button>
      count: {count}
    </>
  );
};

export default UseGlobalEventExample;
