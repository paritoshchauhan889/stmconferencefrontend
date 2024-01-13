import React from 'react'
import { useEffect, useState } from 'react';
import { getSpeakers, deleteSpeaker } from '../../../api/Api';
import { Link } from 'react-router-dom';
import JsPDF from 'jspdf';

const itemsPerPage = 10;
const generatePDF = () => {

  const report = new JsPDF('portrait','pt','a4','14');
  report.html(document.querySelector('#report')).then(() => {
    report.setFontSize(12);

      report.save('speaker-details.pdf');
  });}

const ViewSpeaker = () => {

  const [speakers, setSpeakers] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [searchName, setSearchName] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllSpeakers();
  }, []);

  const getAllSpeakers = async () => {
    let response = await getSpeakers();
    setSpeakers(response.data);

  }
  const deleteSpeakerDetails = async (id) => {
    alert('Data Deleted successfully');
    await deleteSpeaker(id);
    getAllSpeakers();

  }


  const openModal = (rowData) => {
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setSelectedRowData(null);
  };
 // Function to filter conferences
 const filteredSpeakers = speakers.filter((speaker) => {
  const nameMatch = speaker.speakerfullname.toLowerCase().includes(searchName.toLowerCase());
  const emailMatch = speaker.speakeremail.includes(searchEmail);
  return nameMatch && emailMatch;
});

// Calculate the total number of pages
const totalPages = Math.ceil(filteredSpeakers.length / itemsPerPage);

// Calculate the start and end indexes for the current page
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;

// Get the conferences to display on the current page
const speakersToDisplay = filteredSpeakers.slice(startIndex, endIndex);

// Function to handle page changes
const handlePageChange = (page) => {
  setCurrentPage(page);
};


  return (
    <>
      <div className="mt-4">
        <p>Total Speakers: {speakers.length}</p>

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
        <table className="table table-striped table-hover">
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
              speakersToDisplay.map((speaker, index) => (
                <tr key={speaker._id}>
                  <td style={{color:'rgb(13,110,253)'}}>{index + 1}</td>
                  <td>{speaker._id}</td>
                  <td>{speaker.speakerfullname}</td>
                  <td>{speaker.speakeremail}</td>
                  <td>{speaker.speakerphonenumber}</td>     
                  <td><button type='button' className='btn btn-outline-success' onClick={() => openModal(speaker)}>Preview</button></td>
                  <td>
                    <Link to={`/dashboard/edit-speaker/${speaker._id}`}><button className='btn btn-primary ' style={{ marginRight: 5 }}>Edit</button></Link>
                  </td>
                  <td><button type='button' className='btn btn-danger' onClick={() => deleteSpeakerDetails(speaker._id)}>Delete</button></td>
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
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Speaker Details</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                </div>
                <div className="modal-body" id='report'>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <td><img src={selectedRowData.speakerimage} width={200} alt="speaker" /></td>
                      </tr>
                      <tr>

                        <th>ID</th>
                        <th>{selectedRowData._id}</th>
                      </tr>

                    </thead>
                    <tbody>

                      <tr>
                        <td>Full Name</td>
                        <td>{selectedRowData.speakerfullname}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>  {selectedRowData.speakeremail}</td>
                      </tr>
                      <tr>
                        <td>Contact Number</td>
                        <td>{selectedRowData.speakerphonenumber}</td>
                      </tr>
                      <tr>
                        <td>Designation</td>
                        <td>{selectedRowData.designation}</td>
                      </tr>
                      <tr>
                        <td>DepartMent</td>
                        <td>{selectedRowData.department}</td>
                      </tr>
                      <tr>
                        <td>Affilation</td>
                        <td>{selectedRowData.affilation}</td>
                      </tr>
                      <tr>
                        <td>Academic</td>
                        <td>{selectedRowData.academic}</td>
                      </tr>
                      <tr>
                        <td>Key Points</td>
                        <td>{selectedRowData.speakerkeypoints}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{selectedRowData.speakeraddress}</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>{selectedRowData.speakercountry}</td>
                      </tr>                
                      <tr>
                        <td>State</td>
                        <td>{selectedRowData.speakerstate}</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>{selectedRowData.speakercity}</td>
                      </tr>
                      <tr>
                        <td>PinCode</td>
                        <td>{selectedRowData.speakerpincode}</td>
                      </tr>     
                      <tr>
                        <td>Bio</td>
                        <td style={{textAlign:'justify'}}>{selectedRowData.bio}</td>
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
                  <button onClick={generatePDF} type="button" className="btn btn-outline-primary">Export PDF</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>


    </>
  )
}

export default ViewSpeaker