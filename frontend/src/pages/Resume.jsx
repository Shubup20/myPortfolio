import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-title">Resume</h2>
      <p className="resume-intro">
        Passionate and motivated Full-Stack Developer with a strong foundation in
        frontend and backend technologies. Fresher with hands-on project
        experience, eager to contribute to real-world applications.
      </p>

      <div className="resume-grid">
        {/* Left Column */}
        <div>
          {/* Summary */}
          <h3 className="resume-subtitle">Summary</h3>
          <div className="resume-item">
            <h4>Shubham Chauhan</h4>
            <p>
              Enthusiastic Full-Stack Developer fresher with practical knowledge
              of React, Node.js, Express, and MongoDB. Passionate about creating
              user-friendly and scalable applications.
            </p>
            <ul>
              <li>Najibabad, Uttar Pradesh, India</li>
              <li>+91 6396337325</li>
              <li>shubhamchauhanpoly@gmail.com</li>
            </ul>
          </div>

          {/* Education */}
          <h3 className="resume-subtitle">Education</h3>
          <div className="resume-item">
            <h4>B.Tech in Computer Science</h4>
            <h5>2021 - 2024</h5>
            <p><em>Panchwati Institute of Engineering & Technology, Meerut (AKTU)</em></p>
            <p>CGPA: 7.05</p>
          </div>

          <div className="resume-item">
            <h4>Diploma in Computer Science</h4>
            <h5>2016 - 2019</h5>
            <p><em>Government Polytechnic Bijnor (UPBTE)</em></p>
            <p>Percentage: 68.7%</p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Certifications */}
          <h3 className="resume-subtitle">Certifications</h3>
          <div className="resume-item">
            <h4>Full-Stack Web Development
            </h4>
            <h5>2023</h5>
            <p><em>Online Course (Udemy)</em></p>
          </div>

          <div className="resume-item">
            <h4>Java Programming Essentials</h4>
            <h5>2022</h5>
            <p><em>Online Course (Coursera)</em></p>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="resume-download">
        <a
          href="https://drive.google.com/file/d/19S2NFQiE5tUTbDcbjOBpdwReZG3XdZFA/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-download"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
