import { useLoaderData } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Banner from "../../Components/Header/Banner";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import OnePlace from "../../Components/OnePlace/OnePlace";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Hero></Hero>
            <Categories AllBrands={brands}></Categories>
            <OnePlace></OnePlace>
            <Footer></Footer>
        </div>
    );
};

export default Home;