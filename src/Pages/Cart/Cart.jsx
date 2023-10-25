import { useLoaderData } from "react-router-dom";
import CartData from "./CartData";

const Cart = () => {
    const product = useLoaderData();
    return (
        <div>
            <CartData product={product}></CartData>
        </div>
    );
};

export default Cart;