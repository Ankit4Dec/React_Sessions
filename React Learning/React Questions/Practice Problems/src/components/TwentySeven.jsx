// Work with multiple states in a single state object. The Component should display the following information on the screen.
// 1. A count value, initially set to 0.
// 2. A text value, initially seet to "Hello World!".
// 3. An "Active" status, initially set to true.

import { useState } from "react";

export const TwentySeven = () => {
  const [state, setState] = useState({
    count: 0,
    text: "Hello World!",
    isActive: true,
  });

  function incrementCount() {
    setState({ ...state, count: state.count + 1 });
  }
  function chnageText() {
    setState({ ...state, text: "Updated Text" });
  }
  function toggleActive() {
    setState({ ...state, isActive: !state.isActive });
  }

  return (
    <>
      <div>
        <h1>Multiple State</h1>
        <p>Count:{state.count} </p>
        <p>Text:{state.text} </p>
        <p>Active:{state.isActive ? "YES" : "No"} </p>

        <button onClick={incrementCount}>Increment</button>
        <button onClick={chnageText}>Change Text</button>
        <button onClick={toggleActive}>Toggle Active</button>
      </div>
    </>
  );
};
