/* eslint-disable react/prop-types */


const CategoryBrand = ({brand}) => {
    const {id, brand_name, brand_picture} = brand || {};
    return (
        <div className="border-2 border-black  h-[250px] px-5 py-6 rounded-xl">
            <img className=" h-[150px] flex mx-auto" src={brand_picture} alt="" />
            <h1 className=" text-3xl font-semibold text-center">{brand_name}</h1>
        </div>
    );
};

export default CategoryBrand;