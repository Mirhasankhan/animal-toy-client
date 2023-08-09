import React from 'react';
import Lottie from "lottie-react";

const Slider = ({ image, toy }) => {
    return (
        <div className='h-64 md:h-[580px]' style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",            
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <div className='px-6 md:px-24'>
                <h1 className='text-xl md:text-3xl font-semibold'>We Are The Best Seller Around</h1>
                <h1 className='text-2xl md:text-5xl text-red-800 font-semibold my-3'>Best Toys Store For Babies</h1>
                <button className='btn btn-primary px-12'>Shop Now</button>
            </div>
            <div className='h-96 cursor-pointer'>
                <Lottie className='w-full h-full' animationData={toy} loop={true} />
            </div>
        </div>
    );
};

export default Slider;