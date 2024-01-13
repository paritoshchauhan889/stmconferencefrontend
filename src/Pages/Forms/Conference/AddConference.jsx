import React, { useState,useEffect } from 'react'
import { addConference } from '../../../api/Api'
import {getSponsers,getVenues,getSpeakers, getOrganizers}  from '../../../api/Api';
import ViewConference from './ViewConference';
import AdminSidebar from '../../../Components/Layout/AdminMenu';
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'

const AddConference = ({ userRole }) => {



  const [organizers, setOrganizers]= useState ([]);

  useEffect(()=>{
getAllOrganizers();
  },[]);

  const getAllOrganizers = async()=>{
    let response =  await getOrganizers();
    setOrganizers(response.data);
 
   }
  const [venues, setVenue]= useState ([]);

  useEffect(()=>{
    getAllVenues();
  },[]);

  const getAllVenues = async()=>{
    let response =  await getVenues();
    setVenue(response.data);
 
   }
  const [speakers, setSpeakers]= useState ([]);

  useEffect(()=>{
getAllSpeakers();
  },[]);

  const getAllSpeakers = async()=>{
    let response =  await getSpeakers();
    setSpeakers(response.data);
 
   }


  const [sponsers, setSponsers]= useState ([]);

  useEffect(()=>{
getAllSponsers();
  },[]);

  const getAllSponsers = async()=>{
    let response =  await getSponsers();
    setSponsers(response.data);
   
 
   }




  const dafaultValue = {

    conferencetitle: '',
    conferencestartdate: '',
    conferencestarttime:'',
    conferenceenddate: '',
    conferenceendtime:'',
    conferenceimage: '',
    sponsersemail: '',
    speakersemail: '',
    venuename: '',
    feedbackurl: '',
    description: '',
    manuscriptsubmissionurl: '',
    manuscriptsubmissiondate: '',
    manuscriptenddate:'',
    onlineoffline:'',
    conferencekeypoints:'',
  }
// const [options] =useState(data);
  const [conference, setConference] = useState(dafaultValue);

  // form value
  const onValueChange = (e) => {
    setConference({ ...conference, [e.target.name]: e.target.value });
  }

  const addConferenceDetails = async () => {
    alert('data submitted successfully');
    await addConference(conference);

  }
  return (
    <>

      <div className="d-flex">
      {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}

        <div className="container">
          <h4 className='text-center mt-4 mb-4'>Add Conference</h4>
          <form className="row g-3 needs-validation" noValidate>
           
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Conference Title</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Conference Title" required
                onChange={(e) => onValueChange(e)} name='conferencetitle'
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Conference Start Date</label>
              <input type="date" className="form-control" id="validationCustom02" placeholder="Start Date" required onChange={(e) => onValueChange(e)} name='conferencestartdate' />
              
            </div>
            <div className="col-md-2">
              <label htmlFor="validationCustom02" className="form-label">Conference Start Time</label>
              <input type="time" className="form-control" id="validationCustom02" placeholder="Start Date" required onChange={(e) => onValueChange(e)} name='conferencestarttime' />
              
            </div>
            <div className="col-md-2">
              <label htmlFor="validation" className="form-label">Conference End Date</label>
              <input type="date" className="form-control" id="validationCustom02" placeholder="End Date" required onChange={(e) => onValueChange(e)} name='conferenceenddate' />

            </div>
            <div className="col-md-2">
              <label htmlFor="validation" className="form-label">Conference End Time</label>
              <input type="time" className="form-control" id="validationCustom02" placeholder="End Date" required onChange={(e) => onValueChange(e)} name='conferenceendtime' />

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Conference Image</label>
              <input type="url" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='conferenceimage' />

            </div>
            <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Sponser Email</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='sponsersemail'> 
    <option selected value="" >Choose... </option>
                {
                  sponsers.map(name => (
                    <option key={name.sponseremail}>{name.sponseremail}</option>
                  ))
                }

    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
         

  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Speaker Email</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='speakersemail'> 
    <option selected value="" >Choose... </option>
                {
                  speakers.map(name => (
                    <option key={name.speakeremail}>{name.speakeremail}</option>
                  ))
                }

    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Organizer Name</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='organizername'> 
    <option selected value="" >Choose... </option>
                {
                  organizers.map(name => (
                    <option key={name.organizerfullname}>{name.organizerfullname}</option>
                  ))
                }

    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Venue Name & Address</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='venuename'> 
    <option selected value="" >Choose... </option>
                {
                  venues.map(name => (
                    <option key={name.nameofplace}>{name.nameofplace}, {name.address}</option>
                  ))
                }

    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
 
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Feedback Url</label>
              <input type="text" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='feedbackurl' />
              
            </div>



            <label htmlFor="validationCustom03" className="form-label">Description</label>
            <textarea rows="5" cols="50" onChange={(e) => onValueChange(e)} name='description' />
           
            <div className="col-md-3">
              <label htmlFor="validationCustom02" className="form-label">Conference Broucher Url</label>
              <input type="url" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='manuscriptsubmissionurl' />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
           
            <div className="col-md-3">
              <label htmlFor="validationCustom02" className="form-label">Manuscript Submission Date</label>
              <input type="date" className="form-control" id="validationCustom02" required onChange={(e) => onValueChange(e)} name='manuscriptsubmissiondate' />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validation" className="form-label">Manuscript End Date</label>
              <input type="date" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='manuscriptenddate' />

            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">online & Offline<strong>Address</strong></label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='onlineoffline' />

            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='conferencekeypoints' />

            </div>
          
          

            

            <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={() => addConferenceDetails()}>Submit form</button>
            </div>
          </form>
          <h4 className='text-center'>All Conference Data</h4>
          <div className="overflow-scroll">
 
<ViewConference/>

</div>

        </div>

      </div>


    </>
  )
}

export default AddConference