import React, { Fragment } from "react";
import "./Projects.css";
import Moviefinder from "../../assets/Moviefinder.png";
import Homedelivery from "../../assets/Homedelivery.jpg";
import WeatherApp from "../../assets/Weatherapp.png";
import LoanCalculator from "../../assets/Loancalculator.png";
import NumberGuess from "../../assets/Numberguess.png";
import Ecommerce from "../../assets/E-Commerce.png";
const Project = () => {
  const Projects = [
    {
      name: "Floffy Stores",
      link: "https://floffystores.netlify.app/",
      image: Ecommerce,
      description:
        "An e-commerce web app with features to add products to cart and checkout with stripe",
      github: "https://github.com/olaiide/fluffy-stores",
    },
    {
      name: "Movie Finder",
      link: "https://movies-finder247.netlify.app/",
      image: Moviefinder,
      description:
        "A movie finder web app that allows user search for movies, get details and watch trailers",
      github: "https://github.com/olaiide/Movie-finder",
    },
    {
      name: "Weather App",
      link: "https://current-weather-247.netlify.app/",
      image: WeatherApp,
      description:
        "A weather map that shows major current weather components of specified city upon search.",
      github: "https://github.com/olaiide/Weather-app",
    },

    {
      name: "Loan Calculator",
      link: " https://loan-web-calculator.netlify.app/",
      image: LoanCalculator,
      description:
        "A loan calculator that allows user to calculate how much they will be paying back monthly on a loan.",
      github: "https://github.com/olaiide/loan-calculator",
    },
    {
      name: "Home Delivery",
      link: "https://homedelivery.netlify.app/",
      image: Homedelivery,
      description: "A landing page for a home delivery website",
      github: "https://github.com/olaiide/home-delivery",
    },
    {
      name: "Number Guesser",
      link: "https://num-guess.netlify.app/",
      image: NumberGuess,
      description:
        "Game application that allows player to guess a correct number between 1 and 20.",
      github: "https://github.com/olaiide/number-guesser",
    },
  ];

  return (
    <Fragment>
      <div className='container' id='Projects'>
        <h3 className='project-heading'>Featured Projects</h3>
        <div className='project-data'>
          {Projects.map((data, id) => {
            return (
              <div key={id} className='project-wrapper'>
                <div className='project-content'>
                  <h4 className='project-name'>{data.name}</h4>
                  <p className='project-description'>{data.description}</p>

                  <div className='project-linkss'>
                    <span className="link-wrap">
                    <a href={data.link} target='_blank' rel='noreferrer'>
                      <i class='fas fa-eye'></i>
                      <span className='live'>Live</span>
                    </a>
                    </span>
                    <span className="link-wrap">
                    <a href={data.github} target='_blank' rel='noreferrer'>
                      <i class='fa fa-code-fork' aria-hidden='true'></i>
                      <span className='code'>Code</span>
                    </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
