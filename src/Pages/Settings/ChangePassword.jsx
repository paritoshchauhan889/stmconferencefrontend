import React from 'react'
import AdminSidebar from '../../Components/Layout/AdminMenu'

const ChangePassword = () => {
  return (
    <>
    <div className="d-flex">
    <AdminSidebar/>

<div className="container">
<form className="row g-3">
<h3 style={{textAlign:'center'}}>Update Profile</h3>

  <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
  </div>

  <div className="col-md-4">
    <label htmlFor="validationDefault01" className="form-label">Email</label>
    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required />
  </div>
 
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>

</div>

    </div>
    
    </>
  )
}

export default ChangePassword
