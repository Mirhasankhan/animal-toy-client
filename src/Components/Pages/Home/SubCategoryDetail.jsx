import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const SubCategoryDetail = ({ children }) => {    

    const { _id, price, photo, toy, rating, seller } = children;
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className='grid md:grid-cols-2 border border-gray-200 p-4 rounded-lg'>
            <div className='flex items-center'>
                <img className='w-32 md:w-42' src={photo} alt="" />
            </div>
            <div>
                <div className="flex gap-2 mt-auto">
                    <h2 className="card-title">{toy}</h2>
                    <div className="badge badge-accent md:flex hidden">Trending</div>
                </div>
                <h1 className='my-3'>Seller: {seller}</h1>
                <h3>Price: ${price}</h3>
                <div className='flex gap-1 items-center my-3'>
                    <h3>Rating:</h3>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(rating)}
                        readOnly
                    />
                </div>
                <Link to={`/allToys/${_id}`}>
                    <button className="submit-button">View Details</button>
                </Link>

            </div>
        </div>
    );
};

export default SubCategoryDetail;