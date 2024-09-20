import React, { useRef } from 'react';
import '../styles/WorkCard.css';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon
import ProjectCardData from './WorkCardData';

const WorkCard = () => {
  const projectContainerRef = useRef(null);

  const scrollRight = () => {
    if (projectContainerRef.current) {
      projectContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container' ref={projectContainerRef}>
        {ProjectCardData.map((project, index) => (
          <div className='project-card' key={index}>
            <img src={project.imgsrc} alt={`project-${index + 1}`} />
            <h2 className='project-title'>{project.title}</h2>
            <div className='project-details'>
              <p>{project.text}</p>
              <div className='project-buttons'>
                <NavLink to={project.view} className="btn">View</NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Right pointing arrow, placed outside the card section */}
      <div className="arrow-right" onClick={scrollRight}>
        <FaArrowRight size={40} />
      </div>
    </div>
  );
};

export default WorkCard;
