import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Itemdetails = () => {
    const productData= useLoaderData();
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const findProduct = productData?.find(product => product._id ==id)
        setProduct(findProduct)
    },[id, productData])
   if(!product){
    return <div>loading</div>

   }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await fetch("http://localhost:5000/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                alert("Product added to cart!");
                history.push("/");
            } else {
                alert("Failed to add product to cart.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div  className="max-w-[700px] flex flex-col justify-center items-center mx-auto mt-10 ">
        <img className="w-[700px] border-4 border-black" src={product.photo} alt="" />
        <div className="w-[700px] p-5 pt-0 space-y-5 text-left border-4 border-black">
        <h1 className="text-3xl font-bold ">{product.name}</h1>
        <p className="text-xl font-medium">Brand : {product.brand}</p>
        <p className="text-xl font-medium">{product.description}</p>
        <p className="text-2xl font-bold">Price: ${product.price}</p>
        </div>
        
        <button onClick={handleSubmit} className="text-white bg-black px-5 py-4 rounded-lg my-10">Add to Cart</button>
    </div>
    );
};

export default Itemdetails;