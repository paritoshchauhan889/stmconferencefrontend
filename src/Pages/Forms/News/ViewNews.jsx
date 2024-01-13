import React from 'react'
import { useEffect, useState } from 'react';
import {getNewss, deleteNews}  from '../../../api/Api';
import { Link} from 'react-router-dom';

const ViewNews = () => {


  const [newss, setNewss]= useState ([]);
  const [selectedRowData, setSelectedRowData] = useState(null);


  useEffect(()=>{
    getAllNewss();
  },[]);

  const getAllNewss = async()=>{
    let response =  await getNewss();
    setNewss(response.data);
 
   }
   const deleteNewsDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteNews(id);
    getAllNewss();


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
   <p>Total News/Events: {newss.length}</p>

<table className="table border table-striped table-hover" style={{ textAlign:'justify'}} >
  <thead className='table-success'>
    <tr className='text-center'>
      <th scope="col" >#</th>
      <th scope="col" >ID</th>
      <th scope="col ">Title</th>
      <th scope="col ">News Image</th>
      <th scope='col'>Update</th>
      <th scope='col'>Preview</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody style={{overflow:'auto'}}>
{
  newss.map((news, index)=>(
    <tr  key={news._id} >
      <td>{index+1}</td>
      <td>{news._id}</td>
      <td><p style={{width:'400px',wordWrap:'break-word'}}>{news.title}</p></td>
      <td><img src={news.image} alt="news" style={{width:'150px',height:'auto'}}/></td>
      <td><button type='button' className='btn btn-outline-success' onClick={() => openModal(news)}>Preview</button></td>
      <td>
      <Link to={`/dashboard/edit-news/${news._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteNewsDetails(news._id)}>Delete</button></td>
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
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Speaker Details</h1>
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
                        <td>Full Name</td>
                        <td>{selectedRowData.title}</td>
                      </tr>
                 
                     
                      <tr>
                        <td>Key Points</td>
                        <td>{selectedRowData.keypoints}</td>
                      </tr>
                         
                      <tr>
                        <td>Description</td>
                        <td style={{textAlign:'justify'}}>{selectedRowData.description1}{selectedRowData.description2}</td>
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

export default ViewNews