import React from 'react'
import { useEffect, useState } from 'react';
import {getSponsers, deleteSponser}  from '../../../api/Api';
import { Link } from 'react-router-dom';



const itemsPerPage = 10;


const ViewSponser = () => {

  const [sponsers, setSponsers]= useState ([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
getAllSponsers();
  },[]);

  const getAllSponsers = async()=>{
    let response =  await getSponsers();
    setSponsers(response.data);
 
   }
   const deleteSponserDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteSponser(id);
    getAllSponsers();

  }
  
  const openModal = (rowData) => {
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setSelectedRowData(null);
  };


  // Function to filter conferences
 const filteredSponsers = sponsers.filter((sponser) => {
  const nameMatch = sponser.sponserfullname.toLowerCase().includes(searchName.toLowerCase());
  const emailMatch = sponser.sponseremail.includes(searchEmail);
  return nameMatch && emailMatch;
});

// Calculate the total number of pages
const totalPages = Math.ceil(filteredSponsers.length / itemsPerPage);

// Calculate the start and end indexes for the current page
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

// Get the conferences to display on the current page
const sponsersToDisplay = filteredSponsers.slice(startIndex, endIndex);

// Function to handle page changes
const handlePageChange = (page) => {
  setCurrentPage(page);
};
  return (
    <>
    <div className="mt-4">
    <p>Total Sponsers: {sponsers.length}</p>


    <div className="d-flex mt-2 mb-4">
          <div className="input-group mr-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Speaker Name..."
              aria-label="Search Titles"
              aria-describedby="search-title-icon"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <div className="input-group-append">
              <span className="input-group-text" id="search-title-icon">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search Email..."
              aria-label="Search Email"
              aria-describedby="search-date-icon"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
            />
            <div className="input-group-append">
              <span className="input-group-text" id="search-date-icon">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>
<table className="table border table-striped table-hover" >


  <thead className='table-success'> 
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Contact Number</th>
      <th scope="col">Preview</th>
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  sponsersToDisplay.map((sponser, index)=>(
    <tr key={sponser._id}>
      <td>{index+1}</td>
      <td>{sponser._id}</td>
      <td>{sponser.sponserfullname}</td>
      <td>{sponser.sponseremail}</td>
      <td>{sponser.sponserphonenumber}</td>
      <td><button type='button' className='btn btn-outline-success' onClick={() => openModal(sponser)}>Preview</button></td>
      <td>
      <Link to={`/dashboard/edit-sponser/${sponser._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteSponserDetails(sponser._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>

<ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>


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
                        <td><img src={selectedRowData.sponserimage} width={200} alt="speaker" /></td>
                      </tr>
                      <tr>

                        <th>ID</th>
                        <th>{selectedRowData._id}</th>
                      </tr>

                    </thead>
                    <tbody>

                      <tr>
                        <td>Full Name</td>
                        <td>{selectedRowData.sponserfullname}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>  {selectedRowData.sponseremail}</td>
                      </tr>
                      <tr>
                        <td>Contact Number</td>
                        <td>{selectedRowData.sponserphonenumber}</td>
                      </tr>
                      <tr>
                        <td>Key Points</td>
                        <td>{selectedRowData.sponserkeypoints}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{selectedRowData.sponseraddress}</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>{selectedRowData.sponsercountry}</td>
                      </tr>                
                      <tr>
                        <td>State</td>
                        <td>{selectedRowData.sponserstate}</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>{selectedRowData.sponsercity}</td>
                      </tr>
                      <tr>
                        <td>PinCode</td>
                        <td>{selectedRowData.sponserpincode}</td>
                      </tr>     
                      <tr>
                        <td>About Sponser</td>
                        <td style={{textAlign:'justify'}}>{selectedRowData.sponserabout}</td>
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

export default ViewSponser