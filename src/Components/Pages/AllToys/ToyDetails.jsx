import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const singleToy = useLoaderData()
    console.log(singleToy);
    return (
        <div>
            details toy
        </div>
    );
};

export default ToyDetails;