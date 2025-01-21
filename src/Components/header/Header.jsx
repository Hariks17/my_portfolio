import React, { useState } from "react";
import "./header.css";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <section className="hero-header">
      <Navbar />
      <div className="hero-container">
        <p className="hello_world">{`<>Hello World!</>`}</p>
        <p className="my_name">I'm Hariharan Sankar</p>
        <button className="download_cv">Download CV!</button>

        <div className="social_media_container">
          <div className="group_1">
            <p className="group_header">Lets Collaborate</p>
            <ul className="socia-media-list">
              <li className="social-media-list-element">
                <FaLinkedin />
              </li>
              <li className="social-media-list-element">
                <SiGmail />
              </li>
            </ul>
          </div>
          <div className="group_2">
            <p className="group_header">Send me Reels on</p>

            <ul className="socia-media-list">
              <li className="social-media-list-element">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
