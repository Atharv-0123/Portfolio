import React from 'react';
import '../styles/WorkCard.css';
import { NavLink } from 'react-router-dom';
import ProjectCardData from './WorkCardData';

const WorkCard = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
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
    </div>
  );
};

export default WorkCard;
