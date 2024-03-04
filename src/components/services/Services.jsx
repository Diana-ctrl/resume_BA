import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";
const dataRequirementsDevelopment = [
  "Requirements elicitation and information gathering",
  "Analysis",
  "Documenting",
  "Examination",
  "Approval",
];

const dataRequirementsManagement = [
  "Defining versions",
  "Set goals",
  "Testing",
  "User training",
  "User support",
  "Impact assessment",
  "Updates and changes",
];

const toolsData = [
  "Visio",
  "Confluence",
  "Jira",
  "Firebase",
  "SQL",
  "Adjust",
  "Figma",
  "Balsamiq",
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h1>Services</h1>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Requirements development</h3>
          </div>
          <ul className="service_list">
            {dataRequirementsDevelopment.map((el) => (
              <li>
                <BsCheckLg className="service_list-icon" />
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Requirements management and implementation support</h3>
          </div>
          <ul className="service_list">
            {dataRequirementsManagement.map((el) => (
              <li>
                <BsCheckLg className="service_list-icon" />
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Tools used for work</h3>
          </div>
          <ul className="service_list">
            {toolsData.map((el) => (
              <li>
                <BsCheckLg className="service_list-icon" />
                <p>{el}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
