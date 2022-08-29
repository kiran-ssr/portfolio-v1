import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiAward } from "react-icons/fi";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Kiran
        </a>

        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active-link">
                Home <AiOutlineHome />
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <AiOutlineUser />
                Skills
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <FiAward />
                About
              </a>
            </li>

            <li className="nav_item">
              <a href="#Qualification" className="nav_link">
                <FiAward />
                Qualification
              </a>
            </li>
            <li className="nav_item">
              <a href="#Projects" className="nav_link">
                <FiAward />
                Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#Contact" className="nav_link">
                <FiAward />
                Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav_close"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
