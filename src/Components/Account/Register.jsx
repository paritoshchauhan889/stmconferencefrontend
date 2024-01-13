
import React,{useState} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios';
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { URL } from '../../api/Api';

const Register = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [answer,setAnswer] = useState("")
  const navigate = useNavigate();

  // form function 
const handleSubmit = async(e) =>{
  e.preventDefault()
try {
const res =await axios.post(`${URL}/auth/register`,{name, email,password,answer});
if(res.data.success){
  toast.success(res.data.message)
  navigate('/login');
}else{
  toast.error(res.data.message)
}
} catch (error) {
console.log(error);
toast.error('Something Went Wrong');

}
}
  return (
    <>
  
<div className="signup">
<div className="container p-3">
      <div className="row d-flex justify-content-center m-4">
        <div className="col-5">
          <div className="card" style={{borderRadius: 15}} >
            <div className="card-body p-4">
              <h2 className="text-uppercase text-center mb-4">Create an account</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1cg">Your name</label>

                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Enter username' value={name}  onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>

                  <input type="email" className="form-control form-control-lg" placeholder='Enter email'  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
               
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" placeholder='Enter password'  value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  <label className="form-label" >Password</label>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" >Your Private Key</label>

                <input type="password" className="form-control"  required  placeholder='What Is Your nick Name' value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                </div>
             
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
</div>

    
    </>
  )
}

export default Register