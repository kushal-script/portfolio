import React from 'react';
import Slider from 'react-slick';
import { FaGithub, FaPlay } from 'react-icons/fa';
import './cards.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = ({ title, description, images, tech, demoLink, codeLink }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="project-card">
      <div className="project-image-carousel-wrapper">
        <Slider {...settings} className="project-image-carousel">
          {images.map((img, idx) => (
            <div key={idx}>
              <img src={img} alt={`${title} ${idx}`} className="project-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-desc">{description}</p>

        <div className="tech-stack">
          {tech.map((item, index) => (
            <span key={index} className="tech-tag">{item}</span>
          ))}
        </div>

        <div className="project-buttons">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn">
              <FaPlay className="btn-icon" />
              Live Demo
            </a>
          )}
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <FaGithub className="btn-icon" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;