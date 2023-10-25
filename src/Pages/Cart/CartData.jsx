import CartProduct from "./CartProduct";

const CartData = (product) => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-10">Your Cart</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {
                product?.product?.map( item => <CartProduct key={item._id} item={item}></CartProduct>)
            }
        </div>
        </div>
    );
};

export default CartData;