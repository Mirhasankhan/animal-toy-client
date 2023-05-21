import React from 'react';

const Gallery = ({image}) => {
   
    return (
        <div data-aos="zoom-in">
           <img className='w-full h-80 rounded-xl' src={image.animalToyImage} alt="" />           
        </div>
        
    );
};

export default Gallery;