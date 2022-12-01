import React from 'react'
import { SlMenu } from "react-icons/sl";
import selectors from "./NavBar.module.css";
const NavBar = (props) => {
  
  const openMenuHandler = (e) => {
    props.openMenuHandler(e);
  };
  return (
    <div>
      <header className={selectors.header}>
        <div className={selectors.logoContainer}>
          <a href="#home">
            <h1>Degisew</h1>
          </a>
        </div>

        <div className={selectors.navContainer}>
          <nav id={selectors.navBar}>
            <a href="#about">About Me</a>
            <a href="#experience"> Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href="https://drive.google.com/file/d/1Vhfo_7AuEDK6ScO5_l8D2aOQSozd0cXm/view?usp=sharing"
              id={selectors.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
        <div className={selectors.menuBtnDiv}>
          <button className={selectors.MenuBtn} onClick={openMenuHandler}>
            <SlMenu />
          </button>
        </div>
      </header>
    </div>
  );
}

export default NavBar
