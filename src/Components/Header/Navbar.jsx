import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col justify-around items-center px-4 py-3">
            <div>
                <img className="w-[150px]" src="https://i.ibb.co/wgD11nB/175567443-wardrobe-or-fashion-logo-design-with-using-hanger-icon-design.jpg" alt="" />
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
            to="/add"
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