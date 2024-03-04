import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.png";
import Img3 from "../../assets/portfolio3.png";
import Img4 from "../../assets/portfolio4.png";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.png";
import Img7 from "../../assets/portfolio7.jpg";
import Img8 from "../../assets/portfolio8.jpg";
import Img9 from "../../assets/portfolio9.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Zoom,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";

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
      <h5>My recent work</h5>
      <h1>Portfolio</h1>
      <h1>1. Catalog of exercises for the fitbox course</h1>
      <h1>2. Application for storage (layout and functional requirements)</h1>
      <h1>3. Drawing up Figma and Balsamiq layouts</h1>
      <h1>3. Interview questionnaire</h1>
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        spaceBetween={100}
        slidesPerView={1}
        style={{ marginLeft: 10, marginRight: 10 }}
      >
        {data.map(({ title, img }, index) => (
          <SwiperSlide style={{ maxWidth: 400 }}>
            <img src={Img1} alt={`Img`} />
            <h3>{index}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;
