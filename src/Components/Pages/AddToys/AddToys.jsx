import React, { useContext, useState } from 'react';
import { firebaseProvider } from '../../Providers/Provider';
import Swal from 'sweetalert2';
import useTitle from '../../../hooks/useTitle';
import { useEffect } from 'react';
import 'animate.css';

const AddToys = () => {
    useTitle('addToys')
    const { user } = useContext(firebaseProvider)
    const [value, setValue] = useState('Bike Toy')
    const handleSelect = (e) => {
        setValue(e.target.value);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddAToy = e => {
        e.preventDefault();
        const form = e.target;
        const toy = form.toy.value;
        const email = form.email.value;
        const seller = form.seller.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value
        const subCategory = value;

        const newToy = {
            toy, email, seller, price, quantity, description, rating, photo, subCategory
        }
        fetch('https://animal-toys-server.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire('Toy Added Successfully!!')
            })
        form.reset()

    }
    return (
        <div className='bg-gray-300 pb-5'>
            <div className='flex items-center justify-center h-36 bg-gradient-to-r from-purple-500 to-pink-500"'>
                <h1 className='animate__animated animate__backInRight text-4xl font-semibold text-white'>Add Your Toys Here</h1>
            </div>
            <form onSubmit={handleAddAToy} className='bg-white w-full md:w-3/4 mx-2 md:mx-auto md:px-5 pb-2 mt-5 rounded-lg'>
                <div className="card-body grid grid-cols-2 gap-1 md:gap-4">
                    <div>
                        <div className="form-control">
                            <label className='font-semibold py-1' htmlFor="">Toy Name</label>
                            <input required type="text" name='toy' placeholder="Toy Name" className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className='font-semibold py-1' htmlFor="">Seller Name</label>
                            <input required type="text" name='seller' defaultValue={user?.displayName} className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className='font-semibold py-1' htmlFor="">Price</label>
                            <input required type="text" name='price' placeholder="Price" className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className='font-semibold py-1' htmlFor="">Available Quantity</label>
                            <input required type="text" name='quantity' placeholder="Quantity" className="mb-3 input input-bordered" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <label className='font-semibold py-1' htmlFor="">Seller Email</label>
                            <input required type="email" name='email' defaultValue={user?.email} className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className='font-semibold py-1' htmlFor="">Ratings</label>
                            <input required type="text" name='rating' placeholder="Rating" className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control mb-10">
                            <label className='font-semibold py-1' htmlFor="">Toy Image</label>
                            <input required type="url" name='photo' placeholder="PhotoURL" className="mb-3 input input-bordered" />
                        </div>
                        <label className='font-semibold' htmlFor="animal">Choose Category: </label>
                        <select className='p-1 rounded-md border-2 border-purple-600' name="animals" id="animals" onChange={handleSelect}>
                            <option value="Bike Toy">Bike Toy</option>
                            <option value="Car Toy">Car Toy</option>
                            <option value="Architecture Toy">Architecture Toy</option>
                        </select>
                    </div>
                </div>
                <div className='mx-8'>
                    <label className='font-semibold' htmlFor="">Toy Description</label>
                    <textarea className='border-2 w-full rounded-lg p-2 mb-3' type="text" name='description' placeholder='Enter Toy Description' rows="5"></textarea>
                    {/* <input className='border-2 w-full pl-3 rounded-lg py-2 mb-3' type="text" name='description' placeholder='Description' /> */}
                    <input className='submit-button w-full mb-3' type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddToys;