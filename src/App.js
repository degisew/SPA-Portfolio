import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
    </main>
  );
}

export default App;
