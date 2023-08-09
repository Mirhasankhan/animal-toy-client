import React from 'react';
import { Link } from 'react-router-dom';

const SingleToyDetail = ({ toys }) => {
    const { _id, quantity, price, toy, seller, email, photo } = toys;  
    return (
        <div className='border p-3 rounded-md relative overflow-hidden'>
            <img className='h-80 rounded-md w-full transition-transform duration-1000 transform-gpu hover:scale-125' src={photo} alt="" />
            <h1 className='text-xl font-bold pt-4 pb-1'>{toy}</h1>
            <h2>Seller: {seller}</h2>
            <h2>Seller Email: {email}</h2>
            <h2>Available Quantity: {quantity}</h2>
            <p>Price: ${price}</p>
            <Link to={`/allToys/${_id}`}>
                <button className='submit-button mt-2 w-full'>See Details</button>
            </Link>
        </div>
    );
};

export default SingleToyDetail;