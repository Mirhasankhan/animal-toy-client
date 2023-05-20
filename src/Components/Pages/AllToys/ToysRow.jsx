import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({ toys, index }) => {
    const { _id, quantity, price, toy, seller, subCategory } = toys;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{seller}</td>
            <td>{toy}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{subCategory}</td>
            <td>
                <Link to={`/allToys/${_id}`}>
                    <button className='submit-button'>See Details</button>
                </Link>
            </td>
        </tr>
    );
};

export default ToysRow;