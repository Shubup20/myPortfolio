import React from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode size={22} />,
    title: "Web Development",
    description:
      "Building modern, responsive, and user-friendly websites using the latest web technologies."
  },
  {
    id: 2,
    icon: <FaReact size={22} />,
    title: "Frontend Engineering",
    description:
      "Crafting interactive UIs with React, React Router, and reusable components."
  },
  {
    id: 3,
    icon: <FaServer size={22}/>,
    title: "Backend Development",
    description:
      "Developing scalable APIs and backend systems with Node.js and Express."
  },
  {
    id: 4,
    icon: <FaDatabase size={22}/>,
    title: "Database Management",
    description:
      "Designing and maintaining databases with MySQL and MongoDB for optimized performance."
  },
  {
    id: 5,
    icon: <FaMobileAlt size={22}/>,
    title: "Mobile-Friendly Apps",
    description:
      "Creating cross-platform mobile-friendly applications with React Native."
  },
  {
    id: 6,
    icon: <FaCloud size={22}/>,
    title: "Cloud & Deployment",
    description:
      "Deploying applications to cloud platforms ensuring reliability and scalability."
  }
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="section-title">Services</h2>
      <p className="section-subtext">
        I offer end-to-end web solutions including frontend, backend, and database development to build reliable and modern applications.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-box">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
