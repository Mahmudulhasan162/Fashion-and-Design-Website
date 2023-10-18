
import CategoryBrand from "./CategoryBrand";

const Categories = (AllBrands) => {
    
    

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-16">Brand Names</h1>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10 w-full mx-auto justify-center items-center">

{
    AllBrands?.AllBrands?.map(brand => <CategoryBrand key={brand.id} brand={brand}></CategoryBrand>)
}
</div>
        </div>
    );
};

export default Categories;