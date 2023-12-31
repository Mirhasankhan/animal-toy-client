import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { firebaseProvider } from '../Providers/Provider';
import { FaBars } from 'react-icons/fa';
import 'animate.css';


const Header = () => {
    const { user, logOut } = useContext(firebaseProvider)
    const [smDevice, setSmDevice] = useState(false)

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(() => {})
    }

    return (
        <div className="z-10 navbar  sticky top-0 bg-white md:px-8">
            <div className="navbar-start">
                <div className='flex items-center'>
                    <img className='h-12 w-12 md:h-16 md:w-16 rounded-full mr-1 md:mr-3' src="/toy.jpg" alt="" />
                    <div>
                        <h1 className='font-bold md:text-2xl'>Toy<span className='text-blue-600'>Emporium</span></h1>
                        <p className='text-sm italic'>We are the best</p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal flex gap-2 font-semibold lg:gap-12">
                    <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/" >Home</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/allToys">All Toys</NavLink>
                    {
                        user?.email &&
                        <div className='flex gap-8'>
                            <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/myToys">My Toys</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/addToys">Add Toy</NavLink>
                        </div>
                    }
                    {/* <NavLink className={({ isActive }) => (isActive ? "text-[#742BFD]" : "")} to="/blogs">Blogs</NavLink> */}
                </ul>
            </div>
            <div className='md:hidden navbar-end relative'>
                <FaBars onClick={() => setSmDevice(!smDevice)}></FaBars>
                {
                    smDevice && <div className="navbar-center absolute top-10 -right-2">
                        <ul data-aos="fade-left" className="menu menu-horizontal p-3 flex flex-col bg-orange-400">
                            <NavLink className='nav-links' to="/">Home</NavLink>
                            <NavLink className='nav-links' to="/allToys">All Toys</NavLink>
                            {
                                user?.email &&
                                <div className='flex flex-col'>
                                    <NavLink className='nav-links mr-3' to="/myToys">My Toys</NavLink>
                                    <NavLink className='nav-links' to="/addToys">Add A Toy</NavLink>
                                </div>
                            }
                            <NavLink className='nav-links' to="/blogs">Blogs</NavLink>
                            {
                                user?.email ? <div className='flex'>                                   
                                    <button onClick={handleLogout} className='submit-button'>Logout</button>
                                </div>
                                    : <button className='submit-button'><NavLink to="/login">Login</NavLink></button>
                            }
                        </ul>

                    </div>
                }
            </div>
            <div className="navbar-end hidden md:flex">
                {
                    user?.email ? <div className='flex'>
                        <img title={user.displayName} className='h-12 w-12 rounded-full mr-3 border-2 border-blue-400' src={user.photoURL} alt="" />
                        <button onClick={handleLogout} className='submit-button'>Logout</button>
                    </div>
                        : <button className='submit-button'><NavLink to="/login">Login</NavLink></button>
                }
            </div>
        </div>
    );
};

export default Header;