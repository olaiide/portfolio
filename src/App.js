import React, { Fragment } from 'react';
import NavBar from './components/NavBar/NavigationBar';
import About from './components/About/About';
import './App.css'
import Hero from './components/Hero/Hero';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Fragment>
      <div className="root">
        <NavBar />
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
