// Build a time that count down from a specified time.

import { useEffect, useState } from "react";

export const Seven = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(time);
    }
  }, [time]);

  return (
    <>
      <div>Time Left: {time} second</div>
    </>
  );
};
