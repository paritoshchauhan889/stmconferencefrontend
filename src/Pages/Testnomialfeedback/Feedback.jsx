import React from 'react'
import './feedback.css'
import {  useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addTestnomial } from '../../api/Api' 
import Layout from '../../Components/Layout/Layout'
import { toast } from 'react-hot-toast';




const Feedback = () => {


  const dafaultValue={
    name:'',
    email:'',
    institute:'',
    feedback:'',
  
}

const [testnomial,setTestnomials]=useState(dafaultValue);
const navigate = useNavigate();

// form value
const onValueChange=(e)=>{
    setTestnomials({...testnomial,[e.target.name]:e.target.value});
}

const addTestnomialDetails = async()=>{
   try {
    await addTestnomial(testnomial);
    toast.success("Feedback Submit  Successfully");
  } catch (error) {
    toast.error("An error occurred. Please try again.");
    // Handle error as needed
  }
};

  return (
    <Layout title={'Feedback -form'}>
     <div className="container mt-4 mb-4">
        <h4 className='text-center'>Feedback</h4>
     <div className="form mt-4">
        <form  className="php-email-form">
          <div className="row">
            <div className="form-group col-md-6 mt-2 mb-2">
            <label className='h6 m-2'>Name</label>
              <input type="text"  className="form-control" id="name" placeholder="Your Name" required  onChange={(e)=>onValueChange(e)} name='name'/>
            </div>
            <div className="form-group col-md-6 mt-2 mb-2">
            <label className='h6 m-2'>Email</label>
              <input type="email" className="form-control"  id="email" placeholder="Your Email" required onChange={(e)=>onValueChange(e)} name='email'/>
            </div>
          
          <div className="form-group mt-2 mb-2">
            <label className='h6 m-2'>Institute</label>
            <input type="text" className="form-control"  id="subject" placeholder="Institute/Organization" required onChange={(e)=>onValueChange(e)} name='institute'/>
          </div>
          <div className="form-group">
          <label className='h6 m-2'>Feedback</label>
            <textarea className="form-control" rows={5} placeholder="Message" required onChange={(e)=>onValueChange(e)} name='feedback'/>
          </div>
          <div className="my-3">
          <div className="text-center"><button className='btn btn-dark' type="submit" value="Send" onClick={()=> addTestnomialDetails()} >Send Feedback</button></div>
            </div>
            </div>
        </form>
      </div>  
        </div> 
    </Layout>
  )
}

export default Feedback
