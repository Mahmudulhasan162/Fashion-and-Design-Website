import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center my-10 space-y-10">
            <h1 className="text-4xl font-bold">Error 404!!</h1>
            <p className="text-xl font-medium">Page not found</p>
            <img className="w-[400px]" src="https://i.ibb.co/9Zz7mRS/undraw-page-not-found-re-e9o6.jpg" alt="" />
            <Link to="/"><button className="text-white bg-black px-4 py-2">Go Back Home</button></Link>
        </div>
    );
};

export default Error;