import React, { Fragment } from 'react';
import './About.css';
import Button from '../UI/Button';
import Resume from './Resume.pdf';

const About = () => {
  const skills = ['HTML', 'CSS', 'Javascript(ES6+)', 'React', 'Git', 'Vs Code'];

    return (
        <Fragment>
          <div className='about-me' id="About">
            <div className='about'>
              <div className='about-content-wrapper'>
                 <h3>About Me</h3>
                 <p className="about-content">
                 Enthusiastic software developer who brings superior front-end design
                 to promote organization-specific website presence. Skilled in developing web-based
                 applications by incorporating a wide range of technologies. A fast learner with 
                 astonishing problem-solving skills, communication skills and a team player.
                 When I'm not writing codes, I'm either listening to music or sleeping. </p>
                <div className='my-skills'>
                 <p>Here are the technologies and tools I work with:</p>
                 <ul className="skills-list">
                {skills.map((skill,i )=><li key={i}>{skill}</li>)}
              </ul>
              </div>
              </div>
              <div className='about-btns'>
                  <Button>
                    <a href={Resume} download>Resume</a>
                  </Button>
                 <Button><a href="mailto:horlaide909@gmail.com">Hire Me</a></Button>
              </div>
            </div>
          </div>
         
      
      </Fragment>
    )
}

export default About;