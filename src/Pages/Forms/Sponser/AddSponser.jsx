import React from 'react'
import { useState } from 'react'
import { URL } from '../../../api/Api' 
import ViewSponser from './ViewSponser'
import { country } from '../../../Components/Country/Country'
import axios from 'axios'
import AdminSidebar from '../../../Components/Layout/AdminMenu'
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'



const SponserForm = ({userRole}) => {

    const defaultValue={
        sponserfullname:'',
        sponseremail:'',
        sponserphonenumber:'',
        sponserimage:'',
        sponseraddress:'',
        sponsercountry:'',
        sponserstate:'',
        sponsercity:'',
        sponserpincode:'',
        sponserkeypoints:'',
        sponserabout:'',
    }

const [sponser, setSponser] = useState(defaultValue);

const onValueChange = (e) => {
  setSponser({ ...sponser, [e.target.name]: e.target.value });
};

const addSponser = async (sponserData) => {
  try {
    const response = await axios.post(`${URL}/sponser/add-sponser`, sponserData);

    if (response.status === 200) {
      console.log('Sponser added successfully:', response.data);
      // You can perform additional actions if needed
    } else {
      console.error('Failed to add sponser:', response.data);
      // Handle the error appropriately
    }
  } catch (error) {
    console.error('An error occurred while adding sponser:', error);
    // Handle the error appropriately
  }
};

const addSponserDetails = async () => {
  alert('Data Submitted successfully');
  await addSponser(sponser);
};
  return (
    <>

<div className="d-flex">
{userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}


<div className="container mt-4 mb-3">
        <h4 className='text-center mt-2 mb-2'>Add Sponser</h4>
     <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Full Name" required 
    onChange={(e)=>onValueChange(e)} name='sponserfullname' 
    />
  
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Email</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Email" required onChange={(e)=>onValueChange(e)} name='sponseremail' />
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validation" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Phone Number" required  onChange={(e)=>onValueChange(e)} name='sponserphonenumber'/>
 
  </div>
  <div className="col-md-4">
    <label htmlFor="validation" className="form-label">Image Url</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Phone Number" required onChange={(e)=>onValueChange(e)} name='sponserimage' />
 
  </div>
  <div className="col-md-12">
    <label htmlFor="validationCustom03" className="form-label">Address</label>
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponseraddress'/>

  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Sponser Country</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='sponsercountry'> 
    <option selected value="" >Choose... </option>
                {country.map(name => (
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
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponserstate'/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponsercity'/>

  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom03" className="form-label">Pin Code</label>
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponserpincode'/>

  </div>
  <div className="col-md-12">
    <label htmlFor="validationCustom03" className="form-label">Key Points</label>
    <input type="text" className="form-control" id="validationCustom03" required   onChange={(e)=>onValueChange(e)} name='sponserkeypoints'/>

  </div>

  <label htmlFor="validationCustom03" className="form-label">About</label>
  <textarea id="w3review"  rows="4" cols="50" onChange={(e)=>onValueChange(e)} name='sponserabout'/>

  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=> addSponserDetails()}>Submit form</button>
  </div>
</form>
<h4 className='text-center'>All Sponser Data</h4>
<div className="overflow-scroll">
 
<ViewSponser/>

</div>

    </div>

   </div>
  
   
    </>
  )
}

export default SponserForm