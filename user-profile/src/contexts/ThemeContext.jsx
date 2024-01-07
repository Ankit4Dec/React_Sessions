import { createContext, useState } from "react";

export const ThemeContext = createContext();

//Context Component
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
