import React, { useContext } from 'react';
import { firebaseProvider } from '../Providers/Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(firebaseProvider)
    const location = useLocation()

    if (loading) {
        return <div className='flex justify-center mt-10'><progress className="progress w-56"></progress></div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;