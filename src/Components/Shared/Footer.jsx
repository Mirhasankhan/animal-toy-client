import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope  } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#111723]'>
            <div className='grid grid-cols-3 gap-6 py-5 mx-3 lg:mx-16'>
                <div>
                    <img className='h-24 w-36 rounded-lg' src={logo} alt="" />
                    <h1 className='text-white italic text-2xl font-bold'>Toy Emporium</h1>
                    <p className='text-white text-sm py-3'>Toy Emporium is your one-stop destination for all your animal toys needs in Bangladesh. We offer a wide range of products from top brands.</p>
                    <input className='border-2 px-1 rounded-l-lg py-[10px]' type="text" placeholder='Your Email Address' />
                    <button className='subscribe-button'>Subscribe</button>
                </div>
                <div className='text-white'>
                    <h1 className='pb-12 text-xl font-bold italic'>Contact Info</h1>
                    <div className='footer-number'>
                        <FaPhone className='text-blue-600 mr-2'></FaPhone>
                        <p>00+11482145854</p>
                    </div>                    
                    <div className='footer-number mt-4'>
                        <FaEnvelope className='mr-2 text-xl text-orange-300'></FaEnvelope>
                        <p>toy#250144@gmail.com</p>
                    </div>                    
                </div>
                <div className='text-white'>
                    <h1 className='pb-12 text-xl font-bold italic'>Our Social Media Links</h1>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/">
                            <FaFacebook className='text-5xl text-blue-600'></FaFacebook>
                        </a>
                        <a href="https://www.instagram.com/">
                            <FaInstagram className='text-5xl text-purple-800'></FaInstagram>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <FaLinkedin className='text-5xl text-blue-600'></FaLinkedin>
                        </a>
                        <a href="https://www.twitter.com/">
                            <FaTwitter className='text-5xl text-blue-300'></FaTwitter>
                        </a>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-white text-xl pb-3'>&copy; ToyEmporium2023</h1>
        </div>
    );
};

export default Footer;