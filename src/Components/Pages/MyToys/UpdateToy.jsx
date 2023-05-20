// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const UpdateToy = () => {
//     const toyUpdate = useLoaderData()
//     const {_id, quantity, price, seller, toy, rating, email} = toyUpdate;
//     const handleUpdateToy = () => {
//         e.preventDefault();
//         const form = e.target;
//         const price = form.price.value;
//         const quantity = form.quantity.value;
//         const description = form.description.value;
//         const updatedToy = {
//             price : price,
//             quantity: quantity,
//             toy : toy,           
//             rating : rating,           
//             email : email,           
//             seller : seller, 
//             description: description          
//         }

//         fetch(`https://animal-toys-server.vercel.app/allToy/${_id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(updatedToy)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//             })
//     }
//     return (
//         <form onSubmit={handleUpdateToy} className='bg-green-400 w-3/4 mx-auto mb-5 py-5 rounded-lg'>
//             <div className="card-body">
//                 <div>                   
//                     <div className="form-control">
//                         <input required type="text" name='price' placeholder="Price" className="mb-3 input input-bordered" />
//                     </div>
//                     <div className="form-control">
//                         <input required type="text" name='quantity' placeholder="Quantity" className="mb-3 input input-bordered" />
//                     </div>                    
//                 </div>                
//             </div>
//             <div className='px-8'>
//                 <textarea defaultValue={'change'} className='border-2 w-full pl-3 rounded-lg py-2 mb-3' name="description" cols="30" rows="5"></textarea>
//                 <input className='submit-button w-full mb-3' type="submit" value="Add Toy" />
//             </div>
//         </form>
//     );
// };

// export default UpdateToy;