import React, { useState } from "react";
import "./Navbar.css";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="hero-header">
      <nav className="nav">
        <div className="logo">Hari</div>
        <div className="menu__bar">
          <ul className="menu__list">
            <li className="menu__list__item">
              <a href="#" className="menu__list__link">
                About Me
              </a>
            </li>
            <li className="menu__list__item">
              <a href="#" className="menu__list__link">
                Tech Stacks
              </a>
            </li>
            <li className="menu__list__item">
              <a href="#" className="menu__list__link">
                My Projects
              </a>
            </li>
          </ul>
        </div>
        <div className="contact_me">
          <button className="contact_me_btn">Contact Me</button>
        </div>
        <div
          className="hamburger-menu"
          onClick={() => setToggle((val) => !val)}
        >
          {toggle ? <RiCloseLargeLine /> : <GiHamburgerMenu />}
        </div>
        <div className={toggle ? "mobile_menu active" : "mobile_menu"}>
          <ul className="menu__list_mobile">
            <li className="menu__list__item_mobile">
              <a href="#" className="menu__list__link">
                About Me
              </a>
            </li>
            <li className="menu__list__item">
              <a href="#" className="menu__list__link">
                Tech Stacks
              </a>
            </li>
            <li className="menu__list__item">
              <a href="#" className="menu__list__link">
                My Projects
              </a>
            </li>
            <li className="menu__list__item">
              <a href="#" className="menu__list__link">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hero-container">
        <p className="hello_world">{`<>Hello World!</>`}</p>
        <p className="my_name">Im Hariharan Sankar</p>
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

export default Navbar;
