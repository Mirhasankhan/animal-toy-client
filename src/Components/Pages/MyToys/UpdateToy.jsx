import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {
    const toyUpdate = useLoaderData()
    return (
        <div>
            update here
        </div>
    );
};

export default UpdateToy;