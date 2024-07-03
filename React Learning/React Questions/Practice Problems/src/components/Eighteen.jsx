// Build a context provider that allows users to switch between light and dark themes, and use the context in different parts of the app to apply the selected theme.

import { useTheme } from "../ThemeContext";

export const Eighteen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <>
      <div>
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          Dark Mode
        </label>
      </div>
    </>
  );
};
