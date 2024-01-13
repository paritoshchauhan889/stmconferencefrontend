
import React,{useState} from 'react'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { URL } from '../../../api/Api';
import AdminSidebar from '../../../Components/Layout/AdminMenu';


const Role = () => {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [answer,setAnswer] = useState("")
  const [role, setRole] = useState("")
  const navigate = useNavigate();

  // form function 
const handleSubmit = async(e) =>{
  e.preventDefault()
try {
const res =await axios.post(`${URL}/auth/register`,{name, email,password,answer, role});
if(res.data.success){
  toast.success(res.data.message)
  navigate('/dashboard/admin/role');
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
  <div className="d-flex">
    <AdminSidebar/>
  <section className="vh-100 bg-image "  style={{margin:'auto'}} >
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card" style={{borderRadius: 15}} >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example1cg">Your name</label>

                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Enter name' value={name}  onChange={(e) => setName(e.target.value)} required/>
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
                <div className="col-md-3">
      <label htmlFor="validationCustom04" className="form-label">State</label>
      <select
  className="form-select"
  id="validationCustom04"
  required
  value={role}
  onChange={(e) => setRole(Number(e.target.value))}
>
  <option value="" disabled>Choose...</option>
  <option value={0}>User</option>
  <option value={1}>Admin</option>
  <option value={2}>Manager</option>
</select>
 
    </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Add User</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
 

    
    </>
  )
}

export default Role