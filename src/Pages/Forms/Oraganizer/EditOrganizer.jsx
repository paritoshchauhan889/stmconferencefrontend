import {useState,useEffect} from 'react'
import {editOrganizer,   getOrganizer } from '../../../api/Api' 
import { useParams} from 'react-router-dom';
import { country } from '../../../Components/Country/Country'
import AdminSidebar from '../../../Components/Layout/AdminMenu';


const  EditOrganizer = () => {

  const dafaultValue = {
    organizerfullname: '',
    organizeremail: '',
    organizerphonenumber: '',
    designation:'',
    department:'',
    affilation:'',
    organizerimage: '',
    organizerkeypoints:'',
    organizeraddress: '',
    organizercountry: '',
    organizerstate: '',
    organizercity: '',
    organizerpincode: '',
    bio:'',
    profileurl: '',
    
  }

   
const [organizer,setOrganizer]=useState(dafaultValue);

const {id} = useParams();

useEffect(()=>{
loadorganizerDetails();
},[])

const loadorganizerDetails= async()=>{
const response = await  getOrganizer(id);
setOrganizer(response.data);
}

  


// form value
    const onValueChange=(e)=>{
        setOrganizer({...organizer,[e.target.name]:e.target.value});
    }

    const editorganizerDetails = async()=>{
      alert('Data Updated successfully');
       await editOrganizer(organizer,id);


    }
  return (
    <>

 <div className="d-flex">
  <AdminSidebar/>
  <div className="container mt-4 mb-3">
          <h4 className='text-center mt-2 mb-2'>Edit Organizer</h4>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Full Name" required
                onChange={(e) => onValueChange(e)} name='organizerfullname' value={organizer.organizerfullname}
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Email" required onChange={(e) => onValueChange(e)} name='organizeremail' value={organizer.organizeremail}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Phone Number" required onChange={(e) => onValueChange(e)} name='organizerphonenumber' value={organizer.organizerphonenumber}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Designation</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Designation" required onChange={(e) => onValueChange(e)} name='designation' value={organizer.designation}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Department</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Department" required onChange={(e) => onValueChange(e)} name='department' value={organizer.department}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Affilation</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Affilation" required onChange={(e) => onValueChange(e)} name='affilation' value={organizer.affilation}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Image Url</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image Url" required onChange={(e) => onValueChange(e)} name='organizerimage' value={organizer.organizerimage}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Key Points" required onChange={(e) => onValueChange(e)} name='organizerkeypoints' value={organizer.organizerkeypoints}/>

            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">Address</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='organizeraddress' value={organizer.organizeraddress} />

            </div>
            <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Organizer Country</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='organizercountry' value={organizer.organizercountry}> 
    <option selected value="" >Choose... </option>
                {
                  country.map(name => (
                    <option key={name.name}>{name.name}</option>
                  ))
                }

    </select>
    <div className="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">State</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='organizerstate' value={organizer.organizerstate}/>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='organizercity' value={organizer.organizercity}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">Pin Code</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='organizerpincode' value={organizer.organizerpincode} />

            </div>
        
          

            <label htmlFor="validationCustom03" className="form-label">Bio</label>
            <textarea id="w3review" rows="4" cols="50" onChange={(e) => onValueChange(e)} name='bio' value={organizer.bio}/>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">Profile url</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='profileurl' value={organizer.profileurl}/>

            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={() => editorganizerDetails()}>Submit form</button>
            </div>
          </form>
          
        </div>
 </div>
   
    </>
  )
}

export default EditOrganizer