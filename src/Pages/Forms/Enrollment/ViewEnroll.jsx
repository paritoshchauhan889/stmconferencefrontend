import React, { useState, useEffect } from 'react';
import { getEnrolls, deleteEnrolls } from '../../../api/Api';
import AdminSidebar from '../../../Components/Layout/AdminMenu';
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'




const ViewUsers = ({userRole}) => {
  const [details, setDetails] = useState([]);
  const [selectedRowData, setSelectedRowData] = useState(null);

  useEffect(() => {
    myFun();
  }, []);

  const myFun = async () => {
    let response = await getEnrolls();
    setDetails(response.data);
  };

  // const deleteEnrollDetails = async (id) => {
  //   alert('Data successfully deleted');
  //   await deleteEnrolls(id);
  //   myFun();
  // };

  const openModal = (rowData) => {
    setSelectedRowData(rowData);
  };

  const closeModal = () => {
    setSelectedRowData(null);
  };
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <div className="d-flex">
      {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}

        <div className="container">
          <h4 className='text-center mt-4 mb-4'>All Conference Enroll Users Data</h4>

          <p>Total Enrolled: {details.length}</p>

          <div className="overflow-auto">
            <table className="table border table-striped table-hover">
              <thead className='table-success'>
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Contact Number</th>
                  <th>Created At</th>
                  {/* <th>Actions</th> */}
                  <th>Preview</th>
                </tr>
              </thead>
              <tbody>
                {details.map((value, index) => (
                  <tr key={value._id}>
                    <td>{index + 1}</td>
                    <td>{value._id}</td>
                    <td>{value.firstname}</td>
                    <td>{value.lastname}</td>
                    <td>{value.email}</td>
                    <td>{value.contactnumber}</td>
                    <td>{new Date(value.createdAt).toDateString()}</td>
                    {/* <td>
                      <button
                        type='button'
                        className='btn btn-danger nav-link disabled'
                        onClick={() => deleteEnrollDetails(value._id)}
                      >
                        Delete
                      </button>
                     
                    </td> */}
                    <td> <button
                        type='button'
                        className='btn btn-primary ml-2'
                        onClick={() => openModal(value)}
                      >
                        Preview
                      </button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {selectedRowData && (
        <div className="modal " style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Enroll User Details</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
              <table className="table">
            <thead>
            <tr>
                    <th>ID</th>
                    <th>{selectedRowData._id}</th>
                </tr>
            </thead>
            <tbody>
                
                <tr>
                    <td>Full Name</td>
                    <td>{selectedRowData.firstname} {selectedRowData.lastname}</td>
                </tr>
                <tr>
                    <td>Email</td>
                  <td>  {selectedRowData.email}</td>
                </tr>
                <tr>
                    <td>Contact Number</td>
                    <td>{selectedRowData.contactnumber}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>{selectedRowData.address}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{selectedRowData.country}</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>{selectedRowData.state}</td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>{selectedRowData.city}</td>
                </tr>
                <tr>
                  <td>PinCode</td>
                  <td>{selectedRowData.pincode}</td>
                </tr>
                <tr>
                  <td>Academic</td>
                  <td>{selectedRowData.academic}</td>
                </tr>
                <tr>
                  <td>Remark :</td>
                  <td>{selectedRowData.remark}</td>
                </tr>
                <tr>
                  <td>Enroll Time</td>
                  <td>{new Date(selectedRowData.createdAt).toDateString()}</td>
                </tr>
            </tbody>
        </table>
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                <button
              className="btn btn-outline-primary"
              onClick={handlePrint}
            >
              Print Table
            </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewUsers;
