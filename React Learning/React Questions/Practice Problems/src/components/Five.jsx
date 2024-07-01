// Implement a basic toggle switch component

import { useState } from "react";

export const Five = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <label htmlFor="">
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p>{isToggled ? " On" : "Off"}</p>
    </div>
  );
};
