import React from "react";
import "../styles/Eighteen.css";
import { useTheme } from "../ThemeContext";

export default function EighteenComp() {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <div className={`container ${themeClass}`}>
      <p>This Component uses selected theme</p>
    </div>
  );
}
