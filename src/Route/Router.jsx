
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayout from '../MainLayout/MainLayout';
import AddProduct from '../Pages/Add Product/AddProduct';
import Login from '../Pages/Login/Login';
import PrivateRoute from '../Components/Firebase/PrivateRoute';
import Error from '../Components/Error/Error';
import Register from '../Components/Register/Register';
import Brand from '../Components/Categories/Brand';
import Itemdetails from '../Components/Details/Itemdetails';
import Cart from '../Pages/Cart/Cart';
import Update from '../Components/Update/Update';

const Router = createBrowserRouter([
    {
        path : "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children : [
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch("https://fashion-store-server-alpha.vercel.app/brands")
            },
            {
                path : "/products",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path : "/login",
                element: <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            },
            {
                path: "/brand/:id",
                element : <PrivateRoute><Brand></Brand></PrivateRoute>,
                loader : ({ params }) => fetch(`https://fashion-store-server-alpha.vercel.app/products?brandId=${params.id}`),
            },
            {
                path : "/brands/:id",
                element : <PrivateRoute><Itemdetails></Itemdetails></PrivateRoute>,
                loader : () => fetch('https://fashion-store-server-alpha.vercel.app/products'),
            },
            {
                path : "/cart",
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader : ()=> fetch('https://fashion-store-server-alpha.vercel.app/cart'),
            },
            {
                path : "/update/:id",
                element : <PrivateRoute><Update></Update></PrivateRoute>,
                loader : ({params}) => fetch(`https://fashion-store-server-alpha.vercel.app/products/${params.id}`)

            }
        ]
        
    }
])

export default Router;