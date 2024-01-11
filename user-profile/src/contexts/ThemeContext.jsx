import { createContext, useState } from "react";

export const ThemeContext = createContext();

//Context Component
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState();

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
      {isDark && (
        <style>
          {`body{
            background-color: black;
            color: white;
          }`}
        </style>
      )}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
