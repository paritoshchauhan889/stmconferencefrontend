import React from 'react'
import { useEffect, useState } from 'react';
import {getGallerys}  from '../../api/Api';

const Gallery = () => {


  const [gallerys, setGallerys]= useState ([]);

  useEffect(()=>{
getAllGallerys();
  },[]);

  const getAllGallerys = async()=>{
    let response =  await getGallerys();
    setGallerys(response.data);
 
   }

  return (
    <>
<div className="container">
<h2 className='text-center about' style={{marginTop:50, marginBottom:50, color: "#1d5818",fontSize:50}}><strong>Gallery</strong></h2>

<div id="carouselExampleControls" className="carousel carousel-dark slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="card-wrapper container-sm d-flex  justify-content-around">
        <div className="card  " style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div><div className="card" style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
        <div className="card" style={{width: '18rem'}}>
          <img src="https://bootstrapmade.com/demo/templates/TheEvent/assets/img/gallery/8.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
    {
      gallerys.map(gallery=>(
        <div className="carousel-item" key={gallery._id}>
      <div className="card-wrapper container-sm d-flex   justify-content-around">
       {
        gallerys.map(gallery=>(
          <div className="card" style={{width: '18rem'}}>
          <img src={gallery.galleryimage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{gallery.gallerytitle}</h5>
            <h6 className="card-description">{gallery.galleryratings}</h6>
          </div>
        </div>
        ))
       }
       
      </div>
    </div>
      ))
    }
   
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>

    
    </>
  )
}

export default Gallery