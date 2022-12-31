import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Experience from './Pages/Experience';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';

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
      <NavBar
        openMenuHandler={openMenuHandler}
        menu={showMenu}
        closeMenuHandler={closeMenuHandler}
      />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutMe />} path="/about" />
        <Route element={<Experience />} path="/experience" />
        <Route element={<Skills />} path="/skills" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<ContactMe />} path="/contact" />
      </Routes>
    </main>
  );
}

export default App;
