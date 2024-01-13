import React, { useState } from 'react'
import axios from "axios"
import { URL } from '../../../api/Api'
import { useNavigate } from "react-router-dom"
import ViewImage from './ViewImage'
import AdminSidebar from '../../../Components/Layout/AdminMenu'
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'

const AddMedia = ({ userRole }) => {

  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const addFileData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("name", name);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post(`${URL}/image/upload`, formData, config);


    if (res.status === 200) {
      alert('File Upload Successfully')
 // Redirect based on user role
 if (userRole === 'admin') {
  navigate("/dashboard/admin/add-speaker");
} else if (userRole === 'manager') {
  navigate("/dashboard/manager/add-speaker");
}
} else {
alert("Error");
}
  }

  return (
    <>

      <div className="d-flex">
        {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}
        <div className='container mt-3'>
        <h3 className='text-center'>Upload your File Here</h3>

        <form className="row g-2 needs-validation" >
          <div className="col-md-4">
            <label htmlFor="validationCustom01" className="form-label">File Name</label>
            <input type="text" className="form-control" id="validationCustom01" value={name} onChange={(e) => setName(e.target.value)} required />

          </div>
          <div className="col-md-4" style={{marginTop:'40px'}}>
            <input type="file" className="form-control" aria-label="file example" onChange={(e) => setFile(e.target.files[0])} required />
          </div>

         <div className="col-md-4" style={{marginTop:'20px'}}>
         <button className='btn btn-outline-primary' type="submit" onClick={addFileData}>
            Submit
          </button>
         </div>

        </form>

<span style={{color:'red', margin:'5px'}}>File Size Less Than 10 MB</span>

<div className="mt-4" >
<ViewImage/>
</div>

      </div>
      </div>
     
    </>
  )
}

export default AddMedia