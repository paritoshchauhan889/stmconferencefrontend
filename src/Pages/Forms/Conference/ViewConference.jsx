import React, { useEffect, useState } from 'react';
import { getConferences, deleteConference } from '../../../api/Api';
import { Link } from 'react-router-dom';
import './conferences.css';

const ViewConference = () => {
  const [conferences, setConferences] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage =10;

  useEffect(() => {
    getAllConferences();
  }, []);

  const getAllConferences = async () => {
    let response = await getConferences();
    setConferences(response.data);
  };

  const deleteConferenceDetails = async (id) => {
    alert('Data Deleted successfully');
    await deleteConference(id);
    getAllConferences();
  };

  const openModal = (rowData) => {
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setSelectedRowData(null);
  };

  const handleSearch = () => {
    if (!searchCriteria) {
      getAllConferences();
    } else {
      const filteredConferences = conferences.filter((conference) =>
        conference.conferencetitle.toLowerCase().includes(searchCriteria.toLowerCase()) ||
        new Date(conference.createdAt).toDateString().toLowerCase().includes(searchCriteria.toLowerCase())
      );
      setConferences(filteredConferences);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = conferences.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(conferences.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="mt-4">
        <p>Total Conference : {conferences.length}</p>
        <div className="input-group mb-3">
          <input
            type="text" style={{borderRadius:'30px'}}
            className="form-control"
            placeholder="Search by Title"
            value={searchCriteria}
            onChange={(e) => setSearchCriteria(e.target.value)}
          />
          <div className="input-group-append" >
            <button className="btn btn-outline-success" style={{borderRadius:'30px'}} type="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <table className="table table-striped table-hover border">
          <thead>
          <tr>
      <th scope="col">#</th>
     <th scope="col">ID</th>
      <th scope="col">Conference Title</th>
       <th scope="col">Conference Start Date</th>      
       <th scopoe="col">Created Date</th>
      <th scopoe="col">Preview</th>
      <th scopoe="col">Edit</th>
      <th scopoe="col">Delete</th>
    </tr>
          </thead>
          <tbody>
            {currentItems.map((conference, paritosh) => (
              <tr key={conference._id}>
              <td>{paritosh+1}</td>
       <td>{conference._id}</td>
       <td>{conference.conferencetitle}</td>
       <td>{new Date(conference.conferencestartdate).toDateString()}</td>
       <td>{new Date(conference.createdAt).toDateString()}</td>
       <td><button type='button' className='btn btn-outline-primary' onClick={() => openModal(conference)}>Preview</button></td>
                <td>
                  <Link to={`/dashboard/edit-conference/${conference._id}`}>
                    <button className="btn btn-primary" style={{ marginRight: 5 }}>
                      Edit
                    </button>
                  </Link>
                 
                 
                </td>
                <td> <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteConferenceDetails(conference._id)}
                  >
                    Delete
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="pagination justify-content-center">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${number === currentPage ? 'active' : ''}`}
              >
                <button onClick={() => handlePageChange(number)} className="page-link">
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {selectedRowData && (
        <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-scrollable">
               <div className="modal-content">
                 <div className="modal-header">
                   <h1 className="modal-title fs-5" id="staticBackdropLabel">Speaker Details</h1>
                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                 </div>
                 <div className="modal-body" id='report'>
                   <table className="table table-striped">
                     <thead>
                       <tr>
                         <td><img src={selectedRowData.conferenceimage} width={200} alt="speaker" /></td>
                       </tr>
                       <tr>

                         <th>ID</th>
                         <th>{selectedRowData._id}</th>
                       </tr>

                     </thead>
                     <tbody>

                       <tr>
                         <td>Conference Title</td>
                         <td>{selectedRowData.conferencetitle}</td>
                       </tr>
                       <tr>
                         <td>Conference Start Date / Time</td>
                         <td>{new Date(selectedRowData.conferencestartdate).toDateString()}{selectedRowData.conferencestarttime}</td>
                       </tr>
                       <tr>
                         <td>Conference End Date / Time</td>
                         <td>{new Date(selectedRowData.conferencestartdate).toDateString()}{selectedRowData.conferenceendtime}</td>
                       </tr>
                       <tr>
                         <td>Sponsers Email</td>
                         <td>{selectedRowData.sponsersemail}</td>
                       </tr>
                       <tr>
                         <td>Speakers Email</td>
                         <td>{selectedRowData.speakersemail}</td>
                       </tr>
                       <tr>
                         <td>Organizer Name</td>
                         <td>{selectedRowData.organizername}</td>
                       </tr>
                       <tr>
                         <td>Venue Name</td>
                         <td>{selectedRowData.venuename}</td>
                       </tr>
                       <tr>
                         <td>Feedback Url</td>
                         <td>{selectedRowData.feedbackurl}</td>
                       </tr>
                       <tr>
                         <td>Conference Key Points</td>
                         <td>{selectedRowData.conferencekeypoints}</td>
                       </tr>
                       <tr>
                         <td>Manuscript Submission Url</td>
                         <td>{selectedRowData.manuscriptsubmissionurl}</td>
                       </tr>                
                       <tr>
                         <td>Manuscript Submission Date</td>
                         <td>{selectedRowData.manuscriptsubmissiondate}</td>
                       </tr>
                       <tr>
                         <td>Manuscript End Date</td>
                         <td>{selectedRowData.manuscriptenddate}</td>
                       </tr>
                       <tr>
                         <td>Online & offline (Url)</td>
                         <td>{selectedRowData.onlineoffline}</td>
                       </tr>     
                       <tr>
                         <td>Description</td>
                         <td style={{textAlign:'justify'}}>{selectedRowData.description}</td>
                       </tr>     
                       <tr>
                         <td>Created Date</td>
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
    </>
  );
};

export default ViewConference;
