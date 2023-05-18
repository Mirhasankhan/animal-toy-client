import React, { useContext } from 'react';
import { firebaseProvider } from '../../Providers/Provider';

const AddToys = () => {
    const { user } = useContext(firebaseProvider)
    const handleAddAToy = e =>{
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

        const newToy = {
            toy,email,seller,price,quantity,description,rating, photo
        }
        fetch('http://localhost:5000/addToy',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        form.reset()

    }
    return (
        <div>
            <div className='mb-5 flex items-center justify-center h-36 bg-gradient-to-r from-purple-500 to-pink-500"'>
                <h1 className='text-4xl font-semibold text-white'>Add Your Toys Here</h1>
            </div>
            <form onSubmit={handleAddAToy} className='bg-green-400 w-3/4 mx-auto mb-5 p-5 rounded-lg'>
                <div className="card-body grid grid-cols-2 gap-4">
                    <div>
                        <div className="form-control">
                            <input type="text" name='toy' placeholder="Toy Name" className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='seller' defaultValue={user?.displayName} className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='price' placeholder="Price" className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='quantity' placeholder="Quantity" className="mb-3 input input-bordered" />
                        </div>
                    </div>
                    <div>
                        <div className="form-control">
                            <input type="email" name='email' defaultValue={user?.email} className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='rating' placeholder="Rating" className="mb-3 input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="url" name='photo' placeholder="PhotoURL" className="mb-3 input input-bordered" />
                        </div>
                        {/* <select name="animals" id="animals">
                            <option value="Mammal">Mammal</option>
                            <option value="Bird">Birds</option>
                            <option value="Reptile">Reptile</option>
                        </select> */}
                    </div>
                </div>
                <div>
                    <input className='border-2 w-full pl-3 rounded-lg py-2 mb-3' type="text" name='description' placeholder='Description' />
                    <input className='submit-button w-full mb-3' type="submit" value="Add Toy" />
                </div>
            </form>

        </div>
    );
};

export default AddToys;