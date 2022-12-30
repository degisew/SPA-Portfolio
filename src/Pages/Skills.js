import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import sharedSelectors from './SharedStyles.module.css';
import selectors from './Skills.module.css';
import { skills, professional, ToolsAndMethods } from '../data';

const Skills = () => (
  <section>
    <div className={sharedSelectors.title}>
      <h1>SKILLS</h1>
    </div>
    <div className={selectors.mainContainer}>
      <div className={selectors.subTitleSkillContDiv}>
        <h3 className={selectors.subTitle}>Tech Stacks</h3>
        <div className={selectors.skillsContainer}>
          {skills.map((skill) => (
            <div className={selectors.skills} key={skill}>
              <FaCheckCircle />
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className={selectors.subTitleSkillContDiv}>
        <h3 className={selectors.subTitle}>Tools & Methods</h3>
        <div className={selectors.skillsContainer}>
          {ToolsAndMethods.map((tool) => (
            <div className={selectors.skills} key={tool}>
              <FaCheckCircle />
              {tool}
            </div>
          ))}
        </div>
      </div>
      <div className={selectors.subTitleSkillContDiv}>
        <h3 className={selectors.subTitle}>Professional</h3>
        <div className={selectors.skillsContainer}>
          {professional.map((profession) => (
            <div className={selectors.skills} key={profession}>
              <FaCheckCircle />
              {profession}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
