import React from 'react'
import { useEffect, useState } from 'react';
import {getOrganizers, deleteOrganizer}  from '../../../api/Api';
import { Link } from 'react-router-dom';

const ViewOrganizer = () => {


  const [organizers, setOrganizers]= useState ([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  useEffect(()=>{
getAllOrganizers();
  },[]);

  const getAllOrganizers = async()=>{
    let response =  await getOrganizers();
    setOrganizers(response.data);
 
   }
   const deleteOrganizerDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteOrganizer(id);
    getAllOrganizers();

  }
  const openModal = (rowData) => {
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setSelectedRowData(null);
  };
   
  return (
    <>
    <div className="mt-4">
    <p>Total Sponsers: {organizers.length}</p>

<table className="table table-striped table-hover">
  <thead className='table-success'>
    <tr>
    <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact Number</th>
      <th scope="col">preview</th>
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  organizers.map((organizer,index)=>(
    <tr key={organizer._id}>
      <td>{organizer._id}</td>
      <td>{index+1}</td>
      <td>{organizer.organizerfullname}</td>
      <td>{organizer.organizeremail}</td>
      <td>{organizer.organizerphonenumber}</td>
      <td><button type='button' className='btn btn-outline-success' onClick={() => openModal(organizer)}>Preview</button></td>
      <td>
      <Link to={`/dashboard/edit-organizer/${organizer._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteOrganizerDetails(organizer._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>


{selectedRowData && (
          <div className="modal " style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Sponser Details</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body" id='report'>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <td><img src={selectedRowData.organizerimage} width={200} alt="speaker" /></td>
                      </tr>
                      <tr>

                        <th>ID</th>
                        <th>{selectedRowData._id}</th>
                      </tr>

                    </thead>
                    <tbody>

                      <tr>
                        <td>Full Name</td>
                        <td>{selectedRowData.organizerfullname}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>  {selectedRowData.organizeremail}</td>
                      </tr>
                      <tr>
                        <td>Contact Number</td>
                        <td>{selectedRowData.organizerphonenumber}</td>
                      </tr>
                      <tr>
                        <td>Designation</td>
                        <td>{selectedRowData.designation}</td>
                      </tr>
                      <tr>
                        <td>Department</td>
                        <td>{selectedRowData.department}</td>
                      </tr>
                      <tr>
                        <td>Affiliation</td>
                        <td>{selectedRowData.affilation}</td>
                      </tr>                
                      <tr>
                        <td>Key Points</td>
                        <td>{selectedRowData.organizerkeypoints}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{selectedRowData.organizeraddress}</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>{selectedRowData.organizercountry}</td>
                      </tr>   
                      <tr>
                        <td>State</td>
                        <td>{selectedRowData.organizerstate}</td>
                      </tr>    
                      <tr>
                        <td>City</td>
                        <td>{selectedRowData.organizercity}</td>
                      </tr> 
                      <tr>
                        <td>Pincode</td>
                        <td>{selectedRowData.organizerpincode}</td>
                      </tr> 
                      <tr>
                        <td>Bio</td>
                        <td style={{textAlign:'justify'}}>{selectedRowData.bio}</td>
                      </tr>     
                      <tr>
                        <td>Profile Url</td>
                        <td style={{textAlign:'justify'}}>{selectedRowData.profileurl}</td>
                      </tr> 
                      <tr>
                        <td>Entry Date</td>
                        <td>{new Date(selectedRowData.createdAt).toDateString()}</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}
</div>
    
    
    </>
  )
}

export default ViewOrganizer