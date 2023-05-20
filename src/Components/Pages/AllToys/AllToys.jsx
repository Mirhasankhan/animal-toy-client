import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysRow from './ToysRow';

const AllToys = () => {
    const loadedToys = useLoaderData()
    
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">               
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Categories</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>                                   
                   {
                    loadedToys.map((toy, index) => <ToysRow
                        key={toy._id}
                        toys={toy}
                        index={index}
                    ></ToysRow>)
                   }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;