import React, { useState } from "react";
import debarshi from "./Pictures/debarshi.jpg";
import varsity from "./Pictures/Varsity.jpg";
import "./About.css"; // Import the CSS file
import TypingText from "./TypingText";
import { useEffect } from "react";
import { wrap } from "framer-motion";

const About = () => {
  const [textHeight, setTextHeight] = useState(0);

  const handleTextHeight = () => {
    const textContainer = document.getElementById("text-container");
    if (textContainer) {
      setTextHeight(textContainer.clientHeight);
    }
  };

  useEffect(() => {
    handleTextHeight();
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "40px" }}
      >
        <img src={debarshi} alt="Debarshi" className="debarshiImage" />
        <div id="text-container" className="textBox" style={{ width: "500px" }}>
          <TypingText
            text="Hey there! My name is Debarshi (or Rishi/Debs, depending on who you are), 
          and I'm a sophomore/junior at the University of Maryland, studying Computer Science and Machine Learning. "
            delay={50}
          ></TypingText>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "40px" }}>
        <div id="text-container" className="textBox" style={{ width: "500px" }}>
          <TypingText
            text="I have played soccer for most of my life! Whether it be 
          club or for my highschool, I have always enjoyed team sports. Yes, thats me with blonde hair!"
            delay={50}
          ></TypingText>
        </div>
        <img src={varsity} alt="debarshi" className="varsityImage"></img>
      </div>
    </div>
  );
};

export default About;
