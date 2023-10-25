/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const CartProduct = ({item}) => {
    const {_id,photo, name, brand, price} = item || {};

    const handleDelete = _id =>{
      console.log(_id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`http://localhost:5000/cart/${_id}`,{
            method : "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            Swal.fire(
              'Deleted!',
              'Your product has been deleted.',
              'success'
            )
          })
        }
      })
    }
    return (
        <div>
            <div className=" h-96 border-2 border-black flex">
  <figure><img className="h-full" src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{brand}</p>
    <p>Price : ${price}</p>
    <div className="card-actions justify-end">
      <button onClick={ ()=> handleDelete(_id) } className="text-white bg-black px-3 py-2 rounded">Remove</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CartProduct;