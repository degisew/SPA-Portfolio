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
        <div className={selectors.menuBtnDiv}>
          <button className={selectors.MenuBtn} onClick={openMenuHandler}>
            <SlMenu />
          </button>
        </div>
        <div className={selectors.navContainer}>
          <nav id={selectors.navBar}>
            <a href="#about">About Me</a>
            <a href="#experience"> Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href="https://docs.google.com/document/d/1TOY9uKGxlkVb5bK8gEZmcgrvAm5k2krAh1R-eowCYaU/edit?usp=sharing"
              id={selectors.resume}
            >
              Resume
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar
