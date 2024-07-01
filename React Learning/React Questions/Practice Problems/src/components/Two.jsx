import { useState } from "react";

export const Two = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <span>{count}</span>
        </div>
        <button onClick={() => setCount(count + 1)}>++</button>

        <button onClick={() => setCount(count - 1)}>--</button>
      </div>
    </>
  );
};
