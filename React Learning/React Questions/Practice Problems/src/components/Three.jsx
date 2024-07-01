// Create a form that takes user input and display it in real-time

import { useState } from "react";

export const Three = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>User Input: {input}</p>
    </div>
  );
};
