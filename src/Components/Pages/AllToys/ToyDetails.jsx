import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const ToyDetails = () => {
    const singleToy = useLoaderData()
    const { description, email, photo, seller, toy, quantity, rating, price } = singleToy;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const addToFavourite = ()=>{
        Swal.fire('Added As Favourite')
    }
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
        <div className=' py-5'>
            {/* <div className="text-white font-medium italic text-xl  card w-full lg:w-1/2 mx-2 lg:mx-auto shadow-xl bg-green-400">
                <figure><img className='w-full h-96' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex'>
                        <div className='w-full'>
                            <h1>Name: {toy}</h1>
                            <h1 className='my-2'>Seller: {seller}</h1>
                            <h1>Email: {email}</h1>
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={Math.round(rating)}
                                readOnly
                            />
                        </div>
                        <div className='w-full'>
                            <h1>Available Quantity: <span className='text-orange-600'>{quantity}</span></h1>
                            <h1 className='my-2'>Price: <span className='text-orange-600'>{price}</span></h1>
                            <h1>Description: {description}</h1>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='md:w-2/3 md:mx-auto mx-3 shadow-lg grid grid-cols-2 gap-3 border border-gray-200 p-4 rounded-lg'>
                <div className='flex items-center'>
                    <img className='h-64 md:h-80 rounded-md' src={photo} alt="" />
                </div>
                <div>
                    <h2 className="card-title">{toy}</h2>
                    <h1 className='my-3'>Seller: {seller}</h1>
                    <h1 className='my-3'>Seller Email: {email}</h1>
                    <h3>Price: ${price}</h3>
                    <div className='flex gap-1 items-center my-3'>
                        <h3>Rating:</h3>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={Math.round(rating)}
                            readOnly
                        />
                    </div>
                    <h2>Available Quantity: {quantity}</h2>
                    <h1 className='my-3'>Description: {description}</h1>
                    <button onClick={addToFavourite} className="submit-button">Add To Favourites</button>

                </div>
            </div>
        </div>
    );
};

export default ToyDetails;