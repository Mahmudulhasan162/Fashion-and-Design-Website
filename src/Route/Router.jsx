
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayout from '../MainLayout/MainLayout';
import AddProduct from '../Pages/Add Product/AddProduct';
import Login from '../Pages/Login/Login';
import PrivateRoute from '../Components/Firebase/PrivateRoute';
import Error from '../Components/Error/Error';
import Register from '../Components/Register/Register';

const Router = createBrowserRouter([
    {
        path : "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children : [
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch("/brand.json")
            },
            {
                path : "/add",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path : "/login",
                element: <Login></Login>
            },
            {
                path : "/register",
                element : <Register></Register>
            }
        ]
        
    }
])

export default Router;