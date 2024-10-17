import React from "react";
import useDarkMode from "../hook/useDarkMode"; // Importamos el hook

const ThemeToggle = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode(); // Usamos el hook

  return (
    <div className="theme-toggle">
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
