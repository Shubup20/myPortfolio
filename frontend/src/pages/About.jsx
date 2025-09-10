import React from "react";
import "./About.css";
import profileImg from "../assets/shubAbout.jpg"; // <- replace with your image path

const About = () => {
  return (
    <section className="about">
      <h2 className="about-title">About</h2>
      <p className="about-intro">
        From starting with a Diploma in Computer Science to completing my B.Tech
        in 2024, I have consistently grown my expertise in web development. I am
        a passionate Full-Stack Developer with a strong foundation in both
        frontend and backend technologies. Skilled in React, Node.js, Express,
        and MongoDB, I specialize in building responsive, dynamic, and
        performance-driven applications. I enjoy creating user-friendly
        interfaces and solving complex problems with clean, efficient, and
        scalable code.
      </p>

      <div className="about-container">
        {/* Left Image */}
        <div className="about-img">
          <img src={profileImg} alt="Profile" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <h3>Full-Stack Developer | Building Scalable Web Applications</h3>
          <p className="about-subtext">
            Passionate about creating responsive user interfaces and robust
            backend systems with modern technologies.
          </p>

          <div className="about-info">
            <ul>
              <li>
                <strong>Birthday:</strong> 08 Nov 1997
              </li>
              <li>
                <strong>Website:</strong> www.ShubhamChauhan.com
              </li>
              <li>
                <strong>Phone:</strong> +91 6396337325
              </li>
              <li>
                <strong>City:</strong> Najibabd, Uttar Pradesh, India
              </li>
            </ul>
            <ul>
              <li>
                <strong>Age:</strong> 27
              </li>
              <li>
                <strong>Degree:</strong> B.Tech in Computer Science
              </li>
              <li>
                <strong>Email:</strong> shubhamchauhanpoly@gmail.com
              </li>
              <li>
                <strong>Job & Freelance:</strong> Available
              </li>
            </ul>
          </div>

          <p className="about-footer">
            My goal is to build applications that combine performance,
            scalability, and great user experience, while continuously learning
            and improving as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
