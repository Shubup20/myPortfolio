import React from "react";
import "./Skills.css";

// Import icons from react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";

// Import your SVG illustration
import deskSvg from "../assets/developer-desk-small.svg";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "React.js", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="#000" /> },
  { name: "Core Java", icon: <FaJava color="#f89820" /> },
  { name: "MySQL", icon: <SiMysql color="#00758F" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-wrapper">
        {/* Left column: text + skill cards */}
        <div className="skills-left">
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: SVG */}
        <div className="skills-right">
          <img src={deskSvg} alt="Developer at desk" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
