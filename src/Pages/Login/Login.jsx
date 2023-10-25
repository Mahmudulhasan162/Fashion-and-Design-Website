/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Firebase/AuthProvider";
import swal from "sweetalert";



const Login = () => {
    const { googleLogIn, Login } = useContext(AuthContext);
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const Location= useLocation();
  const Navigate = useNavigate();

  const handleGoogleLogIn = () =>{
    googleLogIn().then((result) => {
      swal("Logged In", "You have successfully logged in", "success");
      Navigate(Location?.state ? Location.state : "/")
      console.log(result.user);
    })
  }
  const handleLogin = (e) => {
    e.preventDefault();
    if(email && password){
      Login(email, password).then(() => {
        swal("Logged In", "You have successfully logged in", "success");

        Navigate(Location?.state ? Location.state : "/")
      })
      .catch(()=> {
        swal("User Not Found", "You are not a registered user", "warning");
      })
    }
 }

    return (
        <div>
            <h3 className=" text-center uppercase block font-sans text-4xl font-bold leading-snug tracking-normal text-black antialiased">
      Log In
    </h3>
            <div className="hero min-h-screen ">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className="w-[400px]" src="https://i.ibb.co/ypttXxN/undraw-authentication-re-svpt.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button  onClick={handleGoogleLogIn} className="btn btn-primary">Sign In with Google</button>
        </div>
        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
      Don't have an account?
      <Link
        to="/register"
        className="ml-1 block font-sans text-sm font-bold leading-normal text-[#1d1846] antialiased"
      >
        Register
      </Link>
    </p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;