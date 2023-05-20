import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({addedToy, handleDelete,handleUpdate}) => {
    const {_id, price, quantity, seller, toy, rating, description, email} = addedToy;
   
    return (
        <tr>          
            <td>{seller}</td>
            <td>{toy}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{email}</td>
            <td>{description}</td>
            <td>
                <Link to={`/myToys/${_id}`}><button onClick={()=> handleUpdate(_id)} className='submit-button mr-2'>Update</button></Link>
                <button onClick={()=>handleDelete(_id)} className='delete-button'>Delete</button>
            </td>                       
        </tr>
    );
};

export default MyToysRow;