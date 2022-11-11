import React, { useState } from "react";
import "./navbar.css";
import { useMediaQuery } from "react-responsive";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineAppstore,
  AiOutlineCloseCircle,
  AiOutlineMessage,
  AiOutlineCode,
} from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const iconBreakPoint = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Kiran
        </a>

        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item" onClick={() => setToggle(!toggle)}>
              <a href="#home" className="nav_link active-link">
                {iconBreakPoint && <AiOutlineHome fontSize={"18px"} />}
                Home
              </a>
            </li>

            <li className="nav_item">
              <a href="#skills" className="nav_link">
                {iconBreakPoint && <BiCodeAlt fontSize={"18px"} />}
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#projects" className="nav_link">
                {iconBreakPoint && <AiOutlineCode fontSize={"18px"} />}
                Projects
              </a>
            </li>

            <li className="nav_item">
              <a href="#contact" className="nav_link">
                {iconBreakPoint && <AiOutlineMessage fontSize={"18px"} />}
                Contact
              </a>
            </li>
          </ul>

          <AiOutlineCloseCircle
            className="nav-toggle nav_close"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <AiOutlineAppstore
          className="nav_toggle"
          onClick={() => setToggle(!toggle)}
        />
      </nav>
    </header>
  );
};

export default NavBar;
