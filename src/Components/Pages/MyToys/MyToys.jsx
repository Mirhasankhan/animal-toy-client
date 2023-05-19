import React, { useContext, useEffect, useState } from 'react';
import { firebaseProvider } from '../../Providers/Provider';
import ToysRow from '../AllToys/ToysRow';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(firebaseProvider)

    const url = `https://animal-toys-server.vercel.app/allToy?email=${user?.email}`
    const [toys, setToys] = useState([])

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
                fetch(`http://localhost:5000/allToy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const filter = toys.filter(toy => toy._id !== id)
                        setToys(filter)
                        if (data.deleteCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
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
                        ></MyToysRow>)
                    }
                </tbody>
            </table>
        </div>

    );
};

export default MyToys;