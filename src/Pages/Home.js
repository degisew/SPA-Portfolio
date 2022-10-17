import React from 'react'
import selectors from './Home.module.css';
const Home = () => {
  return (
    <section id={selectors.home}>
      <div className={selectors.mainDiv}>
        <div className={selectors.hi}>
          <p>Hi, I'm</p>
        </div>
        <div className={selectors.nameJobDiv}>
          <div className={selectors.name}>
            Degisew Mengist
          </div>
          <div className={selectors.job}>
            I build things for the web!
          </div>
        </div>
        <div className={selectors.description}>
          <p>
            I am a Front-end developer and open-source enthusiast with a
            love for clean code and accessible design. Pair-programming and
            remote work aficionado. Fluent in multiple languages, frameworks,
            and technologies, and capable of ramping up quickly and efficiently.    
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home
