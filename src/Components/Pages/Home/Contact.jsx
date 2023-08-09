import React from 'react';
import Lottie from "lottie-react";
import message from '../../../assets/message.json';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = (e)=>{
        const form = e.target
        e.preventDefault()
        Swal.fire('Your Messase Send Successfully')
        form.reset()
    }
    return (
        <div className='mx-5 md:mx-12 mb-5'>
            <h2 className='text-center my-5 md:my-12 font-semibold text-2xl md:text-4xl'>Contact US</h2>
            <div className='grid md:grid-cols-2 gap-3'>
                <form onSubmit={handleSubmit}>
                    <div className='border border-gray-300 p-4 rounded-lg bg-gray-300'>
                        <div className='flex gap-3'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text p-2 font-semibold">Your Name</span>
                                </label>
                                <input type="text" required placeholder="" className=" input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text p-2 font-semibold">Your Email*</span>
                                </label>
                                <input type="email" required placeholder="" className=" input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text p-2 font-semibold">Phone Number</span>
                                </label>
                                <input type="number" required placeholder="" className=" input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text p-2 font-semibold">Company Name</span>
                                </label>
                                <input type="text" placeholder="" className=" input input-bordered w-full max-w-xs" />
                            </div>
                        </div>

                        <textarea className=' p-3 w-full border border-gray-200 my-3 rounded-md' placeholder='Message' name="" id="" cols="10" rows="4"></textarea>
                        <input className='submit-button w-full' type="submit" value="Submit" />
                    </div>
                </form>
                <div className='h-96'>
                    <Lottie className='w-full h-full' animationData={message} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Contact;