import React from "react";
import TypingText from "./TypingText";
import "./Experiences.css";
import Debarshi from "./Pictures/debarshi.jpg";
import Angular from "./LogoPictures/angular.png";
import AWS from "./LogoPictures/aws.png";
import C from "./LogoPictures/c.png";
import C_plus from "./LogoPictures/c++.png";
import css from "./LogoPictures/css.png";
import git from "./LogoPictures/git.png";
import html from "./LogoPictures/html.png";
import java from "./LogoPictures/java.png";
import javascript from "./LogoPictures/javascript.png";
import mongodb from "./LogoPictures/mongodb.png";
import postgres from "./LogoPictures/postgresql.png";
import python from "./LogoPictures/python.png";
import pytorch from "./LogoPictures/pytorch.png";
import react from "./LogoPictures/react.png";
import sql from "./LogoPictures/sql.png";
import tensorflow from "./LogoPictures/tensorflow.png";
import typescript from "./LogoPictures/typescript.png";
import umd from "./Pictures/umd.png";
import { useState } from "react";
import TaskButton from "./TaskButton";
import AVB from "./Pictures/AVB.png";
import bitcamp from "./Pictures/Bitcamp.png";
import { useColorMode } from "@chakra-ui/react";
import professional from "./Pictures/professional.jpg";

