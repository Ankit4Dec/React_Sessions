import { useState } from "react";

const Counter = () => {
  const [count, SetCount] = useState(10);

  const incrementHandler = () => {
    // State changed is async in nature 
    SetCount((preCount)=>preCount + 1);
    SetCount((preCount)=>preCount + 1);
  };

  const decrementHandler = () => {
    SetCount(count - 1);
  };

  const resetHandler = () => {
    SetCount(0);
  };

  return (
    <>
      <h2>{count}</h2>
      <div>
        <button onClick={incrementHandler}>++</button>
        <button onClick={decrementHandler}>--</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
