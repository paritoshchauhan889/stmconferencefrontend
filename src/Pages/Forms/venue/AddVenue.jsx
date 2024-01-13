import React, { useState } from "react";
import { addVenue } from '../../../api/Api'
import ViewVenue from "./ViewVenue";
import AdminSidebar from "../../../Components/Layout/AdminMenu";
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'


const AddVenue = ({userRole}) => {


   

    const dafaultValue = {

        nameofplace: '',
        address:'',
        image: '',
        venueurl: '',
        email: '',
        contactnumber: '',
        contactpersonname:'',
        contactpersonemail:'',
        contactpersonnumber:'',
        description:'',

    }

    const [venue, setVenue] = useState(dafaultValue);

    // form value
    const onValueChange = (e) => {
        setVenue({ ...venue, [e.target.name]: e.target.value });
    }


    const addVenueDetails = async () => {
        alert('Data Submitted successfully');
        await addVenue(venue);
    }
    return (
        <>

            <div className="d-flex">
            {userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}


                <div className="container mt-4 mb-3">
                    <h4 className='text-center mt-2 mb-2'>Add Venue</h4>
                    <form className="row g-3 needs-validation" noValidate>
                       
                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Name of Place</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="venue place" required name="nameofplace"
                                onChange={(e) => onValueChange(e)} 
                            />

                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Address Line</label>
                            <input type="text" className="form-control" id="validationCustom01" name='address' required
                                onChange={(e) => onValueChange(e)} 
                            />

                        </div>
                      
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Image Url</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='image' />

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Venue Url</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="venue url" required onChange={(e) => onValueChange(e)} name='venueurl' />

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Email</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='email' />

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Contact Number</label>
                            <input type="tel" pattern="[0-9]{10}" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='contactnumber' />

                        </div>
                       <label><b className="h5 mt-2">Contact details</b><hr/></label>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person Name</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="contactdetail" required
                                onChange={(e) => onValueChange(e)} name='contactpersonname'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person Email</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="Contact person  email" required
                                onChange={(e) => onValueChange(e)} name='contactpersonemail'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person  Number</label>
                            <input type="tel"  pattern="[0-9]{10}" className="form-control" id="validationCustom01" placeholder="Entar only 10 digits" required
                                onChange={(e) => onValueChange(e)} name='contactpersonnumber'
                            />
                             
                        </div>
                       <div className="col-md-4">
                       <button  className="col-md-3 btn btn-primary" type="button"  style={{marginTop:'30px'}}>Add More</button>
                       </div>
                        <hr/>
                     
                       
                       


                        <label htmlFor="validationCustom03" className="form-label">Description</label>
                        <textarea type='text' rows="4" cols="50" onChange={(e) => onValueChange(e)} name='description' />


                        <div className="col-12">
                            <button className="btn btn-primary" type="submit" onClick={() => addVenueDetails()}>Add form</button>
                        </div>
                    </form>
                    <h4 className='text-center'>All Venue  Data</h4>
                    <div className="overflow-scroll">

                        <ViewVenue/>

                    </div>

                </div>

            </div>


        </>
    )
}

export default AddVenue