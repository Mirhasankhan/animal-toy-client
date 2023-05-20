import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { firebaseProvider } from '../Providers/Provider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser } = useContext(firebaseProvider)
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                updateUserData(newUser, name, photo)
                Swal.fire({
                    icon: 'success',                   
                    text: 'Account Created Successfully'                  
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',                   
                    text: `${error.message}`                    
                })
            })
    }

    const updateUserData = (currentUser, name, image) => {
        updateProfile(currentUser, {
            displayName: name,
            photoURL: image
        })
            .then(() => { })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    text: `${error.message}`
                })
            })
    }

    return (
        <div className='bg-base-200 py-5'>
            <div className='w-2/3 lg:w-2/5 mx-auto bg-white rounded-md'>
                <h1 className='text-center text-3xl font-semibold pt-5'>Create An Account</h1>
                <form onSubmit={handleRegister}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="url" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className='submit-button' type="submit" value="Create Account" />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1>Already have an Account?</h1>
                        <Link className='text-red-500' to="/login">Log in</Link>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;