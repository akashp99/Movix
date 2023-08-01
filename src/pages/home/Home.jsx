import React from "react";
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";

HeroBanner;

export const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
