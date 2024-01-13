import React from 'react'
import { useEffect, useState } from 'react';
import {getFaqs, deleteFaq}  from '../../../api/Api';
import { Link } from 'react-router-dom';

const ViewFaq = () => {


  const [faqs, setFaqs]= useState ([]);

  useEffect(()=>{
getAllFaqs();
  },[]);

  const getAllFaqs = async()=>{
    let response =  await getFaqs();
    setFaqs(response.data);
 
   }
   const deleteFaqDetails=async(id)=>{
    alert('Data Deletd successfully');
    await deleteFaq(id);
    getAllFaqs();

  }
  
   
  return (
    <>
    <div className="mt-4">
      <p>Total Faq's: {faqs.length}</p>
<table className="table table-striped table-hover border table-fixed">
  <thead>
    <tr className='table-success'>
      <th scope="col">#</th>
      <th scope="col">Heading</th>
      <th scope="col">Paragraph</th>
      <th scope='col'>Update</th>
      <th scopoe="col">Delete</th>
    </tr>
  </thead>
 
  <tbody>
{
  faqs.map((faq, index)=>(
    <tr key={faq._id}>
      <td>{index+1}</td>
      <td>{faq.faqheading}</td>
      <td>{faq.faqparagraph}</td>
      
      <td>
      <Link to={`/dashboard/edit-faq/${faq._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
        </td>
      <td><button type='button' className='btn btn-danger' onClick={()=>deleteFaqDetails(faq._id)}>Delete</button></td>
      </tr>
  ))
}
   
   
  </tbody>
</table>
</div>
    
    
    </>
  )
}

export default ViewFaq