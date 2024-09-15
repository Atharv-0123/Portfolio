import React from 'react';
import images from './TechStackData';
import '../styles/TechStack.css';

const TechStack = () => {
  return (
    <div className='techstack-section'>
      <h1 className='techstack-heading'>Tech Stack</h1>
      <div className='techstack-container'>
        {images.map((image, index) => (
          <img 
            key={index} 
            src={image} 
            alt={`Tech Stack Icon ${index + 1}`} 
            className='techstack-icon'
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
