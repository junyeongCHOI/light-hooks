import React, { useState } from "react";
import { useGlobalEvent } from "light-hooks";

const UseGlobalEventExample = () => {
  const [count, setCount] = useState(0);
  useGlobalEvent("increment", () => setCount((count) => count + 1));

  return <div>count: {count}</div>;
};

export default UseGlobalEventExample;
