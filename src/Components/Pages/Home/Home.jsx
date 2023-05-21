import React, { useEffect, useState } from 'react';
import SubCategories from './SubCategories';
import { useLoaderData } from 'react-router-dom';
import Gallery from './Gallery';


const Home = () => {
    const allToys = useLoaderData()
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('https://animal-toys-server.vercel.app/images')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div>
            <SubCategories allToys={allToys}></SubCategories>
            <div className='grid md:grid-cols-3 gap-3 mx:3 md:mx-12 my-3'>
                {
                    images.map(image => <Gallery image={image}></Gallery>)
                }
            </div>           
        </div>
    );
};

export default Home;