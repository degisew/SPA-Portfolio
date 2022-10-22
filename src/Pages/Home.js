import React from "react";
import selectors from "./Home.module.css";
const Home = (props) => {
  const closeMenuHandler = (e) => {
    props.closeMenuHandler(e);
  };
  let mobileMenu;
  if (props.menu) {
    {
      mobileMenu = (
        <div className={selectors.mobileMenu} >
          <button onClick={closeMenuHandler}>
            <span>X</span>
          </button>
          <div className={selectors.mobileMenuItems}>
            <a href="#about" onClick={closeMenuHandler}>
              About Me
            </a>
            <a href="#experience" onClick={closeMenuHandler}>
              {" "}
              Experience
            </a>
            <a href="#projects" onClick={closeMenuHandler}>
              Projects
            </a>
            <a href="#contact" onClick={closeMenuHandler}>
              Contact
            </a>
            <a
              href="https://docs.google.com/document/d/1TOY9uKGxlkVb5bK8gEZmcgrvAm5k2krAh1R-eowCYaU/edit?usp=sharing"
              id={selectors.resume}
            >
              Resume
            </a>
          </div>
        </div>
      );
    }
  }
  return (
    <section id={selectors.home}>
      {mobileMenu}
      <div className={selectors.mainDiv}>
        <div className={selectors.hi}>
          <p>Hi, I'm</p>
        </div>
        <div className={selectors.nameJobDiv}>
          <div className={selectors.name}>Degisew Mengist</div>
          <div className={selectors.job}>I build things for the web!</div>
        </div>
        <div className={selectors.description}>
          <p>
            I am a Front-end developer and open-source enthusiast with a love
            for clean code and accessible design. Pair-programming and remote
            work aficionado. Fluent in multiple languages, frameworks, and
            technologies, and capable of ramping up quickly and efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
