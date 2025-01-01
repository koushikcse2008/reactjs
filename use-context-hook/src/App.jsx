// App.js
import React from "react";
import { ThemeProvider } from "./component/ThemeContext";
import ThemeToggler from "./component/ThemeToggler";
import ThemedComponent from "./component/ThemedComponent";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>React useContext() Example</h1>
        <ThemeToggler />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;

