import React from 'react';
import profile from '../../../assets/banner1.jpg'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'


const Banner = () => {
    return (
        <div className='bg-gray-400 h-96 pt-4 overflow-hidden flex justify-center items-center'>
        <div>
            <img className='h-80 rounded-t-xl mr-5' src={profile} alt="" />
        </div>
        <div>
            <h1 className='text-5xl font-bold text-white'>Buy Toys for<br />Beautiful Kids</h1>
            <p className='my-3 text-xl text-black'>We believe in highest quality </p>
            <button className="btn btn-outline btn-warning mb-3">Contact Us</button>
        </div>
    </div>
    );
};

export default Banner;