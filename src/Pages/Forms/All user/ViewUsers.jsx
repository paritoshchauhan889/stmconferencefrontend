import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {URL}  from '../../../api/Api'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../../Components/Layout/AdminMenu'
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'


const ViewUsers = ({userRole}) => {
    const [users, setUser] = useState([])

    useEffect(()=>{
myfun();
    },[])

    const myfun = async() =>{
const data = await axios.get(`${URL}/auth/all-users`)
if(data){
    setUser(data.data.users)
}
    }


  return (
    <>
<div className="d-flex">
{userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}

 
<div className="container mb-4">
<h4 className='text-center mt-2 mb-2'>All User Data</h4>

<div className=" overflow-auto">
<p>Total Users: {users.length}</p>
<table className="table border table-striped table-hover" >
 <thead className='table-success'>
    <tr>
    <th>#</th>
    <th>Username</th>
    <th>Email</th>
    <th>Role</th>
    <th>Join Date</th>
    <th>Update</th>
    </tr>
  </thead>

<tbody>
    {users.map((value,index)=>
    <tr>
        <td>{index+1}</td>
        <td>{value.name}</td>
        <td>{value.email}</td>
       <td>
       {value.role === 0 && <span>User</span>}
  {value.role === 1 && <span>Admin</span>}
  {value.role === 2 && <span>Manager</span>}
       </td>
        <td>{new Date(value.createdAt).toDateString()}</td>
        <td>
      <Link to={`/dashboard/edit-user/${value._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Update</button></Link>
        </td>
    </tr>
    )
    }
</tbody>
</table>
</div>
</div>
</div>
    </>
  )
}

export default ViewUsers