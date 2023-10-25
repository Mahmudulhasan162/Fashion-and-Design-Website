import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Navbar = () => {
    const {user,Logout} = useContext(AuthContext)

    const handleLogout= ()=>{
        Logout().then()
    }
    return (
        <div className="flex flex-col justify-around items-center px-4 py-3">
            <div className="flex flex-col md:flex-row">
                <div>
                <img className="w-[150px]" src="https://i.ibb.co/wgD11nB/175567443-wardrobe-or-fashion-logo-design-with-using-hanger-icon-design.jpg" alt="" />
                </div>
                <div className="flex gap-5 justify-center items-center text-right">
                {user &&  <img className="rounded-full border-2 border-black h-10 w-10" src={user?.photoURL ? user.photoURL : "../../../Images/dp.jpg"} alt="" />}
            {user &&  <p>{user?.displayName}</p>}
            { user && <button onClick={handleLogout} className="px-4 py-1 text-white bg-black rounded "> Logout</button> }
                </div>
            </div>
            <div className="flex gap-10 justify-center items-center text-lg font-medium">
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline" : ""
            }
            >
            Home
            </NavLink>
            <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline" : ""
            }
            >
            Add Product
            </NavLink>
            <NavLink
            to="/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline" : ""
            }
            >
            My Cart
            </NavLink>
            <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline" : ""
            }
            >
            Login
            </NavLink>
            <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline" : ""
            }
            >
            Register
            </NavLink>

            </div>
        </div>
    );
};

export default Navbar;