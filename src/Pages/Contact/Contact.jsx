import React, {useRef, useState} from 'react'
import { addContact } from '../../api/Api' 
import {  useNavigate } from 'react-router-dom'
import './contact.css'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../Components/Layout/Layout'


const Contact = () => {



  const dafaultValue={
    user_name:'',
    user_email:'',
    subject:'',
    message:'',
    
}

const [contact,setContact]=useState(dafaultValue);
const navigate = useNavigate();

// form value
const onValueChange=(e)=>{
   setContact({...contact,[e.target.name]:e.target.value});
}

const addContactDetails = async()=>{
  alert('Message Send successfully');
  await addContact(contact);

navigate('/contact');
}


  const form  = useRef()


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ylbviqe', 'template_2aqq6ai', form.current, 'vVi8IRnGxGIlvDhR_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <Layout title={'Contact Us page'}>
<div className="container">
<section id="contact" className="contact mb-5">
    <div className="aos-init aos-animate" data-aos="fade-up">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h1 className="page-title">Contact us</h1>
        </div>
      </div>
      <div className="row gy-4">
      <div className="col-md">
          <div className="info-item">
            <i className="bi bi-envelope" />
            <h3>Email</h3>
            <p className='text-center'><Link to="mailto:STMconferences@celnet.in">STMconferences@celnet.in</Link></p>
           <Link to='mailto:conferences@conwiz.in'>conferences@conwiz.in</Link> 
          </div>
        </div>

        <div className="col-md">
          <div className="info-item">
          <i className="bi bi-phone" />
          <h3>Phone Number</h3>
            <p className='text-center'><Link to="tel:+01204781211/219">Tel: + 01204781211/219  </Link></p>
            <Link to="https://wa.me/+917827713832" >
      <i className="bi bi-whatsapp" style={{ fontSize: '25px',color:'green' }}></i> Whatsapp (7827713832)
    </Link>
          </div>
          
        </div>

        <div className="col-md">
          <div className="info-item">
            <i className="bi bi-geo-alt" />
            <h3>Address</h3>
           <Link to="https://goo.gl/maps/i6qC4eoHiPSmmZxj7"> <address >A-118, 1st Floor, Sector-63, Noida, U.P. India</address></Link>
          </div>
        </div>
      </div>
      <div className="form mt-5">
        <form ref={form}  onSubmit={sendEmail} className="php-email-form" role='form'>
          <div className="row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control"  placeholder="Your Name" required onChange={(e)=>onValueChange(e)}  name="user_name" />
            </div>
            <div className="form-group col-md-6">
              <input type="email" className="form-control"   placeholder="Your Email" required onChange={(e)=>onValueChange(e)} name="user_email" />
            </div>
          
          <div className="form-group">
            <input type="text" className="form-control"   placeholder="Subject" required  onChange={(e)=>onValueChange(e)} name="subject"/>
          </div>
          <div className="form-group">
            <textarea className="form-control" rows={5} placeholder="Message" required  onChange={(e)=>onValueChange(e)}  name="message"  />
          </div>
          <div className="my-3">
          <div className="text-center"><button className='btn btn-dark' type='submit'  onClick={()=> addContactDetails()}>Send Message</button></div>
            </div>
            </div>
        </form>
      </div>
    </div>
  </section>  
</div>

    
    
    </Layout>
  )
}

export default Contact

