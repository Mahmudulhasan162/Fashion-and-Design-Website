import { useLoaderData } from "react-router-dom";
import BrandName from "./BrandName";

const Brand = () => {
    const productData = useLoaderData();
    return (

        <BrandName products={productData}></BrandName>
    );
};

export default Brand;