import React from "react";
import "./Aboutme.css";
const AboutMe = () => {
  return (
    <div className="about_me_grid">
      <h1>There is something about me which u should know</h1>
      <div className="flex-container">
        <div className="flex_1">
          <img src="/bg.jpg" alt="" className="img" />
        </div>
        <div className="flex_2"></div>
      </div>
    </div>
  );
};

export default AboutMe;
