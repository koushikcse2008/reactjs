// ThemedComponent.js
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemedComponent = () => {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div style={styles}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
    </div>
  );
};

export default ThemedComponent;
