/* eslint-disable */
import React, { useState } from 'react';
import {
  NavigateBeforeRounded,
  NavigateNextRounded,
} from '@mui/icons-material';
import { FaGithub } from 'react-icons/fa';
import { BiLink } from 'react-icons/bi';
import { CardContent, Container } from '@mui/material';
import { projects } from '../data';
import selectors from './Projects.module.css';
import sharedSelectors from './SharedStyles.module.css';
import styles from './styles';

const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const prevStep = () => {
    setAnimate(true);
     setProjectIndex(projectIndex - 1);
    setTimeout(() => setAnimate(false), 500);
  };

  const nextStep = () => {
     setProjectIndex(projectIndex + 1);
    setAnimate(true);
     setTimeout(() => setAnimate(false), 500);
  };

  const prevAnimator = () => {
    projectIndex !== 0 && prevStep();
  };

  const nextAnimator = () => {
    projectIndex !== projects.length - 1 && nextStep();
  };

  return (
    <section id="projects">
      <div>
        <div className={sharedSelectors.title}>
          <h1>PROJECTS</h1>
        </div>
        <Container sx={styles.container}>
          <div className={selectors.desktopNavigator}>
            <NavigateBeforeRounded
              style={{
                fontSize: "80px",
                zIndex: "1",
              }}
              onClick={prevAnimator}
            />
          </div>
          <div
            className={selectors.imgDiv}
            id={animate ? selectors.animateDiv : null}
          >
            <img
              className={styles.cardMedia}
              src={projects[projectIndex].url}
              alt="project-screenshot"
            />
            <div>
              <div className={selectors.title}>
                <h2>{projects[projectIndex].title}</h2>
              </div>
              <CardContent>{projects[projectIndex].description}</CardContent>
              <div className={selectors.builtWith}>
                {projects[projectIndex].builtWith.map((tech) => (
                  <div className={selectors.tech} key={tech}>
                    {tech}
                  </div>
                ))}
              </div>
              <div className={selectors.icons}>
                <div className={selectors.linkSeeDiv}>
                  <div>
                    <a
                      href={projects[projectIndex].live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Live &nbsp;
                      <BiLink />
                    </a>
                  </div>
                  <div>
                    <a
                      href={projects[projectIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Source &nbsp;
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={selectors.desktopNavigator}>
            <NavigateNextRounded
              style={{
                fontSize: "80px",
                zIndex: "1",
              }}
              onClick={nextAnimator}
            />
          </div>
        </Container>
        <div className={selectors.mobileNavigator}>
          <NavigateBeforeRounded
            style={{
              fontSize: "80px",
              zIndex: "1",
            }}
            onClick={prevAnimator}
          />
          <NavigateNextRounded
            style={{
              fontSize: "80px",
              zIndex: "1",
            }}
            onClick={nextAnimator}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
