import React, { useState, Fragment } from "react";
import Logo from "../../assets/Logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Fragment>
      <nav className={colorChange ? "navbar navbar-change" : "navbar"}>
        <div className="nav-container">
          <div className="nav-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <span className="list">01.</span>
              <a className="nav-links" href="#Home" onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <span className="list">02.</span>
              <a className="nav-links" href="#About" onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className="nav-item">
              <span className="list">03.</span>
              <a
                className="nav-links"
                href="#Projects"
                onClick={closeMobileMenu}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <span className="list">04.</span>
              <a
                className="nav-links"
                href="#Contact"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            className={click ? "menu_btn menu_btn_line" : "menu_btn menu_btn_open"}
            onClick={handleClick}
          >
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
            {/* <div className="menu_btn_line"></div> */}
          </div>
          {/* <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        
          </div> */}
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
