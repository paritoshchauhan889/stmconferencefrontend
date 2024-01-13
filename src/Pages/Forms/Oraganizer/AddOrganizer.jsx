import React from 'react'
import { useState } from 'react'
import { addOrganizer } from '../../../api/Api' 
import Vieworganizer from './ViewOrganizer'
import { country } from '../../../Components/Country/Country'
import AdminSidebar from '../../../Components/Layout/AdminMenu'
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'


const AddOrganizer = ({userRole}) => {

  const dafaultValue = {
    organizerfullname: '',
    organizeremail: '',
    organizerphonenumber: '',
    designation:'',
    department:'',
    affilation:'',
    organizerimage: '',
    organizerkeypoints:'',
    organizeraddress: '',
    organizercountry: '',
    organizerstate: '',
    organizercity: '',
    organizerpincode: '',
    bio:'',
    profileurl: '',
    
  }

  const [organizer,setOrganizer]=useState(dafaultValue);
  
  // form value
      const onValueChange=(e)=>{
          setOrganizer({...organizer,[e.target.name]:e.target.value});
      }
  
      const addOrganizerDetails = async()=>{
        alert('Data Submitted successfully');
         await addOrganizer(organizer);
      }
  return (
    <>

      <div className="d-flex">
      {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}


        <div className="container mt-4 mb-3">
          <h4 className='text-center mt-2 mb-2'>Add Organizer</h4>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Full Name" required
                onChange={(e) => onValueChange(e)} name='organizerfullname'
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Email" required onChange={(e) => onValueChange(e)} name='organizeremail' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Phone Number" required onChange={(e) => onValueChange(e)} name='organizerphonenumber' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Designation</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Designation" required onChange={(e) => onValueChange(e)} name='designation' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Department</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Department" required onChange={(e) => onValueChange(e)} name='department' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Affilation</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Affilation" required onChange={(e) => onValueChange(e)} name='affilation' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Image Url</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image Url" required onChange={(e) => onValueChange(e)} name='organizerimage' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Key Points" required onChange={(e) => onValueChange(e)} name='organizerkeypoints' />

            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">Address</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='organizeraddress' />

            </div>
            <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Organizer Country</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='organizercountry'> 
    <option selected value="" >Choose... </option>
                {
                  country.map(name => (
                    <option key={name.name}>{name.name}</option>
                  ))
                }

    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">State</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='organizerstate' />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='organizercity' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">Pin Code</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='organizerpincode' />

            </div>
        
          

            <label htmlFor="validationCustom03" className="form-label">Bio</label>
            <textarea id="w3review" rows="4" cols="50" onChange={(e) => onValueChange(e)} name='bio' />
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">Profile url</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='profileurl' />

            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={() => addOrganizerDetails()}>Submit form</button>
            </div>
          </form>
          <h4 className='text-center'>All organizer Data</h4>
          <div className="overflow-scroll">

            <Vieworganizer/>

          </div>

        </div>

      </div>


    </>
  )
}

export default AddOrganizer