import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { firebaseProvider } from '../Providers/Provider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    useTitle('register')
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
            form.reset()
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
                            <input required type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name='password' placeholder="Password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input required type="url" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input required className='submit-button' type="submit" value="Create Account" />
                        </div>
                    </div>
                    <div className='text-center pb-3'>
                        <h1>Already have an Account?<Link className='text-red-500' to="/login">Log in</Link></h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;