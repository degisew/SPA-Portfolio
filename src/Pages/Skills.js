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
      <div className={selectors.mainContainer}>
        <div className={selectors.subTitleSkillContDiv}>
          <h3 className={selectors.subTitle}>Tech Stacks</h3>
          <div className={selectors.skillsContainer}>
            {skills.map((skill) => {
              return (
                <div className={selectors.skills} key={skill}>
                  <FaCheckCircle />
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
        <div className={selectors.subTitleSkillContDiv}>
          <h3 className={selectors.subTitle}>Tools & Methods</h3>
          <div className={selectors.skillsContainer}>
            {ToolsAndMethods.map((tool) => {
              return (
                <div className={selectors.skills} key={tool}>
                  <FaCheckCircle />
                  {tool}
                </div>
              );
            })}
          </div>
        </div>
        <div className={selectors.subTitleSkillContDiv}>
          <h3 className={selectors.subTitle}>Professional</h3>
          <div className={selectors.skillsContainer}>
            {professional.map((profession) => {
              return (
                <div className={selectors.skills} key={profession}>
                  <FaCheckCircle />
                  {profession}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