const Experiences = () => {
  const [experience1, setExperience1] = useState(false);
  const [experience2, setExperience2] = useState(false);
  const [experience3, setExperience3] = useState(false);
  const [project, setProject] = useState(0);

  const projectToggle = (projectNumber: number) => {
    if (project == projectNumber) {
      setProject(0);
    } else {
      setProject(projectNumber);
    }
  };
  let projectDescription;
  if (project == 0) {
    projectDescription = <></>;
  } else if (project == 1) {
    projectDescription = (
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "40px" }}
      >
        <img src={umd} alt="UMD" className="experience-image-style" />
        <div id="text-container" className="textBox" style={{ width: "500px" }}>
          <ul>
            <li style={{ marginBottom: "20px" }}>
              Spearheaded a hackathon-winning project using{" "}
              <strong>Folium</strong> for geospatial visualization,{" "}
              <strong>BeautifulSoup</strong> and <strong>Geopandas</strong> to
              scrape and visualize criminal data. Transformed{" "}
              <strong>100+</strong> entries through automated{" "}
              <strong>Google Maps API</strong>
              calls
            </li>
            <li>
              Developed a <strong>React.js</strong> based front-end, utilizing
              <strong>Figma</strong> and <strong>HTML/CSS</strong> for
              web-design, and hosted through AWS S3 for cost-effiency
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (project == 2) {
    projectDescription = (
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "40px" }}
      >
        <img src={professional} alt="UMD" className="headshot-image-style" />
        <div id="text-container" className="textBox" style={{ width: "500px" }}>
          <ul>
            <li style={{ marginBottom: "20px" }}>
              The Project that you are viewing right now! This project utilizes{" "}
              <strong>TypeScript</strong>, <strong>React</strong>, and HTML/CSS.
            </li>
            <li>
              Utilized <strong>Figma</strong> for a mockup design, and a
              backend-api using <strong>flask</strong> for a postgreSQL querying
              system
            </li>
          </ul>
        </div>
      </div>
    );
  }

  const experienceToggle = (experienceNumber: number) => {
    if (experienceNumber == 1) {
      setExperience1(!experience1);
    } else if (experienceNumber == 2) {
      setExperience2(!experience2);
    } else if (experienceNumber == 3) {
      setExperience3(!experience3);
    }
  };
  const { colorMode } = useColorMode();
  let background;
  if (colorMode == "dark") {
    background = "dimgray";
  } else {
    background = "aliceblue";
  }
  let experience1Element, experience2Element, experience3Element;
  if (experience1) {
    experience1Element = (
      <div className="experience-list">
        <ul>
          <li>
            Optimized data collection rate by <strong>20%</strong> utilizing
            Optical Character Recognition techniques like{" "}
            <strong>TesseractOCR</strong>, along with traditional web-scraping
            libaries like <strong>BeautifulSoup & Selenium</strong>
          </li>
          <li style={{ marginTop: "20px" }}>
            Visualized Machine Learning Models using <strong>TensorFlow</strong>{" "}
            and <strong>PyTorch</strong>, utilizing different explanatory
            variables with different epoch levels to find best-fit relationships
          </li>
        </ul>
      </div>
    );
  } else {
    experience1Element = <></>;
  }
  if (experience2) {
    experience2Element = (
      <div className="experience-list">
        <ul>
          <li>
            Spearheaded the development of a dynamic apartment database using{" "}
            <strong>React.js</strong> and <strong>Angular</strong>, while
            utilizing <strong>AWS solutions</strong> to ensure efficient and
            cost-effective operations.
          </li>
          <li style={{ marginTop: "20px" }}>
            Increased efficiency of application operations utilizing{" "}
            <strong>lambda computing</strong> through AWS, and developed a{" "}
            <strong>flask</strong> backend while utilizing{" "}
            <strong>psycopg2</strong> for SQL queries. Leveraged{" "}
            <strong>REST APIs</strong> to enable seamless data retrieval of
            real-time database changes.
          </li>
        </ul>
      </div>
    );
  } else {
    experience2Element = <></>;
  }
  if (experience3) {
    experience3Element = (
      <div className="experience-list">
        <ul>
          <li>
            Organized a 36-hour hackathon with{" "}
            <strong>1000+ participants</strong>, accumulated
            <strong>10+ vendors</strong>, coordinating with 50+ members over 6
            months
          </li>
          <li>
            Scheduled shifts for <strong>30+ volunteers</strong>, setting up
            over 10 workshops, and designed Xfinity Center to accommodate{" "}
            <strong>1000+ members</strong>
          </li>
        </ul>
      </div>
    );
  } else {
    experience3Element = <></>;
  }

  return (
    <div>
      <header
        style={{
          display: "flex",
          textAlign: "center",
          fontSize: "60px",
          width: "800px",
          marginTop: "50px",
          marginLeft: "350px",
        }}
      >
        <TypingText text="Technologies!" delay={50}></TypingText>
      </header>
      <div
        className="container"
        style={{
          marginTop: "50px",
          display: "flex",
          marginLeft: "60px",
          backgroundColor: background,
          width: "960px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <img src={python} alt="Python" className="image-style" />
        <img src={java} alt="Java" className="image-style"></img>
        <img src={javascript} alt="JavaScript" className="image-style"></img>
        <img src={typescript} alt="TypeScript" className="image-style"></img>
        <img src={html} alt="HTML" className="image-style"></img>
        <img src={css} alt="CSS" className="image-style"></img>
        <img src={react} alt="REACT" className="image-style"></img>
        <img src={Angular} alt="Angular" className="image-style"></img>
      </div>
      <div
        className="container"
        style={{
          marginTop: "-15px",
          display: "flex",
          marginLeft: "60px",
          backgroundColor: background,
          width: "960px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <img src={AWS} alt="Python" className="image-style" />
        <img src={C} alt="Java" className="image-style"></img>
        <img src={C_plus} alt="JavaScript" className="image-style"></img>
        <img src={git} alt="TypeScript" className="image-style"></img>
        <img src={tensorflow} alt="HTML" className="image-style"></img>
        <img src={pytorch} alt="CSS" className="image-style"></img>
        <img src={postgres} alt="REACT" className="image-style"></img>
        <img src={sql} alt="Angular" className="image-style"></img>
      </div>
      <div
        className="container"
        style={{
          marginTop: "-15px",
          display: "flex",
          marginLeft: "60px",
          marginBottom: "50px",
          backgroundColor: background,
          width: "960px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <img src={mongodb} alt="Python" className="mongo-image-style" />
      </div>
      <header
        style={{
          display: "flex",
          textAlign: "center",
          fontSize: "60px",
          width: "800px",
          marginTop: "50px",
          marginLeft: "300px",
          marginBottom: "50px",
        }}
      >
        <TypingText text="Work Experience!" delay={50}></TypingText>
      </header>

      <div
        className="container"
        style={{
          backgroundColor: background,
          width: "960px",
          padding: "20px",
          borderRadius: "10px",
          marginLeft: "60px",
          marginBottom: "200px",
        }}
      >
        <div
          className="container"
          style={{ marginTop: "50px", marginBottom: "40px" }}
        >
          <img src={umd} alt="UMD" className="experience-image-style" />
          <div
            id="text-container"
            className="textBox"
            style={{ width: "500px" }}
          >
            <TaskButton
              name="Machine Learning Researcher"
              onClick={() => {
                experienceToggle(1);
              }}
            ></TaskButton>
            {experience1Element}
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "50px", marginBottom: "40px" }}
        >
          <img src={AVB} alt="AVB" className="experience-image-style" />
          <div
            id="text-container"
            className="textBox"
            style={{ width: "500px" }}
          >
            <TaskButton
              name="Software Development Intern"
              onClick={() => {
                experienceToggle(2);
                console.log(experience2);
              }}
            />
            {experience2Element}
          </div>
        </div>
        <div
          className="container"
          style={{ marginTop: "50px", marginBottom: "40px" }}
        >
          <img src={bitcamp} alt="Bitcamp" className="experience-image-style" />
          <div
            id="text-container"
            className="textBox"
            style={{ width: "500px" }}
          >
            <TaskButton
              name="Logistics Organizer"
              onClick={() => {
                experienceToggle(3);
              }}
            />
            {experience3Element}
          </div>
        </div>
      </div>
      <header
        style={{
          display: "flex",
          textAlign: "center",
          fontSize: "60px",
          width: "800px",
          marginTop: "50px",
          marginLeft: "420px",
          marginBottom: "50px",
        }}
      >
        <TypingText text="Projects" delay={50}></TypingText>
      </header>
      <div
        className="container"
        style={{
          backgroundColor: background,
          width: "960px",
          padding: "20px",
          borderRadius: "10px",
          marginLeft: "60px",
          marginBottom: "1000px",
        }}
      >
        {" "}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "165px",
          }}
        >
          <TaskButton
            name="IncidentExposed"
            onClick={() => {
              projectToggle(1);
            }}
            size="25px"
          ></TaskButton>
          <TaskButton
            name="Portfolio Project"
            onClick={() => {
              projectToggle(2);
            }}
            size="25px"
          ></TaskButton>
        </div>
        <div>{projectDescription}</div>
      </div>
    </div>
  );
};

export default Experiences;
