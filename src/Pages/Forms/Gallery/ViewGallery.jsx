import React from 'react'
import { useEffect, useState } from 'react';
import {getGallerys, deleteGallery}  from '../../../api/Api';
import { Link } from 'react-router-dom';

const ViewGallery = () => {


  const [gallerys, setGallerys]= useState ([]);

  useEffect(()=>{
getAllGallerys();
  },[]);

  const getAllGallerys = async()=>{
    let response =  await getGallerys();
    setGallerys(response.data);
 
   }
   const deleteGalleryDetails=async(id)=>{
    alert('Data Deleted successfully');
    await deleteGallery(id);
    getAllGallerys();

  }
  
   
  return (
    <>
    <div className="mt-4">
<table className="table table-striped table-hover">
  <thead>
    <tr className='table-success'>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Image Url</th>
      <th scope="col">Ratings</th>
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
  <tbody>
{
  gallerys.map(gallery=>(
    <tr key={gallery._id}>
      <td>{gallery._id}</td>
      <td>{gallery.gallerytitle}</td>
      <td>{gallery.galleryimage}</td>
      <td>{gallery.gelleryratings}</td>
      
      <td>
      <Link to={`/dashboard/edit-gallery/${gallery._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteGalleryDetails(gallery._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
    
    </>
  )
}

export default ViewGallery