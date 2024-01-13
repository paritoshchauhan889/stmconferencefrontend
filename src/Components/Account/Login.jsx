import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../../Context/auth";
import { URL } from "../../api/Api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/auth/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };




  return (
    <>
  
  <section className="vh-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Login Page</h2>
              <form onSubmit={handleSubmit}>
              
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>

                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter email' name='email'  value={email}
              onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-outline mb-4">
                <input
  type={showPassword ? "text" : "password"}
  id="form3Example4cg"
  className="form-control form-control-lg"
  placeholder="Enter password"
  name="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                </div>
                <button
  type="button"
  className="btn btn-secondary"
  onClick={() => setShowPassword(!showPassword)}
>
  {showPassword ? "Hide Password" : "Show Password"}
</button>
               
                          
                <div className="m-4">
                  <Link to='/reset-password'>Forgot's Password</Link>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Login</button>
                </div>
                <div className="d-flex justify-content-center">
                  <span>Don Have't and Account Please!<Link to='/register' style={{color:"Highlight"}}>Register </Link></span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Login