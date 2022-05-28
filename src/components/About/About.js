import React, { Fragment } from "react";

import "aos/dist/aos.css";
import "./About.css";
import Button from "../UI/Button";
import Resume from "./Resume.pdf";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript(ES6+)",
    "React",
    "Typescript",
    "Git",
    "Vs Code",
  ];
  return (
    <Fragment>
      <div className='about-me' id='About'>
        <div className='about'>
          <div className='about-content-wrapper'>
            <h3>About Me</h3>
            <p className='about-content'>
              An enthusiastic and passionate{" "}
              <span className='span'>Front-End developer </span> who brings
              superior front-end design to promote organization-specific website
              presence. Skilled in{" "}
              <span className='span'>developing web-based applications </span>{" "}
              featuring proactive optimization and mobile responsiveness by
              incorporating an array of{" "}
              <span className='span'>
                latest frontend technologies and tools
              </span>
              . A fast learner with astonishing problem-solving skills and with interests in accessibility and
              <span className='span'> usability of modern websites</span>.
            </p>
            <div className='my-skills'>
              <p>Here are the technologies and tools I work with:</p>
              <ul className='skills-list'>
                {skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='about-btns'>
            <Button>
              <a href={Resume} download>
                Resume
              </a>
            </Button>
            <Button>
              <a href='mailto:horlaide909@gmail.com'>Hire Me</a>
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
