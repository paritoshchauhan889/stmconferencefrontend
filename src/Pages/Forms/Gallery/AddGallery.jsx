import React from 'react'
import { useState } from 'react'
import { addGallery } from '../../../api/Api' 
import ViewGallery from './ViewGallery'
import AdminSidebar from '../../../Components/Layout/AdminMenu'
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'




const AddGallery = ({userRole}) => {

    const dafaultValue={
         gallerytitle:'',
         galleryimage:'',
         gelleryratings:'',
       
    }

const [gallery,setGallery]=useState(dafaultValue);

// form value
    const onValueChange=(e)=>{
        setGallery({...gallery,[e.target.name]:e.target.value});
    }

    const addGalleryDetails = async()=>{
      alert('Data Add successfully');
       await addGallery(gallery);

    }
  return (
    <>

<div className="d-flex">
{userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}


<div className="container mt-4 mb-3">
        <h4 className='text-center mt-2 mb-2'>Add Gallery</h4>
     <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Title</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="title" required 
    onChange={(e)=>onValueChange(e)} name='gallerytitle' 
    />
  
  </div>
  
 
  <div className="col-md-5">
    <label htmlFor="validation" className="form-label">Image Url</label>
    <input type="url" className="form-control" id="validationCustom02"  required onChange={(e)=>onValueChange(e)} name='galleryimage' />
 
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Ratings</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder='Enter number of ratings' required 
    onChange={(e)=>onValueChange(e)} name='gelleryratings' 
    />
  
  </div>
  
  

 



  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=> addGalleryDetails()}>Add Gallery</button>
  </div>
</form>
<h4 className='text-center'>All Gallery Data</h4>
<div className="overflow-scroll">
 
<ViewGallery/>

</div>

    </div>

   </div>
  
   
    </>
  )
}

export default AddGallery