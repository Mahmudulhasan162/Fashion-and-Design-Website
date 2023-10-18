import { useLoaderData } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Banner from "../../Components/Header/Banner";

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Categories AllBrands={brands}></Categories>
        </div>
    );
};

export default Home;