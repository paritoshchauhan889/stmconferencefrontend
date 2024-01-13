import React from 'react'
import { useEffect, useState } from 'react';
import {getVenues, deleteVenue}  from '../../../api/Api';
import { Link } from 'react-router-dom';


const ViewVenue = () => {


    
  const [venues, setVenue]= useState ([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  useEffect(()=>{
    getAllVenues();
  },[]);

  const getAllVenues = async()=>{
    let response =  await getVenues();
    setVenue(response.data);
 
   }


   const deleteVenueDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteVenue(id);
    getAllVenues();


  }
  const openModal = (rowData) => {
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setSelectedRowData(null);
  };

  return (
    <>

 
   <div className="mt-5 container"> 
   <p>Total News/Events: {venues.length}</p>

<table className="table border table-striped table-hover">
  <thead className='table-success'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name Of Place </th>
      <th scope="col">Venue Image</th>
      <th scope="col">Venue email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  venues.map((venue,index)=>(
    <tr key={venue._id}>
      <td>{index+1}</td>
      <td>{venue._id}</td>
      <td>{venue.nameofplace}</td>
      <td>{venue.email}</td>
      <td><button type='button' className='btn btn-outline-success' onClick={() => openModal(venue)}>Preview</button></td>
      <td>
      <Link to={`/dashboard/edit-venue/${venue._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteVenueDetails(venue._id)}>Delete</button></td>
      
    
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
                        <td><img src={selectedRowData.image} width={200} alt="speaker" /></td>
                      </tr>
                      <tr>

                        <th>ID</th>
                        <th>{selectedRowData._id}</th>
                      </tr>

                    </thead>
                    <tbody>

                      <tr>
                        <td>Name of Place</td>
                        <td>{selectedRowData.nameofplace}</td>
                      </tr>
                   
                      <tr>
                        <td>Venue Email</td>
                        <td>{selectedRowData.email}</td>
                      </tr>
                      <tr>
                        <td>Venue url</td>
                        <td>{selectedRowData.venueurl}</td>
                      </tr>
                      <tr>
                        <td>Contact Person Name </td>
                        <td>{selectedRowData.contactpersonname}</td>
                      </tr>
                      <tr>
                        <td>Contact Person Email </td>
                        <td>{selectedRowData.contactpersonemail}</td>
                      </tr>
                      <tr>
                        <td>Contact Person Number</td>
                        <td>{selectedRowData.contactpersonnumber}</td>
                      </tr>
                      <tr>
                        <td>About Venue</td>
                        <td>{selectedRowData.description}</td>
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

export default ViewVenue
