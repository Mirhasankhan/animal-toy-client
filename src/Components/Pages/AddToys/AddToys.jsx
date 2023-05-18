import React, { useContext } from 'react';
import { firebaseProvider } from '../../Providers/Provider';

const AddToys = () => {
    const { user } = useContext(firebaseProvider)
    return (
        <div>
            <div className='mb-5 flex items-center justify-center h-36 bg-gradient-to-r from-purple-500 to-pink-500"'>
                <h1 className='text-4xl font-semibold text-white'>Add Your Toys Here</h1>
            </div>
            <div className="w-3/4 mx-auto card-body grid grid-cols-2 gap-4 bg-green-400 p-5 rounded-lg">
                <div>
                    <div className="form-control">
                        <input type="text" name='toy' placeholder="Toy Name" className="mb-3 input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" name='seller' defaultValue={user?.displayName} className="mb-3 input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="email" className="mb-3 input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="password" className="mb-3 input input-bordered" />
                    </div>
                </div>
                <div>
                    <div className="form-control">
                        <input type="email" placeholder="email" className="mb-3 input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="password" placeholder="password" className="mb-3 input input-bordered" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="email" className="mb-3 input input-bordered" />
                    </div>
                    <select name="animals" id="animals">
                        <option value="Mammal">Mammal</option>
                        <option value="Bird">Birds</option>
                        <option value="Reptile">Reptile</option>
                    </select>
                </div>
            </div>
            <div className='w-3/4 mx-auto p-5 bg-green-400 '>
                <input className='border-2 w-full py-2 mb-3' type="url" name='photo' placeholder='PhotoURl' />
                <input className='submit-button w-full mb-3' type="submit" value="Add Toy" />
            </div>

        </div>
    );
};

export default AddToys;