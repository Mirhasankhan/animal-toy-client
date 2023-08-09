import React, { useEffect, useState } from 'react';
import SubCategories from './SubCategories';
import { useLoaderData } from 'react-router-dom';
import Gallery from './Gallery';
import Banner from './Banner';
import TopSellers from './TopSellers';
import About from './About';
import useTitle from '../../../hooks/useTitle';
import Contact from './Contact';


const Home = () => {
    useTitle('Home')
    const allToys = useLoaderData()
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('https://animal-toys-server.vercel.app/images')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <h1 className='mt-12 my-5 md:my-12 text-2xl md:text-4xl text-center  font-bold'>About Us</h1>
            <About></About>
            <SubCategories allToys={allToys}></SubCategories>
            <div>
                <h1 className='text-center text-2xl md:text-4xl my-12 font-bold'>Explore Our Toy Gallery</h1>
                <div className='grid md:grid-cols-3 gap-3 mx-3 md:mx-12 my-3'>
                    {
                        images.map(image => <Gallery key={image._id} image={image}></Gallery>)
                    }
                </div>
            </div>
           
            <h1 className='my-12 text-2xl md:text-4xl text-center font-bold'>Meet Our <span>Top Buyers</span></h1>
            <TopSellers></TopSellers>
            <Contact/>
        </div>
    );
};

export default Home;