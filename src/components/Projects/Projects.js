import React, { Fragment } from 'react';
import './Projects.css';
import Homedelivery from '../../assets/Homedelivery.jpg';
import WeatherApp from '../../assets/Weatherapp.png';
import LoanCalculator from '../../assets/Loancalculator.png';
import NumberGuess from '../../assets/Numberguess.png';
const Project = () => {
  const Projects = [{
    name : 'Home Delivery Landing Page',
    link : 'https://homedelivery.netlify.app/',
    image : Homedelivery,
    description : 'A landing page for a home delivery website',
    github : 'https://github.com/olaiide/home-delivery',
  },
{
    name : 'Loan Calculator',
    link : ' https://loan-web-calculator.netlify.app/',
    image : LoanCalculator,
    description : 'A loan calculator that allows user to calculate how much they will be paying back monthly on a loan.',
    github : 'https://github.com/olaiide/loan-calculator',
  },
{
     name : 'Weather App',
    link :  'https://current-weather-247.netlify.app/',
    image : WeatherApp,
    description : 'A weather map that shows major current weather components of specified city upon search.',
    github : 'https://github.com/olaiide/Weather-app',
},
{
    name : 'Number Guesser Game',
    link : 'https://num-guess.netlify.app/',
    image : NumberGuess,
    description : 'Game application that allows player to guess a correct number between 1 and 20.',
    github : 'https://github.com/olaiide/number-guesser',
},];

    return(
      <Fragment>
        <div className="container" id="Projects">
          <h3 className="project-heading">Featured Projects</h3>
            <div className="project-data">
             {Projects.map((data, id) =>{
              return (
                <div key={id} className="map">
                   <div className="img-wrapper">
                     <a href={data.link} target="_blank" rel="noopener noreferrer">
                       <img
                      src={data.image} 
                      alt="Homedelivery" 
                      className="project-img"
                     />
                     </a>
                   </div>
                   <div className='project-content'>
                     <h4 className="project-name">{data.name}</h4>
                     <p className="project-description">{data.description}</p>
                     <div className="project-linkss">
                     <a href={data.link} target="_blank" rel="noreferrer">
                       <i class="fas fa-eye">
                         <span className="live">Live</span>
                         </i>
                       </a>
                     <a href={data.github} target="_blank" rel="noreferrer" >
                       <i class="fa fa-github" aria-hidden="true"></i>
                       </a>
                     </div>
                  </div>
                </div>
              )
            })}
            </div>
           </div>
      </Fragment>
  )
 }

export default Project;