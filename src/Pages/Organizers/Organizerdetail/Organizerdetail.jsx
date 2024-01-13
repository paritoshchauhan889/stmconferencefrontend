import React,{ useEffect, useState } from 'react'
import './organizerdetail.css'
import {getOrganizer}  from '../../../api/Api';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../../../Components/Layout/Layout';

const Organizerdetail = () => {

   
  const [organizer,setOrganizer]=useState({});
  
  const {id} = useParams();
  
  useEffect(()=>{
  loadorganizerDetails();
  },[])
  
  const loadorganizerDetails= async()=>{
  const response = await  getOrganizer(id);
  setOrganizer(response.data);
  }
  
  return (
    <Layout title={'Organizer - Deatils'}>
    <section id="organizers-details">
  <div className="container">
    <div className="section-header text-center mb-4">
      <h2>Organizer Details</h2>
     
    </div>
    <div className="row">
    <div className="col-md-6">
        <div className="details">
          <h2>{organizer.organizerfullname}</h2>
          <h5>{organizer.organizeremail}</h5>
          <div className="social">
            <a href><i className="bi bi-twitter" /></a>
            <a href><i className="bi bi-facebook" /></a>
            <a href><i className="bi bi-instagram" /></a>
            <Link to={organizer.profileurl} ><i className="bi bi-linkedin" /></Link>
          </div>
         <p>{organizer.bio}</p>
        </div>
      </div>
      <div className="col-md-6">
        <img src={organizer.organizerimage} alt="Speaker 1" className="img-fluid" />
      </div>
      
    </div>
  </div>
</section>
    
    
    
    
    </Layout>
  )
}

export default Organizerdetail