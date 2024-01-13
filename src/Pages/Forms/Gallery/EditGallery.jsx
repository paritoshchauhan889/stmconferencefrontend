import React from 'react'
import { useState ,useEffect} from 'react'
import { editGallery, getGallery } from '../../../api/Api' 
import { useParams} from 'react-router-dom';
import AdminSidebar from '../../../Components/Layout/AdminMenu';

const EditGallery = () => {

    const dafaultValue={
         gallerytitle:'',
         galleryimage:'',
         gelleryratings:'',
       
    }

   
    const [gallery,setGallery]=useState(dafaultValue);
    
    const {id} = useParams();
    
    useEffect(()=>{
    loadgalleryDetails();
    },[])
    
    const loadgalleryDetails= async()=>{
    const response = await  getGallery(id);
    setGallery(response.data);
    }
    
      
    
    
    // form value
        const onValueChange=(e)=>{
            setGallery({...gallery,[e.target.name]:e.target.value});
        }
    
        const editgalleryDetails = async()=>{
          alert('Data Update successfully');
           await editGallery(gallery,id);
    
    
        }
  return (
    <>

<div className="d-flex">
  <AdminSidebar/>

<div className="container mt-4 mb-3">
        <h4 className='text-center mt-2 mb-2'>Edit Gallery</h4>
     <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Title</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="title" required 
    onChange={(e)=>onValueChange(e)} name='gallerytitle'  value={gallery.gallerytitle}
    />
  
  </div>
  
 
  <div className="col-md-5">
    <label htmlFor="validation" className="form-label">Image Url</label>
    <input type="url" className="form-control" id="validationCustom02"  required onChange={(e)=>onValueChange(e)} name='galleryimage'  value={gallery.galleryimage}/>
 
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Ratings</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder='Enter number of ratings'  required 
    onChange={(e)=>onValueChange(e)} name='gelleryratings'  value={gallery.gelleryratings}
    />
  
  </div>
  
  

 



  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=> editgalleryDetails()}>Update Gallery</button>
  </div>
</form>


    </div>

   </div>
  
   
    </>
  )
}

export default EditGallery