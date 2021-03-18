import React, { useState, useEffect } from "react";
import { useThrottle } from "light-hooks";

const UseThrottleExample = () => {
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
};

export default UseThrottleExample;
