import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const SubCategoryDetail = ({ children }) => {  
   
    const { _id,price, photo, toy, rating } = children;
    return (
        <div className="mt-3 card w-full bg-purple-100 ">
            <figure className="px-10 pt-10">
                <img src={photo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body flex flex-col">
                <h2 className="card-title text-2xl">{toy}</h2>
                <div className='flex justify-between mt-auto'>
                    <h1 className='text-xl'>Price: {price}</h1>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={Math.round(rating)}
                        readOnly
                    />
                </div>
                <div className="card-actions">
                    <Link to={`/allToys/${_id}`}>                      
                        <button className="btn btn-primary w-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryDetail;