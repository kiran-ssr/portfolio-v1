import React from "react";
import "./home.css";
import Jumbotron from "./Jumbotron";
import Scroll from "./Scroll";
import Social from "./Social";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img"></div>
          <Jumbotron />
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;
