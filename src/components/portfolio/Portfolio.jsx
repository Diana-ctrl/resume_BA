import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.png";
import Img2 from "../../assets/portfolio2.png";
import Img3 from "../../assets/portfolio3.png";
import Img4 from "../../assets/portfolio4.png";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.png";
import Img7 from "../../assets/portfolio7.jpg";
import Img8 from "../../assets/portfolio8.jpg";
import Img9 from "../../assets/portfolio9.jpg";

const data = [
  {
    title:
      "I wrote this application ALONE. All updates and all logic were written by me (React Native)",
    img: Img7,
  },
  {
    title: "Participated in the development of this game (React Native)",
    img: Img8,
  },
  {
    title: "Fixing bugs and adding a theme (React Native)",
    img: Img9,
  },
  {
    title: "Site laid out on the Material-UI (React)",
    img: Img1,
    github: "https://github.com/Diana-ctrl/Candy_App",
    demo: "https://diana-ctrl.github.io/Candy_App/",
  },
  {
    title: "Website with logic and layout using grids and TypeScript (React)",
    img: Img2,
    github: "https://github.com/Diana-ctrl/resume",
    demo: "https://diana-ctrl.github.io/resume/",
  },
  {
    title: "To do list (React)",
    img: Img3,
    github: "https://github.com/Diana-ctrl/ToDoList",
    demo: "https://diana-ctrl.github.io/ToDoList/",
  },
  {
    title: "Сurrency exchange (React)",
    img: Img4,
    github: "https://github.com/Diana-ctrl/CurrencyExchangeApp",
    demo: "https://diana-ctrl.github.io/CurrencyExchangeApp/",
  },
  {
    title: "Mobile application (React Native)",
    img: Img6,
    github: "https://github.com/Diana-ctrl/ReactNativeApp",
  },
  {
    title: "Application with useEffect hook (React)",
    img: Img5,
    github: "https://github.com/Diana-ctrl/appWithUseEffect",
    demo: "https://diana-ctrl.github.io/appWithUseEffect/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My resent work</h5>
      <h1>Portfolio</h1>
      <div className="container portfolio_container">
        {data.map(({ title, demo, github, img }, index) => (
          <article className="portfolio_item" key={index}>
            <div className="portfolio_item-img">
              <img src={img} alt="Img1" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              {github && (
                <a href={github} className="btn" target={"__blank"}>
                  Github
                </a>
              )}
              {demo && (
                <a href={demo} className="btn btn-primary" target={"__blank"}>
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
