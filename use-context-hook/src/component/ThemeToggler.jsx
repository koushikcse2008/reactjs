// ThemeToggler.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggler = () => {
  // Consume the context using useContext hook
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggler;
