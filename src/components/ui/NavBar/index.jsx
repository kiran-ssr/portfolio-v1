import React, { useState } from "react";
import "./navbar.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineAppstore,
} from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { CgCloseR } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { GrContact, GrAchievement } from "react-icons/gr";

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
                <AiOutlineHome fontSize={"20px"} />
                Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav_link">
                <AiOutlineUser fontSize={"20px"} />
                About
              </a>
            </li>

            <li className="nav_item">
              <a href="#qualification" className="nav_link">
                <GrAchievement fontSize={"20px"} />
                Qualification
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                <FiAward fontSize={"20px"} />
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#projects" className="nav_link">
                <FaCode fontSize={"20px"} />
                Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                <GrContact fontSize={"20px"} />
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
          {toggle ? <CgCloseR /> : <AiOutlineAppstore />}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
