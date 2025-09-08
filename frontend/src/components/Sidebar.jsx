import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaImage,
  FaBars,
  FaEnvelope,
} from "react-icons/fa";

import "./Sidebar.css"; // Import the CSS file for styling
import profileImg from "/shub.jpg"; // put your image in public folder

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Profile Section */}
      <div className="profile">
        <img src={profileImg} alt="profile" />
        <h2>Shubham Chauhan</h2>
      </div>

      {/* Social Icons */}
      <div className="social-icons">
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="http://github.com/Shubup20" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/shubup20" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Navigation */}
      <nav className="nav-links">
        <NavLink to="/" end>
          <FaHome size={24}/> Home
        </NavLink>
        <NavLink to="/about">
          <FaUser size={24}/> About
        </NavLink>
        <NavLink to="/resume">
          <FaFileAlt size={24}/> Resume
        </NavLink>
        <NavLink to="/portfolio">
          <FaImage size={24}/> Portfolio
        </NavLink>
        <NavLink to="/services">
          <FaBars size={24}/> Services
        </NavLink>
        <NavLink to="/dropdown">
          <FaFileAlt size={24}/> Dropdown
        </NavLink>
        <NavLink to="/contact">
          <FaEnvelope size={24}/> Contact
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
