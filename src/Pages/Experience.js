import React from 'react';
import sharedSelectors from './SharedStyles.module.css';
import selectors from './Experience.module.css';
import { experiences } from '../data';

const Experience = () => (
  <section id="experience">
    <div>
      <div className={sharedSelectors.title}>
        <h1>EXPERIENCE</h1>
      </div>
      <div className={selectors.experiencesDiv}>
        {experiences.map((experience) => (
          <div className={selectors.experience} key={experience.id}>
            <h2>{experience.company}</h2>
            <h3>{experience.role}</h3>
            <h4>{experience.duration}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
