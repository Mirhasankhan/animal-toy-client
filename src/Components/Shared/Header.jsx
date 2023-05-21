import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { firebaseProvider } from '../Providers/Provider';
import { FaBars } from 'react-icons/fa';


const Header = () => {
    const { user, logOut } = useContext(firebaseProvider)
    const [isSmall, setIsSmall] = useState(true)

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => { })
    }

    return (
        <div className="z-10 navbar text-white sticky top-0 bg-black md:px-8">
            <div className="navbar-start">
                <div className='flex items-center'>
                    <img className='h-16 w-16 rounded-full mr-3' src={logo} alt="" />
                    <div>
                        <h1 className='font-bold italic text-2xl'>Toy Emporium</h1>
                        <p className='text-sm italic'>We are the best</p>
                    </div>
                </div>
            </div>
            <div className="navbar-center md:flex">
                <ul className="menu menu-horizontal flex gap-2 lg:gap-12">
                    <Link className='nav-links' to="/">Home</Link>
                    <Link className='nav-links' to="/allToys">All Toys</Link>
                    {
                        user?.email &&
                        <div>
                            <Link className='nav-links mr-3' to="/myToys">My Toys</Link>
                            <Link className='nav-links' to="/addToys">Add A Toy</Link>
                        </div>
                    }
                    <Link className='nav-links' to="/blogs">Blogs</Link>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <div className='flex'>
                        <img title={user.displayName} className='h-16 w-16 rounded-full' src={user.photoURL} alt="" />
                        {/* <button onClick={handleLogout} className='submit-button'>Logout</button> */}
                    </div>
                        : <button className='submit-button'><Link to="/login">Login</Link></button>
                }
            </div>
        </div>
    );
};

export default Header;