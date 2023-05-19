import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const singleToy = useLoaderData()
    const {description, email, photo, seller, toy, quantity, rating, price} = singleToy;
    return (
        <div className='bg-green-600 w-2/3 mx-auto p-10 rounded-xl'>
            <div className='flex flex-col  items-center'>
                <img className='h-48 w-48 rounded-full' src={photo} alt="" />
                <div className='flex gap-3'>
                    <div>
                        <h1>Name: {toy}</h1>
                        <h1>Seller: {seller}</h1>
                        <p>Email: {email}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div>
                        <h1>Quantity: {quantity}</h1>
                        <p>Price: {price}</p>
                        <p>Description: {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;