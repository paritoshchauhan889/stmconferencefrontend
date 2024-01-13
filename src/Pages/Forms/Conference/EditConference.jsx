import React, { useState,useEffect } from 'react'
import { editConference, getConference,getSponsers,getVenues, getSpeakers,  getOrganizers } from '../../../api/Api' 
import { useParams} from 'react-router-dom';
import AdminSidebar from '../../../Components/Layout/AdminMenu';

const EditConference = () => {

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
    conferencestarttime: '',
    conferenceenddate: '',
    conferenceendtime: '',
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

  const [conference, setConference]=useState(dafaultValue);

  
  const {id} = useParams();
  
  useEffect(()=>{
    loadConferenceDetails();
  },[])
  
  const loadConferenceDetails= async()=>{
  const response = await  getConference(id);
  setConference(response.data);
  }
  
    
  
  
  // form value
      const onValueChange=(e)=>{
        setConference({...conference,[e.target.name]:e.target.value});
      }
  
      const editConferenceDetails = async()=>{
        alert('data Updated successfully');
         await editConference(conference,id);
  
  
      }
  return (
    <>

      <div className="d-flex">
        <AdminSidebar/>

        <div className="container">
          <h4 className='text-center mt-4 mb-4'>Edit Conference</h4>
          <form className="row g-3 needs-validation" noValidate>
           
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Conference Title</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Conference Title" required
                onChange={(e) => onValueChange(e)} name='conferencetitle' value={conference.conferencetitle}
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Conference Start Date</label>
              <input type="date" className="form-control" id="validationCustom02" placeholder="Start Date" required onChange={(e) => onValueChange(e)} name='conferencestartdate' value={conference.conferencestartdate}/>
              
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Conference Start Time</label>
              <input type="time" className="form-control" id="validationCustom02" placeholder="Start Date" required onChange={(e) => onValueChange(e)} name='conferencestarttime' value={conference.conferencestarttime}/>
              
            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Conference End Date</label>
              <input type="datetime-local" className="form-control" id="validationCustom02" placeholder="End Date" required onChange={(e) => onValueChange(e)} name='conferenceenddate' value={conference.conferenceendtime}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Conference End Time</label>
              <input type="time" className="form-control" id="validationCustom02" placeholder="End Date" required onChange={(e) => onValueChange(e)} name='conferenceendtime' value={conference.conferenceenddate}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Conference Image</label>
              <input type="url" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='conferenceimage' value={conference.conferenceimage} />

            </div>
            <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Sponser Email</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='sponsersemail' value={conference.sponsersemail}> 
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
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='speakersemail' value={conference.speakersemail}> 
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
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='venuename' value={conference.venuename}> 
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
              <input type="text" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='feedbackurl' value={conference.feedbackurl} />
              
            </div>



            <label htmlFor="validationCustom03" className="form-label">Description</label>
            <textarea rows="5" cols="50" onChange={(e) => onValueChange(e)} name='description' value={conference.description}/>
           
            <div className="col-md-3">
              <label htmlFor="validationCustom02" className="form-label">Manuscript Submission Url</label>
              <input type="url" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='manuscriptsubmissionurl'  value={conference.manuscriptsubmissionurl}/>
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
           
            <div className="col-md-3">
              <label htmlFor="validationCustom02" className="form-label">Manuscript Submission Date</label>
              <input type="date" className="form-control" id="validationCustom02" required onChange={(e) => onValueChange(e)} name='manuscriptsubmissiondate' value={conference.manuscriptsubmissiondate} />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="validation" className="form-label">Manuscript End Date</label>
              <input type="date" className="form-control" id="validationCustom02"  required onChange={(e) => onValueChange(e)} name='manuscriptenddate' value={conference.manuscriptenddate} />

            </div>

            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">online & Offline<strong>Address</strong></label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='onlineoffline'  value={conference.onlineoffline}/>

            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='conferencekeypoints' value={conference.conferencekeypoints} />

            </div>
          

            <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={() => editConferenceDetails()}>Update Conference</button>
            </div>
          </form>
         

        </div>

      </div>


    </>
  )
}

export default EditConference