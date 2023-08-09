import React, { useContext, useEffect, useState } from 'react';
import { firebaseProvider } from '../../Providers/Provider';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import 'animate.css';


const MyToys = () => {
    useTitle('myToys')
    const { user } = useContext(firebaseProvider)
    const [toys, setToys] = useState([])
    const [sort, setSort] = useState(1)

    const url = `https://animal-toys-server.vercel.app/myToy?email=${user?.email}&sort=${sort}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [url])

    
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://animal-toys-server.vercel.app/alltoy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const filter = toys.filter(toy => toy._id !== id)
                        setToys(filter)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    const handleUpdate = (id) => {
        console.log(id);
        
    }

    return (
        <div className=''>
            <div className='flex items-center justify-center h-18 my-4'>
                <h1 className='animate__animated animate__backInRight text-4xl font-semibold '>My Toys</h1>
            </div>
            {/* <div className="overflow-x-auto mx-5">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Make Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <MyToysRow
                                key={toy._id}
                                addedToy={toy}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div> */}
            {
                toys.length > 0 ? <div className="overflow-x-auto mx-5 mb-5">
                    <table className="table table-zebra w-full font-medium">
                        <thead className='bg-red-500'>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Make Changes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy => <MyToysRow
                                    key={toy._id}
                                    addedToy={toy}
                                    handleDelete={handleDelete}
                                    handleUpdate={handleUpdate}
                                ></MyToysRow>)
                            }
                        </tbody>
                    </table>
                </div> : <p className='text-4xl font-semibold text-center mt-24'>No Data Available</p>
            }
        </div>
    );
};

export default MyToys;