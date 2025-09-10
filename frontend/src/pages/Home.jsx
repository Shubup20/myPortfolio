import React from "react";
import { FaEye, FaDatabase } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { BiNetworkChart } from "react-icons/bi";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Shubham Chauhan</h1>
        <h2>
          I am <span className="typing">Full Stack Developer</span>
        </h2>

        {/* Skills Section */}
        <div className="skills">
          <div className="skill-item">
            <FaEye className="skill-icon" />
            <p>UI/UX</p>
          </div>
          <div className="skill-item">
            <FiMonitor className="skill-icon" />
            <p>Web Development</p>
          </div>
          <div className="skill-item">
            <FaDatabase className="skill-icon" />
            <p>Database Management</p>
          </div>
          <div className="skill-item">
            <BiNetworkChart className="skill-icon" />
            <p>API Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

