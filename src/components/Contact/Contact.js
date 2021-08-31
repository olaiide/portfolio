import React, { Fragment } from "react";
import Form from "../UI/Form";
import "./Contact.css";
const Contact = () => {
  return (
    <Fragment>
      <div className="container-contact" id="Contact">
        <h3>Contact Me</h3>
        <p>Got a project or an idea? Get in touch.</p>
        <div className="contact">
          <div>
            <Form />
          </div>
          <div className="main-contact">
            <div className="address">
              <span>
                <i class="fa fa-map-marker" aria-hidden="true"></i>Lagos
              </span>
            </div>
            <div className="mail">
              <span>
                <i class="far fa-envelope-open"></i>
                <a href="mailto:horlaide909@gmail.com">horlaide909@gmail.com</a>
              </span>
            </div>
            <div className="telephone">
              <span>
                <i class="fas fa-phone"></i>
                <a href="tel:+234-903-611-7357">+234-903-611-7357</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
