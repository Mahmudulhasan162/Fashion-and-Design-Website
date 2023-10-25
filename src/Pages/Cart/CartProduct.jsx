

const CartProduct = ({item}) => {
    const {photo, name, brand, price} = item || {};
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{brand}</p>
    <p>Price : ${price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CartProduct;