import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/FooterLogo.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-icons">
            <a
              href="http://linkedin.com/in/olaide-kolade-238247aa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/olaiide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github github" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/olaiide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
