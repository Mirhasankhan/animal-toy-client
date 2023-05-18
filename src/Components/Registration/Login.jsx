import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { firebaseProvider } from '../Providers/Provider';

const Login = () => {
    const {user, logIn} = useContext(firebaseProvider)
   
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;       
        const email = form.email.value;
        const password = form.password.value;        
        logIn(email, password)
        .then(result =>{})
        .catch(error => console.log(error))
    }
    return (
        <div className='bg-base-200 py-5'>
            <div className='w-2/5 mx-auto bg-white rounded-md'>
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
                </form>
            </div>
        </div>
    );
};

export default Login;