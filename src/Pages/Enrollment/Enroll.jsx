import React, { useState} from 'react'
import './enroll.css'
import { country } from '../../Components/Country/Country'
import {addEnroll} from '../../api/Api'
import Layout from '../../Components/Layout/Layout'
import { toast } from 'react-hot-toast';



const Enroll = () => {

const details={
    firstname:'',
    lastname:'',
    email:'',
    contactnumber:'',
    address:'',
    country:'',
    state:'',
    city:'',
    pincode:'',
    academic:'',
    remark:'',
}

const [data, setData] = useState(details);



// form value
// Handle input changes
const onvalueChange = (e) => {
     const { name, value } = e.target;
    setData({ ...data, [name]: value });
    };


// Function to handle form submission
const handleSubmit = async () => {
    try {
      await addEnroll(data);
      toast.success("Conference Join Successfully");
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      // Handle error as needed
    }
  };
    

    return (
        <Layout title={'Enroll - Conference'}>
            <div className="container">
                <h3 className='mt-4 mb-4 text-center'>Conference Enrollment</h3>
                <div className="card mb-4">
                    <div className="row g-0 enroll d-flex" >
                    <div className="col-4" style={{marginTop:'80px'}}  >
                                <img src="https://img.freepik.com/free-vector/profiling-concept-illustration_114360-5854.jpg?w=740&t=st=1696315562~exp=1696316162~hmac=b31ab10248c7e299bf36d7e9db1846406286e1a3887dbce3e67231110fced2ff" className="img-fluid rounded-start" alt="enroll" />
                            </div>
                            <div className="col-8 enroll-form border-start" >
                                <div className="card-body">
                                    <h5 className="card-title text-center mt-2 mb-2"></h5>
                                    <form className="row g-3 container" onSubmit={handleSubmit}>
                                        <div className="col-md-6">
                                            <label htmlFor="validationDefaultfirstname" className="form-label">First name</label>
                                            <input type="text" className="form-control" id="validationDefaultfirstname" placeholder='Enter Your First Name' required onChange={(e)=>onvalueChange(e)} name='firstname' />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationDefaultlastname" className="form-label">Last name</label>
                                            <input type="text" className="form-control" id="validationDefaultlastname" placeholder='Enter Your Last Name' required  onChange={(e)=>onvalueChange(e)} name='lastname' />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationDefaultlastname" className="form-label">Email</label>
                                            <input type="text" className="form-control" id="validationDefaultlastname" placeholder='Enter Your Email Id' required  onChange={(e)=>onvalueChange(e)} name='email'  />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="validationDefaultfirstname" className="form-label">Contact Number</label>
                                            <input type="text" className="form-control" id="validationDefaultfirstname" placeholder='Enter Your Contact Number' required  onChange={(e)=>onvalueChange(e)} name='contactnumber'/>
                                        </div>

                                        <div className="col-md-12">
                                            <label htmlFor="validationDefaultfirstname" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="validationDefaultfirstname" placeholder='Address' required  onChange={(e)=>onvalueChange(e)} name='address'/>
                                        </div>
                                        <div className="col-12 d-flex justify-content-between ">
                                            
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault04" className="form-label">Country</label>
                                                <select className="form-select" id="validationDefault04" required onChange={(e)=>onvalueChange(e)} name='country'>
                                                    <option selected  value="" >Choose... </option>
                                                    {
                                                        country.map(name=>(
                                                            <option key={name.name}>{name.name}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault03" className="form-label">State</label>
                                                <input type="text" className="form-control" id="validationDefault03" required  onChange={(e)=>onvalueChange(e)} name='state'/>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault03" className="form-label">City</label>
                                                <input type="text" className="form-control" id="validationDefault03" required  onChange={(e)=>onvalueChange(e)} name='city'/>
                                            </div>

                                            <div className="col-md-4">
                                                <label htmlFor="validationDefault05" className="form-label">Pin Code</label>
                                                <input type="text" className="form-control" id="validationDefault05" required onChange={(e)=>onvalueChange(e)} name='pincode'/>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="validationDefault05" className="form-label">Name of Academic Orginazation</label>
                                            <input type="text" className="form-control" id="validationDefault05" required  onChange={(e)=>onvalueChange(e)} name='academic'/>
                                        </div>


                                        <div className="col-md-5">
                                            <label htmlFor="validationDefault05" className="form-label">Remark :</label>
                                            <input type="text" className="form-control" id="validationDefault05" required placeholder='remark' onChange={(e)=>onvalueChange(e)} name='remark'/>
                                        </div>

                                        <div className="col-12 ">
                                            <button className="btn btn-outline-primary " type="submit">Apply Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
                    
                         
                </div>


            </div>


        </Layout>
    )
}

export default Enroll
