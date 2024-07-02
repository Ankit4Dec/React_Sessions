// Create a component that changes its background color when clicked.

import { useState } from "react";

export const Eight = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleClick = () => {
    const newColor = backgroundColor === "white" ? "lightblue" : "white";
    setBackgroundColor(newColor)
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{
          backgroundColor,
          width: "200px",
          height: "200px",
          cursor: "pointer",
        }}
      >
        Click me to Chang Color
      </div>
    </>
  );
};
