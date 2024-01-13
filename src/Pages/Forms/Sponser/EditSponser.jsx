import {useState,useEffect} from 'react'
import {editSponser,   getSponser } from '../../../api/Api' 
import { useParams} from 'react-router-dom';
import { country } from '../../../Components/Country/Country'
import AdminSidebar from '../../../Components/Layout/AdminMenu';


const  EditSponser = () => {

    const dafaultValue={
        sponserfullname:'',
        sponseremail:'',
        sponserphonenumber:'',
        sponserimage:'',
        sponseraddress:'',
        sponsercountry:'',
        sponserstate:'',
        sponsercity:'',
        sponserpincode:'',
        sponserkeypoints:'',
        sponserabout:'',
    }

   
const [sponser,setSponser]=useState(dafaultValue);

const {id} = useParams();

useEffect(() => {
  loadSponserDetails();
}, []);



const loadSponserDetails= async()=>{
const response = await  getSponser(id);
setSponser(response.data);
}

  


// form value
    const onValueChange=(e)=>{
        setSponser({...sponser,[e.target.name]:e.target.value});
    }

    const editSponserDetails = async()=>{
      alert('Data Updated successfully');
       await editSponser(sponser,id);


    }
  return (
    <>

 <div className="d-flex">
  <AdminSidebar/>
 <div className="container mt-4 mb-3">
        <h4 className='text-center mt-2 mb-2'>Edit Sponser</h4>
     <form className="row g-3 needs-validation" noValidate>
  <div className="col-md-4">
    <label htmlFor="validationCustom01" className="form-label">Full Name</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Full Name" required 
    onChange={(e)=>onValueChange(e)} name='sponserfullname' value={sponser.sponserfullname}
    />
  
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom02" className="form-label">Email</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Email" required onChange={(e)=>onValueChange(e)} name='sponseremail' value={sponser.sponseremail}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="col-md-4">
    <label htmlFor="validation" className="form-label">Phone Number</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Phone Number" required  onChange={(e)=>onValueChange(e)} name='sponserphonenumber' value={sponser.sponserphonenumber}/>
 
  </div>
  <div className="col-md-4">
    <label htmlFor="validation" className="form-label">Image Url</label>
    <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Phone Number" required onChange={(e)=>onValueChange(e)} name='sponserimage' value={sponser.sponserimage}/>
 
  </div>
  <div className="col-md-12">
    <label htmlFor="validationCustom03" className="form-label">Address</label>
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponseraddress' value={sponser.sponseraddress}/>

  </div>
  <div className="col-md-3">
    <label for="validationCustom04" className="form-label">Sponser Country</label>
    <select className="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='sponsercountry' value={sponser.sponsercountry}> 
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
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponserstate' value={sponser.sponserstate}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponsercity' value={sponser.sponsercity}/>

  </div>
  <div className="col-md-4">
    <label htmlFor="validationCustom03" className="form-label">Pin Code</label>
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponserpincode' value={sponser.sponserpincode}/>

  </div>
  <div className="col-md-12">
    <label htmlFor="validationCustom03" className="form-label">Key Points</label>
    <input type="text" className="form-control" id="validationCustom03" required onChange={(e)=>onValueChange(e)} name='sponserkeypoints' value={sponser.sponserkeypoints}/>

  </div>

  <label htmlFor="validationCustom03" className="form-label">About</label>
  <textarea id="w3review"  rows="4" cols="50" onChange={(e)=>onValueChange(e)} name='sponserabout' value={sponser.sponserabout}/>

  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=>editSponserDetails()}>Update Sponser</button>
  </div>
</form>


    </div>
 </div>
   
    </>
  )
}

export default EditSponser