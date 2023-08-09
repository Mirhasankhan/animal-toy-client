import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import SingleToyDetail from './SingleToyDetail';

const AllToys = () => {
    useTitle('allToys')
    const loadedToys = useLoaderData()
    const [ourToys, setOurToys] = useState(loadedToys)
    
    const handleSearch = e => {
        e.preventDefault()
        const searchValue = e.target.value;
        const filter = ourToys.filter(toy => toy.toy.toLowerCase().includes(searchValue))
        setOurToys(filter)
    }


    return (
        <div className='mb-4 mx-5'>
            <div className='flex justify-center items-center my-5'>
                <h1 className=' md:text-4xl font-bold text-center mr-4'>All Of Our Toys Here!!</h1>
                <div className='border border-sky-500 rounded-lg flex items-center p-1'>
                    <h1 className='font-semibold'>Toy</h1>
                    <input onChange={handleSearch} className='w-full p-[6px] outline-none' name='search' type="text" placeholder='search by name' />
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mx-2 md:mx-6'>
                {
                    ourToys.map((toy) => <SingleToyDetail
                        key={toy._id}
                        toys={toy}
                    ></SingleToyDetail>)
                }
            </div>
            {/* <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
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
            </div> */}
        </div>
    );
};

export default AllToys;