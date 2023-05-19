import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../../assets/errorImage2.png'

const WrongURL = () => {
    const { error, status } = useRouteError();
    return (
        <div className='flex justify-center items-center mt-14'>
            <div className='flex flex-col items-center'>
                <img className='h-48 rounded-lg mb-3' src={errorImage} alt="" />
                <p className='text-xl'>{error.message}</p>
                <Link to="/"> <button className="submit-button mt-3">Back to home</button></Link>
            </div>
        </div>
    );
};

export default WrongURL;