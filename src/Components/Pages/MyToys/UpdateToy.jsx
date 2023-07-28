import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const toyUpdate = useLoaderData()
    const { _id, price, quantity, description } = toyUpdate;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleUpdateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedToy = {
            price: price,
            quantity: quantity,
            description: description,
            email: "55",
            photo: 'kk',
            rating: 'll',
            seller: '..',
            subCategory: 'fdfdf',
            toy: 'dfdsfdsf'
        }
        console.log(updatedToy);

        fetch(`https://animal-toys-server.vercel.app/myToy/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        form.reset()
    }
    return (
        <div className="bg-gray-100 py-8">
            <form onSubmit={handleUpdateToy} className='bg-green-400 w-3/4 mx-auto mb-5 py-5 mt-4 rounded-lg'>
                <div className="card-body">
                    <div>
                        <div className="form-control">
                            <label className='font-semibold text-xl p-2' htmlFor="">Price</label>
                            <input required type="text" defaultValue={price} name='price' placeholder="Price" className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className='font-semibold text-xl p-2' htmlFor="">Quantity</label>
                            <input required type="text" defaultValue={quantity} name='quantity' placeholder="Quantity" className=" input input-bordered" />
                        </div>
                    </div>
                </div>
                <div className='px-8'>
                    <label className='font-semibold text-xl p-2' htmlFor="">Description</label>
                    <input defaultValue={description} className='border-2 w-full pl-3 rounded-lg py-2 mb-3' name="description"></input>
                    <input className='submit-button w-full mb-3' type="submit" value="Update Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;