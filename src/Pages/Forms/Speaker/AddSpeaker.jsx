import React from 'react'
import { useState } from 'react'
import { addSpeaker } from '../../../api/Api'
import ViewSpeaker from './ViewSpeaker'
import { country } from '../../../Components/Country/Country'
import AdminSidebar from '../../../Components/Layout/AdminMenu'
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'


const SpeakerForm = ({userRole}) => {

  const dafaultValue = {
    speakerfullname: '',
    speakeremail: '',
    speakerphonenumber: '',
    designation: '',
    department: '',
    affilation: '',
    speakerimage: '',
    speakerkeypoints: '',
    speakeraddress: '',
    speakercountry: '',
    speakerstate: '',
    speakercity: '',
    speakerpincode: '',
    bio: '',
    profileurl: '',

  }

  const [speaker, setSpeaker] = useState(dafaultValue);

  // form value
  const onValueChange = (e) => {
    setSpeaker({ ...speaker, [e.target.name]: e.target.value });
  }

  const addSpeakerDetails = async () => {
    alert('Data Submitted successfully');
    await addSpeaker(speaker);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    addSpeakerDetails();
  };
  return (
    <>

      <div className="d-flex">
      {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}


        <div className="container mt-4 mb-3">
          <h4 className='text-center mt-2 mb-2'>Add speaker</h4>
          <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Full Name" required
                onChange={(e) => onValueChange(e)} name='speakerfullname'
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Email" required onChange={(e) => onValueChange(e)} name='speakeremail' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Phone Number" required onChange={(e) => onValueChange(e)} name='speakerphonenumber' />

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
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image Url" required onChange={(e) => onValueChange(e)} name='speakerimage' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Key Points" required onChange={(e) => onValueChange(e)} name='speakerkeypoints' />

            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">Address</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='speakeraddress' />

            </div>
            <div className="col-md-3">
              <label for="validationCustom04" className="form-label">Speaker Country</label>
              <select className="form-select" id="validationCustom04" required onChange={(e) => onValueChange(e)} name='speakercountry'>
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
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='speakerstate' />
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='speakercity' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">Pin Code</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='speakerpincode' />

            </div>



            <label htmlFor="validationCustom03" className="form-label">Bio</label>
            <textarea id="w3review" rows="4" cols="50" onChange={(e) => onValueChange(e)} name='bio' />
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">Profile url</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='profileurl' />

            </div>
            <div className="col-12">
              <button className="btn btn-primary" type='submit'>Submit form</button>
            </div>
          </form>
          <h4 className='text-center'>All Speaker Data</h4>
          <div className="overflow-scroll">

            <ViewSpeaker />

          </div>

        </div>

      </div>


    </>
  )
}

export default SpeakerForm