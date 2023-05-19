import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { firebaseProvider } from '../Providers/Provider';


const Header = () => {
    const { user, logOut } = useContext(firebaseProvider) 
    
    const handleLogout = ()=>{
        logOut()
        .then(result =>{})
        .catch(error =>{})
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className='flex items-center'>
                    <img className='h-16 w-16 rounded-full mr-3' src={logo} alt="" />
                    <h1>Toy Emporium</h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                    <Link className='nav-links' to="/">Home</Link>
                    <Link className='nav-links' to="/allToys">All Toys</Link>
                    <Link className='nav-links' to="/myToys">My Toys</Link>
                    <Link className='nav-links' to="/addToys">Add A Toy</Link>
                    <Link className='nav-links' to="/blogs">Blogs</Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className='flex'>
                         <img title={user.displayName} className='h-16 w-16 rounded-full' src={user.photoURL} alt="" /> 
                         <button onClick={handleLogout} className='submit-button'>Logout</button>
                    </div>
                    
                    : <button className='submit-button'><Link to="/login">Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Header;