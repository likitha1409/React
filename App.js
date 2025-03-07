// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div>
      <Navbar />
      <ThemeSwitcher />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;