import React, { useState } from "react";
import "./Portfolio.css";
import { FaPlus, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: "app1",
      title: "App Project 1",
      category: "App",
      img: "/images/app1.jpg",
      detailsLink: "/portfolio-details/app1",
      previewLink: "/images/app1.jpg", // could be lightbox later
    },
    {
      id: "web1",
      title: "Web Project 1",
      category: "Web",
      img: "/images/web1.jpg",
      detailsLink: "/portfolio-details/web1",
      previewLink: "/images/web1.jpg",
    },
    {
      id: "app2",
      title: "App Project 2",
      category: "App",
      img: "/images/app2.jpg",
      detailsLink: "/portfolio-details/app2",
      previewLink: "/images/app2.jpg",
    },
    {
      id: "web2",
      title: "Web Project 2",
      category: "Web",
      img: "/images/web2.jpg",
      detailsLink: "/portfolio-details/web2",
      previewLink: "/images/web2.jpg",
    },
    {
      id: "app3",
      title: "App Project 3",
      category: "App",
      img: "/images/app3.jpg",
      detailsLink: "/portfolio-details/app3",
      previewLink: "/images/app3.jpg",
    },
    {
      id: "web3",
      title: "Web Project 3",
      category: "Web",
      img: "/images/web3.jpg",
      detailsLink: "/portfolio-details/web3",
      previewLink: "/images/web3.jpg",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <p className="portfolio-subtext">
        A showcase of my creative and technical work, highlighting applications
        and web solutions I’ve built with passion and precision.
      </p>

      {/* Filter Menu  */}
      <div className="filter-buttons">
        {["All", "Web", "App"].map((cat) => (
          <button
            key={cat} 
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.img} alt={project.title} />
            <div className="portfolio-overlay">
              <span className="category">{project.category}</span>
              <h3>{project.title}</h3>
              <div className="icons">
                {/* Preview icon */}
                <a href={project.previewLink} target="_blank" rel="noreferrer">
                  <FaPlus className="icon" />
                </a>

                {/* Details page link */}
                <Link to={project.detailsLink}>
                  <FaLink className="icon" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
