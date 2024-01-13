import React from 'react'
import { useEffect, useState } from 'react';
import {getContacts, deleteContact}  from '../../../api/Api';
import AdminSidebar from '../../../Components/Layout/AdminMenu';
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'


const ViewContact = ({userRole}) => {



  const [contacts, setContacts]= useState ([]);

  useEffect(()=>{
    getAllContacts();
  },[]);

  const getAllContacts = async()=>{
    let response =  await getContacts();
    setContacts(response.data);
 
   }
   const deleteContactDetails=async(id)=>{
    await deleteContact(id);
    getAllContacts();

  }
  
   
  return (
    <>
   <div className="d-flex">
   {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}

   <div className="mt-5 container"> <h3 className='text-center mb-4'>All Contact us Data</h3>
<div className="container overflow-auto">
<table className="table border table-striped table-hover">
  <thead>
    <tr className='table-success'>
    <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email </th>
      <th scope='col'>Subject</th>
      <th scopoe="col">Message</th>
      <th scopoe="col">Entry Date</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  contacts.map((contact,index)=>(
    <tr key={contact._id}>
      <td>{index+1}</td>
      <td>{contact._id}</td>
      <td>{contact.user_name}</td>
      <td>{contact.user_email}</td>
      <td>{contact.subject}</td>
      <td>{contact.message}</td>
      <td>{new Date(contact.createdAt).toDateString()}</td>
      
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteContactDetails(contact._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
</div>
   </div>
    
    
    </>
  )
}

export default ViewContact