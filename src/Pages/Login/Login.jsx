import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const handleLogin = () => {
    if(email, password){
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
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          <button  onClick={handleGoogleLogIn} className="btn btn-primary">Sign In with Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;