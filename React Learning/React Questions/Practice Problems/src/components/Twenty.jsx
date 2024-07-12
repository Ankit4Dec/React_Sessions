// Create a simple counter application using useReducer to manage the state

import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
  }
}

export const Twenty = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};
