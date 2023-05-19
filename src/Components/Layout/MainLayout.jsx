import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-100px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;