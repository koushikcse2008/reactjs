// ThemeContext.js
import React, { createContext, useState } from "react";

// Create a context with a default value
const ThemeContext = createContext();

// ThemeProvider component to provide the context to the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Initial theme is light

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
