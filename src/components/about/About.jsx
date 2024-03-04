import React from "react";
import "./about.css";
import Me from "../../assets/me2.png";
import { MdComputer } from "react-icons/md";
import { ImHappy } from "react-icons/im";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h1>About me</h1>
      <div className="container about_container">
        <div className="about_me">
          <img src={Me} alt="me" className="about_me-img" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdComputer size={"2rem"} className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years of work on commercial projects</small>
            </article>

            <article className="about_card">
              <ImHappy size={"2rem"} className="about_icon" />
              <h5>Users</h5>
              <small>10000+ satisfied app users</small>
            </article>

            <article className="about_card">
              <AiOutlineFundProjectionScreen
                size={"2rem"}
                className="about_icon"
              />
              <h5>Projects</h5>
              <small>
                10+ project was released in Google Play and App Store
              </small>
            </article>
          </div>
          <p>
            I make beautiful and convenient interfaces for your applications and
            websites. Which will definitely lead to an increase in your income
            and an increase in the number of users of your project.
          </p>
          <a href="#contact" className="btn btn-primary">
            Go to contacts
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
