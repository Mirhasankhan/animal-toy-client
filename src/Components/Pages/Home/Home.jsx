import React, { useEffect, useState } from 'react';
import SubCategories from './SubCategories';
import { useLoaderData } from 'react-router-dom';
import Gallery from './Gallery';
import Banner from './Banner';
import TopSellers from './TopSellers';
import About from './About';
import useTitle from '../../../hooks/useTitle';


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
            <SubCategories allToys={allToys}></SubCategories>
            <div>
                <h1 className='text-center text-4xl mt-10  text-blue-500 font-bold mb-5'>Explore Our Toy Gallery</h1>
                <div className='grid md:grid-cols-3 gap-3 mx:3 md:mx-12 my-3'>
                    {
                        images.map(image => <Gallery key={image._id} image={image}></Gallery>)
                    }
                </div>
            </div>
            <h1 className='mt-12 mb-5 text-4xl text-center text-purple-600 font-bold'>About Us</h1>
            <About></About>
            <h1 className='mt-12 mb-5 text-4xl text-center text-purple-600 font-bold'>Meet Our <span>Top Buyers</span></h1>
            <TopSellers></TopSellers>
        </div>
    );
};

export default Home;