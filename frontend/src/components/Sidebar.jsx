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
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

import "./Sidebar.css"; // Import the CSS file for styling
import profileImg from "../assets/shubAbout.jpg"; // put your image in public folder
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Toggle Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Profile Section */}
        <div className="profile">
          <img src={profileImg} alt="profile" />
          <h2>Shubham Chauhan</h2>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="http://github.com/Shubup20" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubup20"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/shub1108?t=uPzrgv-lFjxD_LWJ-7d-iA&s=09"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.facebook.com/shubham.chauhan.94801116"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink to="/" end>
            <FaHome size={24} /> Home
          </NavLink>
          <NavLink to="/about">
            <FaUser size={24} /> About
          </NavLink>
          <NavLink to="/skills">
            <GiSkills size={24} /> Skills
          </NavLink>
          <NavLink to="/resume">
            <FaFileAlt size={24} /> Resume
          </NavLink>
          <NavLink to="/portfolio">
            <FaImage size={24} /> Portfolio
          </NavLink>
          <NavLink to="/services">
            <FaBars size={24} /> Services
          </NavLink>
          <NavLink to="/contact">
            <FaEnvelope size={24} /> Contact
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
