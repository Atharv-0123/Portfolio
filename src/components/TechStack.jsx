import React from 'react'
import images from './TechStackData'

const TechStack = () => {
  return (
    <div className='techstack-container'>
        <div className='icon'>
        {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
        </div>
    </div>
  )
}

export default TechStack