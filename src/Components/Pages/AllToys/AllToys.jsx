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
        <div className='mb-4 mx-12'>
            <div className=''>
                <h1 className=' md:text-4xl font-bold text-center mr-4'>All Of Our Toys Here!!</h1>
                <div className='border w-2/3 md:w-2/4 mx-auto my-6 border-sky-500 rounded-lg flex items-center p-1'>
                    <h1 className='font-semibold pl-1'>Toy</h1>
                    <input onChange={handleSearch} className='w-full p-[6px] outline-none' name='search' type="text" placeholder='search by name' />
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8 mx-2 md:mx-6'>
                {
                    ourToys.map((toy) => <SingleToyDetail
                        key={toy._id}
                        toys={toy}
                    ></SingleToyDetail>)
                }
            </div>           
        </div>
    );
};

export default AllToys;