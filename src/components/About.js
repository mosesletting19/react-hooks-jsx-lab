import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="#about">
      <h2>About Me</h2>
      <p>I am Jovial  and true hearted, I hope no one takes an advantage</p>
      <img
        src={image}
        alt="I made this"
      />
    </div>
  );
}

export default About;
