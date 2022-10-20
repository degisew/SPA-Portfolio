import React from "react";
import sharedSelectors from "./SharedStyles.module.css";
import selectors from "./Skills.module.css";
import { skills, professional, ToolsAndMethods } from "../Components/Data";
import { FaCheckCircle } from 'react-icons/fa';
const Skills = () => {
  return (
    <section>
      <div className={sharedSelectors.title}>
        <h1>SKILLS</h1>
      </div>
      <h3 className={selectors.subTitle}>Tech Stacks</h3>
      <div className={selectors.skillsContainer}>
        {skills.map((skill) => {
          return (
            <div className={selectors.skills}>
              <FaCheckCircle />
              {skill}
            </div>
          );
        })}
      </div>
      <h3 className={selectors.subTitle}>Tools & Methods</h3>
      <div className={selectors.skillsContainer}>
        {ToolsAndMethods.map((tool) => {
          return (
            <div className={selectors.skills}>
              <FaCheckCircle />
              {tool}
            </div>
          );
        })}
      </div>
      <h3 className={selectors.subTitle}>Professional</h3>
      <div className={selectors.skillsContainer}>
        {professional.map((profession) => {
          return (
            <div className={selectors.skills}>
              <FaCheckCircle />
              {profession}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
