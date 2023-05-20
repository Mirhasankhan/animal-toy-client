import React from 'react';
import { Link } from 'react-router-dom';

const SubCategoryDetail = ({children}) => {
    const {price, photo, toy, rating} = children;
    return (
        <div className='bg-green-400'>
            <img className='w-24' src={photo} alt="" />
            <h1>{toy}</h1>
            <h1>{price}</h1>
            <h1>{rating}</h1>
            <Link>
                <button>View Details</button>
            </Link>
        </div>
    );
};

export default SubCategoryDetail;