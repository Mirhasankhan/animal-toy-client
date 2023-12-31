import React from 'react';
import pic from '../../../assets/about-Images.png'
import { FaStarOfDavid } from 'react-icons/fa';

const About = () => {
    return (
        <div className='md:flex gap-5 mx-3 md:mx-12'>
            <div className='w-full'>
                <img className='h-64 md:h-96 w-full rounded-lg' src={pic} alt="" />
            </div>
            <div className='w-full'>
                <h1 className='text-xl font-medium'>Quality & Experience</h1>
                <h1 className='text-2xl md:text-5xl font-medium my-2 md:my-5'>Welcome to ,<span className='text-green-400'>Toy Emporium</span></h1>
                <p className='mb-3 text-justify'>At Pethund, the ambition is that you should always feel welcome both as an advertiser and a visitor. A modern and easy-to-manage page makes it easier for Users to maneuver forward. or then randomised words which don’t look even slightly believable you need to be sure there isn’t anything embarrassing vestibu lum at eros.</p>
                <div className='flex items-center'>
                    <FaStarOfDavid className='text-purple-600 mr-3'></FaStarOfDavid>
                    <h1>Best Cotton</h1>                    
                </div>
                <div className='flex items-center my-1 md:my-3'>
                    <FaStarOfDavid className='text-purple-600 mr-3'></FaStarOfDavid>
                    <h1>Best Makers</h1>                    
                </div>
                <div className='flex items-center'>
                    <FaStarOfDavid className='text-purple-600 mr-3'></FaStarOfDavid>
                    <h1>Quick Delivery</h1>                    
                </div>
                <button className='submit-button mt-5 px-6'>Discover More</button>
            </div>
        </div>
    );
};

export default About;