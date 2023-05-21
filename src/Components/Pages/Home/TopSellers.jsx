import React from 'react';
import Marquee from "react-fast-marquee";
import seller1 from '../../../assets/seller1.jpg'
import seller2 from '../../../assets/seller2.jpg'
import seller3 from '../../../assets/seller3.jpg'
import { FaArrowRight } from 'react-icons/fa';

const TopSellers = () => {
    return (
        <div className='mb-5'>
            <Marquee speed={60} pauseOnHover={true}>
                <div className='border-2 border-purple-600 rounded-xl p-5 shadow-xl'>
                    <img src={seller1} alt="" />
                    <h1 className='text-green-600 text-2xl text-center font-bold my-2'>Dean Jones</h1>
                    <h1 className='text-gray-500 text-xl text-center font-medium'>Animal Caretaker</h1>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-medium'>Read More </h1>
                        <FaArrowRight className='text-red-600 ml-3'></FaArrowRight>
                    </div>
                </div>
                <div className='border-2 border-purple-600 rounded-xl mx-5 p-5 shadow-xl'>
                    <img src={seller2} alt="" />
                    <h1 className='text-green-600 text-2xl text-center font-bold my-2'>Alisha Hassan</h1>
                    <h1 className='text-gray-500 text-xl text-center font-medium'>Animal Caretaker</h1>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-medium'>Read More </h1>
                        <FaArrowRight className='text-red-600 ml-3'></FaArrowRight>
                    </div>
                </div>
                <div className='border-2 border-purple-600 rounded-xl p-5 shadow-xl'>
                    <img src={seller3} alt="" />
                    <h1 className='text-green-600 text-2xl text-center font-bold my-2'>Fabrizio Romano</h1>
                    <h1 className='text-gray-500 text-xl text-center font-medium'>Animal Caretaker</h1>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-medium'>Read More </h1>
                        <FaArrowRight className='text-red-600 ml-3'></FaArrowRight>
                    </div>
                </div>
                <div className='border-2 border-purple-600 rounded-xl mx-5 p-5 shadow-xl'>
                    <img src={seller2} alt="" />
                    <h1 className='text-green-600 text-2xl text-center font-bold my-2'>Alisha Hassan</h1>
                    <h1 className='text-gray-500 text-xl text-center font-medium'>Animal Caretaker</h1>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-medium'>Read More </h1>
                        <FaArrowRight className='text-red-600 ml-3'></FaArrowRight>
                    </div>
                </div>
                
            </Marquee>
        </div>
    );
};

export default TopSellers;