import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
// import Testimonal from "./Pages/Testimonal";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const openMenuHandler = (e) => {
    e.preventDefault();
    setShowMenu(!showMenu);
  };
  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
   }, [showMenu]);
  return (
    <main>
      <NavBar openMenuHandler={openMenuHandler} />
      <Home menu={showMenu} closeMenuHandler={closeMenuHandler} />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      {/* <Testimonal /> */}
      <ContactMe />
    </main>
  );
}

export default App;
