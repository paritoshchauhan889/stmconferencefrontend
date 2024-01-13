import React, { useState}  from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios'
import AdminSidebar from '../../../Components/Layout/AdminMenu';
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'

const EditUser = ({ userRole }) => {

    const localhost=URL;
  const navigate =useNavigate();

  // state
  const [inputs, setInputs] =useState({
    username:'',
    email:'',
    password:'',
    role:''
  })

  // handle input change
  const handleChange=(e)=>{
setInputs(prevState =>({
  ...prevState,
  [e.target.name]:e.target.value
}))
  }
  // form handle
  const handleSubmit = async(e)  =>{
    e.preventDefault();
    try {
    const {data} = await axios.post(`${localhost}/auth/edit-user`,{username:inputs.username,email:inputs.email,password:inputs.password,role:inputs.role})
    if(data.success){
      alert("User Update Successfully"); 
      navigate("/login");
    }
   
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <>
      <div className="d-flex">
      {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}
 
<div className="container mb-4">
<h4 className='text-center mt-2 mb-2'>Update User</h4>
<div className="container">
<form className="row g-3">

<div className="col-md-4">
  <label htmlFor="validationDefaultUsername" className="form-label">Full Name</label>
  <div className="input-group">
    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
  </div>
</div>
<div className="col-md-4">
  <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
  <div className="input-group">
    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
  </div>
</div>

<div className="col-md-4">
  <label htmlFor="validationDefaultUsername" className="form-label">Password</label>
  <div className="input-group">
    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
  </div>
</div>


<div class="col-md-4">
    <label for="validationDefault04" class="form-label">Role</label>
    <select class="form-select" id="validationDefault04" required>
      <option>Admin</option>
      <option>Manager</option>
      <option>User</option>
    </select>
  </div>



<div className="col-12">
  <button className="btn btn-primary" type="submit">Update User</button>
</div>
</form>
</div>

</div>
</div>
    </>
  )
}

export default EditUser
