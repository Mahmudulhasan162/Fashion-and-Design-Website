import BrandProduct from "./BrandProduct";

const BrandName = (products) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {
                products?.products?.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
            }
        </div>
        </div>
    );
};

export default BrandName;