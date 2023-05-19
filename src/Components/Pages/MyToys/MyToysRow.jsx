import React from 'react';

const MyToysRow = ({addedToy, handleDelete}) => {
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
                <button className='submit-button mr-2'>Update</button>
                <button onClick={()=>handleDelete(_id)} className='delete-button'>Delete</button>
            </td>                       
        </tr>
    );
};

export default MyToysRow;