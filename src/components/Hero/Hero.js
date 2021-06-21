import React, { Fragment } from 'react';
import TypeWriter from '../Typewriter/Typewriter';
import Avatar from '../../assets/avatar.svg';
import Emoji from '../../assets/emoji.svg';
import './Hero.css'
const Hero = () => {
   return (
        <Fragment>
          <div className="wrapper" id="Home">
           <div className="landing-page">
             <p>Hi There<img src={Emoji} alt="hi there"/> I'm</p>
             <h2>Olaide Kolade,</h2>
             <div><TypeWriter /></div>
             </div>
               <div className="avatar">
                 <img src={Avatar} alt="avatar" />
              </div>
           </div>
        </Fragment>
    )
}

export default Hero;