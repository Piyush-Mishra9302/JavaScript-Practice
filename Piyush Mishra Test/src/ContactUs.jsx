// App.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ContactUs = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme === "light" ? "#e11818ff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  return (
    <div style={styles}>
      <div>
        <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};


export default ContactUs;
