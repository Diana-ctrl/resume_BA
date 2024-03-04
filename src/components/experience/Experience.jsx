import React from "react";
import "./experience.css";
import { BsShieldCheck } from "react-icons/bs";

const dataFrontend = [
  "Collection and analysis of information",
  "Writing requirements",
  "BPMN, UML",
  "Technical literacy",
  "Confluence, Jira",
  "Figma, Balsamiq",
  "HTTP protocol, XML and JSON formats",
  "SQL",
  "Postman, Swagger",
  "Scrum",
  "Agile Project Management",
];
const dataAnother = [
  "Communication",
  "Analytical thinking",
  "Problem solving",
  "Time management",
  "Adaptability",
  "Leadership",
  "Presentation skills",
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Haves</h5>
      <h1>My Experience</h1>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Hard Skills</h3>
          <div className="experience_content">
            {dataFrontend.map((el) => (
              <article className="experience_details">
                <BsShieldCheck
                  size={"1.5rem"}
                  className="experience_details-icon"
                />
                <h4>{el}</h4>
              </article>
            ))}
          </div>
        </div>

        <div className="experience_another">
          <h3>Soft skills</h3>
          <div className="experience_content">
            {dataAnother.map((el) => (
              <article className="experience_details">
                <BsShieldCheck
                  size={"1.5rem"}
                  className="experience_details-icon"
                />
                <h4>{el}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
