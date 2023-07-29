import React from 'react';
import Lottie from "lottie-react";
import message from '../../../assets/message.json';

const Contact = () => {
    return (
        <div className='mx-5 md:mx-12 mb-5'>
            <h2 className='text-center my-5 font-semibold text-2xl md:text-4xl'>Contact US</h2>
            <div className='grid md:grid-cols-2 gap-3'>
                <div className='border border-gray-300 p-4 rounded-lg'>
                    <div className='flex gap-3'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text p-2 font-semibold">Your Name</span>
                            </label>
                            <input type="text" placeholder="" className="bg-gray-100 input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text p-2 font-semibold">Your Email*</span>
                            </label>
                            <input type="email" placeholder="" className="bg-gray-100 input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text p-2 font-semibold">Phone Number</span>
                            </label>
                            <input type="number" placeholder="" className="bg-gray-100 input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text p-2 font-semibold">Company Name</span>
                            </label>
                            <input type="text" placeholder="" className="bg-gray-100 input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    
                    <textarea className='bg-gray-100 p-3 w-full border border-gray-200 my-3 rounded-md' placeholder='Message' name="" id="" cols="10" rows="4"></textarea>
                    <button className='submit-button w-full'>Submit</button>
                </div>
                <div className='h-96'>
                    <Lottie className='w-full h-full' animationData={message} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Contact;