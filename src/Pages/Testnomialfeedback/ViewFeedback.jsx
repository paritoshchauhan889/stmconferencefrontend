import React from 'react'
import { useEffect, useState } from 'react';
import {getTestnomials, deleteTestnomial, editTestnomialPermission}  from '../../api/Api';
import AdminSidebar from '../../Components/Layout/AdminMenu';
import ManagerSidebar from '../../Components/Layout/ManagerMenu'


const ViewTestnomial = ({userRole}) => {


  const [testnomials, setTestnomials]= useState ([]);

  useEffect(()=>{
getAllTestnomials();
  },[]);

  const getAllTestnomials = async()=>{
    let response =  await getTestnomials();
    setTestnomials(response.data);
 
   }
   const deleteTestnomialDetails=async(id)=>{
    await deleteTestnomial(id);
    getAllTestnomials();

  }

  const handlePermissionChange = async (id, value) => {
    try {
      await editTestnomialPermission(id, { permission: value });
      getAllTestnomials();
    } catch (error) {
      console.error('Error updating testimonial permission:', error);
    }
  };
  return (
    <>
  <div className="d-flex">
  {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}

        <div className="container mt-4">
            <h4 className='text-center mt-2 mb-4'>Testnomial Data</h4>
            <p>Total Feedbacks/Testnomials: {testnomials.length}</p>
<table className="table table-striped table-hover">
  <thead>
    <tr className='table-success'>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Institute</th>
      <th scope="col">Feedback</th>
      <th scope='col'>Approve/not</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  testnomials.map((testnomial,index)=>(
    <tr key={testnomial._id}>
      <td>{index+1}</td>
      <td>{testnomial._id}</td>
      <td>{testnomial.name}</td>
      <td>{testnomial.email}</td>
      <td>{testnomial.institute}</td>
      <td>{testnomial.feedback}</td>
      <td>
      <select
                className="form-select"
                id={`permissionSelect_${index}`}
                required
                onChange={(e) =>
                  handlePermissionChange(testnomial._id, e.target.value === 'Show')
                }
                value={testnomial.permission ? 'Show' : 'Hide'}
              >
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>

        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteTestnomialDetails(testnomial._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
  </div>
    
    
    </>
  )
}

export default ViewTestnomial