import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import swal from "sweetalert";

const Register = () => {
    const {Register} = useContext(AuthContext);
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const Location= useLocation();
    const Navigate = useNavigate();

    const handleRegistration= (e)  =>{
        e.preventDefault();
        if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)){
            swal("Passoword Not Correct!", "Minimum six characters, one special character and at least one capital letter needed!", "error");
        }else{
            if(email){
                Register(email, password)
                .then(result=>console.log(result.user))
                .then(()=>{
                    Navigate(Location?.state ? Location.state : "/");
                swal("Welcome!", "You have registered successfully!", "success");
                })
                .catch((error)=>{
                    console.error("Error : ", error);
                })
            }
        }
    }
    return (
        <div>
            <h3 className=" text-center uppercase block font-sans text-4xl font-bold leading-snug tracking-normal text-black antialiased">
        Register
    </h3>
            <div className="hero min-h-screen ">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className="w-[400px]" src="https://i.ibb.co/BHJvN4x/undraw-sign-up-n6im.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input  type="name" placeholder="name" className="input input-bordered" required />
        </div>
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
          <button onClick={handleRegistration} className="btn btn-primary">Register</button>
        </div>
        <p className="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
        Already have an account? 
      <Link
        to="/login"
        className="ml-1 block font-sans text-sm font-bold leading-normal text-[#1d1846] antialiased"
      >
        Login
      </Link>
    </p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;