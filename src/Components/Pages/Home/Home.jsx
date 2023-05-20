import React from 'react';
import SubCategories from './SubCategories';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const allToys = useLoaderData()
    // console.log(allToys);
    return (
        <div>
            <SubCategories allToys={allToys}></SubCategories>
        </div>
    );
};

export default Home;