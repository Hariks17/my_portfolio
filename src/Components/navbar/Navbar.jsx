import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
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
      <div className="hamburger-menu" onClick={() => setToggle((val) => !val)}>
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
  );
};

export default Navbar;
