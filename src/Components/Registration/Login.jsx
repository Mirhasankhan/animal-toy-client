import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { firebaseProvider } from '../Providers/Provider';

const Login = () => {
    const { user, logIn, googleSignIn } = useContext(firebaseProvider)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => { 
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => { })
            .catch(error => { })
    }
    return (
        <div className='bg-base-200 py-5'>
            <div className='w-2/5 mx-auto bg-white rounded-md px-5 pb-5'>
                <h1 className='text-center text-3xl font-semibold pt-5'>Login to your account</h1>
                <form onSubmit={handleLogin}>
                    <div className="card-body">
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
                        <div className="form-control mt-6">
                            <input className='submit-button' type="submit" value="Login" />
                        </div>
                    </div>
                    <div className='text-center'>
                        <h1>Don't have an Account?</h1>
                        <Link className='text-red-500' to="/register">Register Now</Link>
                    </div>
                    <h1 className='divider'>Or</h1>
                </form>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning w-full">Login with google</button>
            </div>
        </div>
    );
};

export default Login;