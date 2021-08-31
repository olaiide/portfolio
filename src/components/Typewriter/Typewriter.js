import Typewriter from "typewriter-effect";
import React, { Fragment } from "react";
import "./Typewriter.css";

const TypeWriter = () => {
  return (
    <Fragment>
      <div className="typewriter">
        <Typewriter
          options={{
            strings: ["A Front-End Developer", "How Can I Be of Service?"],
            autoStart: true,
            delay: 130,
            deleteSpeed: 40,
            loop: true,
          }}
        />
      </div>
    </Fragment>
  );
};

export default TypeWriter;
