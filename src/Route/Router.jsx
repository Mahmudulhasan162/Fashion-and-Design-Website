
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import MainLayout from '../MainLayout/MainLayout';

const Router = createBrowserRouter([
    {
        path : "/",
        element: <MainLayout></MainLayout>,
        children : [
            {
                path:"/",
                element: <Home></Home>,
                loader: () => fetch("/brand.json")
            }
        ]
        
    }
])

export default Router;