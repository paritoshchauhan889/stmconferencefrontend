import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getConferences } from '../../api/Api';
import Layout from '../../Components/Layout/Layout';

const itemsPerPage = 10; // Number of items to display per page

const ConferenceTable = () => {
  const [conferences, setConferences] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllConferences();
  }, []);

  const getAllConferences = async () => {
    let response = await getConferences();
    setConferences(response.data);
  };

  // Function to filter conferences
  const filteredConferences = conferences
  .filter((conference) => {
    const titleMatch = conference.conferencetitle.toLowerCase().includes(searchTitle.toLowerCase());
    const dateMatch = conference.conferencestartdate.includes(searchDate);
    return titleMatch && dateMatch;
  })
  .sort((a, b) => new Date(b.conferencestartdate) - new Date(a.conferencestartdate));

// Rest of your code remains the same


  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredConferences.length / itemsPerPage);

  // Calculate the start and end indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the conferences to display on the current page
  const conferencesToDisplay = filteredConferences.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout title={'Conference'}>
      <div className="container mt-4 mb-4">
        <div className="d-flex mt-2 mb-4">
          <div className="input-group mr-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Titles..."
              aria-label="Search Titles"
              aria-describedby="search-title-icon"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
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
              placeholder="Search Dates..."
              aria-label="Search Dates"
              aria-describedby="search-date-icon"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
            <div className="input-group-append">
              <span className="input-group-text" id="search-date-icon">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>

        <table className="table table-striped border">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Organizer</th>
              <th scope="col">Date</th>
              <th scope="col">More Detail</th>
            </tr>
          </thead>
          <tbody>
            {conferencesToDisplay.map((conference, index) => (
              <tr key={conference._id}>
                <th scope="row">{index + 1 + startIndex}</th>
                <td>{conference.conferencetitle}</td>
                <td>{conference.organizername}</td>
                <td>{conference.conferencestartdate}</td>
                <td>
                  <Link
                    to={`/detail-conference/${conference._id}`}
                    style={{ color: 'Highlight' }}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
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
      </div>
    </Layout>
  );
};

export default ConferenceTable;
