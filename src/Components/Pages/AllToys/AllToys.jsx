import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysRow from './ToysRow';

const AllToys = () => {
    const loadedToys = useLoaderData()
    const [ourToys, setOurToys] = useState(loadedToys)
    const handleSearch = e => {
        e.preventDefault()
        const searchValue = e.target.search.value;
        const filter = ourToys.filter(toy => toy.toy.toLowerCase().includes(searchValue))
        setOurToys(filter)
    }

    return (
        <div>
            <div className='flex justify-center my-5'>
                <h1 className='text-4xl font-bold text-center mr-4'>All Of Our Toys Here!!</h1>
                <form onSubmit={handleSearch}>
                    <input className='border-2 rounded-l-lg p-[10px]' name='search' type="text" placeholder='search by name' />
                    <input className='subscribe-button' type="submit" value="Search" />
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
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
                            ourToys.map((toy, index) => <ToysRow
                                key={toy._id}
                                toys={toy}
                                index={index}
                            ></ToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;