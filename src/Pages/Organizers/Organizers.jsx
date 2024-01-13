import React from 'react'
import './Organizers.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import {getOrganizers}  from '../../api/Api';
import Layout from '../../Components/Layout/Layout';

const Organizers = () => {
  

  const [organizers, setSponsers]= useState ([]);

  useEffect(()=>{
getAllOrganizers();
  },[]);

  const getAllOrganizers = async()=>{
    let response =  await getOrganizers();
    setSponsers(response.data);
 
   }

  return (
    <Layout title={'Organizer profile'}>

  
 
    <div className="container py-5">
   <div className="row text-center text-white">
      <div className="text-center mb-4">
        <p className="display-4 text-center" style={{color:'black'}}>Organizers List</p>
        <p className="lead mb-0 text-center" style={{color:'black'}}>Behind every successful conference lies an efficient and dedicated organizing team. Our organizers are the architects of inspiration, meticulously planning and executing events that leave a lasting impact. From conceptualization to realization, our team strives to create seamless experiences that enable attendees to focus on what truly matters – the exchange of knowledge.</p>
      </div>
    </div>
    <div className="container">
    <div className="row border">
    <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Designation</th>
            <th scope="col">Profile Url</th>
            <th scope="col">Detail Page</th>
          </tr>
        </thead>
     {
      organizers.map((organizer,index)=>(
      
        <tbody key={organizer._id} >
          <tr>
            <th>{index+1}</th>
            <td>{organizer.organizerfullname}</td>
            <td>{organizer.organizeremail}</td>
            <td>{organizer.designation}</td>
            <td><Link to={organizer.profileurl} target='_blank'><i className="bi bi-link-45deg" style={{fontSize:'25px'}}></i></Link></td>
            <td><Link to={`/organizer-detail/${organizer._id}`} style={{color:'Highlight'}}>View Page</Link></td>
          </tr>
         
         
        </tbody>
      ))
     }
      </table>

      
    
     
  
    </div>
  </div>
  
   </div>

    
    </Layout>
  )
}

export default Organizers