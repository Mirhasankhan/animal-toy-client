import React from 'react';
import Lottie from "lottie-react";

const Slider = ({ image, toy }) => {
    return (
        <div style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",
            height: '600px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <div className='px-24'>
                <h1 className='text-3xl text-white font-semibold'>We Are The Best Seller Around</h1>
                <h1 className='text-5xl text-blue-800 font-semibold my-3'>Animal Toys Store For Babies</h1>
                <button className='btn btn-secondary'>Shop Now</button>
            </div>
            <div className='h-96 cursor-pointer'>
                <Lottie className='w-full h-full' animationData={toy} loop={true} />
            </div>
        </div>
    );
};

export default Slider;