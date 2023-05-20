import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToyDetails = () => {
    const singleToy = useLoaderData()
    const { description, email, photo, seller, toy, quantity, rating, price } = singleToy;
    return (
        // <div className='bg-green-600 w-2/3 mx-auto p-10 rounded-xl'>
        //     <div className='flex flex-col  items-center'>
        //         <img className='h-48 w-48 rounded-full' src={photo} alt="" />
        //         <div className='flex gap-3'>
        //             <div>
        //                 <h1>Name: {toy}</h1>
        //                 <h1>Seller: {seller}</h1>
        //                 <p>Email: {email}</p>
        //                 <p>Rating: {rating}</p>
        //                 <Rating 
        //                 style={{ maxWidth: 200 }} 
        //                 value={Math.round(rating)} 
        //                 readOnly
        //                 />
        //             </div>
        //             <div>
        //                 <h1>Quantity: {quantity}</h1>
        //                 <p>Price: {price}</p>
        //                 <p>Description: {description}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="text-white font-medium italic text-xl  card w-full lg:w-2/3 mx-2 lg:mx-auto shadow-xl my-5 bg-green-400">
            <figure><img className='w-full h-96' src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex'>
                    <div className='w-full'>
                        <h1>Name: {toy}</h1>
                        <h1>Seller: {seller}</h1>
                        <h1>Email: {email}</h1>
                        <Rating
                            style={{ maxWidth: 200 }}
                            value={Math.round(rating)}
                            readOnly
                        />
                    </div>
                    <div className='w-full'>
                        <h1>Available Quantity: <span className='text-orange-600'>{quantity}</span></h1>
                        <h1>Price: <span className='text-orange-600'>{price}</span></h1>
                        <h1>Description: {description}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;