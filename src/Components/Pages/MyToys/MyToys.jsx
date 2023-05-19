import React, { useContext, useEffect } from 'react';
import { firebaseProvider } from '../../Providers/Provider';

const MyToys = () => {
    const { user, loading } = useContext(firebaseProvider)
    // if (loading) {
    //     return <div className='flex justify-center'><progress className="progress w-56"></progress></div>
    // }
    const url = `http://localhost:5000/addToy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])
    return (
        <div>
            my toys
        </div>
    );
};

export default MyToys;