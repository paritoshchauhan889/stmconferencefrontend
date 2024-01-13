import {useState,useEffect} from 'react'
import {editVenue,   getVenue } from '../../../api/Api' 
import { useParams} from 'react-router-dom';
import AdminSidebar from '../../../Components/Layout/AdminMenu';

const EditVenue = () => {


   

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

    const [venue,setVenue]=useState(dafaultValue);
    
    const {id} = useParams();
    
    useEffect(()=>{
    loadVenueDetails();
    },[])
    
    const loadVenueDetails= async()=>{
    const response = await  getVenue(id);
    setVenue(response.data);
    }
    
      
    
    
    // form value
        const onValueChange=(e)=>{
            setVenue({...venue,[e.target.name]:e.target.value});
        }
    
        const editVenueDetails = async()=>{
            alert('Data Updated successfully');
           await editVenue(venue,id);
    
    
        }
    return (
        <>

            <div className="d-flex">
                <AdminSidebar/>

                <div className="container mt-4 mb-3">
                    <h4 className='text-center mt-2 mb-2'>Edit Venue</h4>
                    <form className="row g-3 needs-validation" noValidate>
                       
                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Name of Place</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="venue place" required name="nameofplace" value={venue.nameofplace}
                                onChange={(e) => onValueChange(e)} 
                            />

                        </div>
                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Address Line</label>
                            <input type="text" className="form-control" id="validationCustom01" name='address' required value={venue.address}
                                onChange={(e) => onValueChange(e)} 
                            />

                        </div>
                      
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Image Url</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='image'  value={venue.image}/>

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Venue Url</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="venue url" required onChange={(e) => onValueChange(e)} name='venueurl'  value={venue.venueurl}/>

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Email</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='email'  value={venue.email}/>

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom02" className="form-label">Contact Number</label>
                            <input type="tel" pattern="[0-9]{10}" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='contactnumber' value={venue.contactnumber}/>

                        </div>
                       <label><b className="h5 mt-2">Contact details</b><hr/></label>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person Name</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="contactdetail" required value={venue.contactpersonname}
                                onChange={(e) => onValueChange(e)} name='contactpersonname'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person Email</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder="Contact person  email" required value={venue.contactpersonemail}
                                onChange={(e) => onValueChange(e)} name='contactpersonemail'
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Contact Person  Number</label>
                            <input type="tel"  pattern="[0-9]{10}" className="form-control" id="validationCustom01" placeholder="Entar only 10 digits" required value={venue.contactpersonnumber}
                                onChange={(e) => onValueChange(e)} name='contactpersonnumber'
                            />
                             
                        </div>
                       <div className="col-md-4">
                       <button  className="col-md-3 btn btn-primary" type="button"  style={{marginTop:'30px'}}>Add More</button>
                       </div>
                        <hr/>
                     
                       
                       


                        <label htmlFor="validationCustom03" className="form-label">Description</label>
                        <textarea type='text' rows="4" cols="50" onChange={(e) => onValueChange(e)} name='description' value={venue.description}/>


                        <div className="col-12">
                            <button className="btn btn-primary" type="submit" onClick={() => editVenueDetails()}>Update Venue</button>
                        </div>
                    </form>
                  

                </div>

            </div>


        </>
    )
}

export default EditVenue