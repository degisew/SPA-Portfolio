/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl';
import selectors from './NavBar.module.css';

const NavBar = ({ openMenuHandler,  closeMenuHandler, menu }) => {
  const openMenu = (e) => {
    openMenuHandler(e);
  };
  const closeMenu = (e) => {
    closeMenuHandler(e);
  };
  let mobileMenu;
  if (menu) {
    mobileMenu = (
      <div className={selectors.mobileMenu}>
        <button type="button" onClick={closeMenu}>
          <span>X</span>
        </button>
        <div className={selectors.mobileMenuItems}>
          <Link to="/about" onClick={closeMenu}>
            About Me
          </Link>
          <Link to="/experience" onClick={closeMenu}>
            {" "}
            Experience
          </Link>
          <Link to="/projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link to="/skills" onClick={closeMenu}>
            Skills
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1Vhfo_7AuEDK6ScO5_l8D2aOQSozd0cXm/view?usp=sharing"
            id={selectors.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    );
  }
  return (
    <div>
      {mobileMenu}
      <header className={selectors.header}>
        <div className={selectors.logoContainer}>
          <a href="#home">
            <h1>Degisew</h1>
          </a>
        </div>

        <div className={selectors.navContainer}>
          <nav id={selectors.navBar}>
            <Link to="/about">About Me</Link>
            <Link to="projects">Projects</Link>
            <Link to="skills">Skills</Link>
            <Link to="experience"> Experience</Link>
            <Link to="contact">Contact</Link>
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
          <button
            type="button"
            className={selectors.MenuBtn}
            onClick={openMenu}
          >
            <SlMenu />
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
