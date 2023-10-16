import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, SetCount] = useState(0);

  const incrementHandler = () => {
    // State changed is async in nature
    SetCount((preCount) => preCount + 1);
    // SetCount((preCount) => preCount + 1);
    SetText(count + 1);
  };

  const decrementHandler = () => {
    SetCount(count - 1);
    SetText(count - 1);
  };

  const resetHandler = () => {
    SetCount(0);
  };

  const [text, SetText] = useState("");

  const styleObj = { backgroundColor: "lightpink", padding: "5px" };

  return (
    <>
      <div className="container">
        <h2>{count}</h2>
        <div>
          <button className="btn-primary" onClick={incrementHandler}>
            ++
          </button>
          <button style={styleObj} onClick={decrementHandler}>
            --
          </button>
          <button onClick={resetHandler}>Reset</button>
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => SetText(e.target.value)}
        />
      </div>
    </>
  );
};

export default Counter;
