import React from 'react';
import logo from '../../assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#111723]'>
            <div className='grid grid-cols-3 gap-6 py-5 mx-3 lg:mx-16'>
                <div>
                    <img className='h-16 w-24 rounded-lg' src={logo} alt="" />
                    <p className='text-white text-sm py-3'>Toy Emporium is your one-stop destination for all your animal toys needs in Bangladesh. We offer a wide range of products from top brands. Our goal is to make buying easy, convenient, and accessible to everyone. We provide fast and free delivery, easy returns, and secure checkout to ensure a positive shopping experience for our customers.</p>
                    <input className='border-2 px-1 rounded-l-lg py-[10px]' type="text" placeholder='Your Email Address' />
                    <button className='subscribe-button'>Subscribe</button>
                </div>
                <div className='text-white'>
                    <h1 className='pb-12'>CONTACT INFO</h1>
                    <h2>Address</h2>
                    <p></p>
                    <h2>Phone Number</h2>
                    <p>00+11482145854</p>
                    <h2>Email</h2>
                    <p>toys.12@gmail.com</p>
                </div>
                <div className='text-white'>
                    <h1 className='pb-12'>Our Social Media Links</h1>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com/">
                            <FaFacebook className='text-4xl text-blue-600'></FaFacebook>
                        </a>
                        <a href="https://www.instagram.com/">
                            <FaInstagram className='text-4xl text-purple-600'></FaInstagram>
                        </a>
                        <a href="https://www.linkedin.com/">
                            <FaLinkedin className='text-4xl text-blue-600'></FaLinkedin>
                        </a>
                        <a href="https://www.twitter.com/">
                            <FaTwitter className='text-4xl text-blue-300'></FaTwitter>
                        </a>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-white text-xl pb-3'>&copy; ToyEmporium2023</h1>
        </div>
    );
};

export default Footer;