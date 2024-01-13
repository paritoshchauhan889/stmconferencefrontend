import React from 'react'
import { useState } from 'react'
import { URL } from '../../../api/Api' 
import ViewFaq from './ViewFaq'
import AdminSidebar from '../../../Components/Layout/AdminMenu'
import ManagerSidebar from '../../../Components/Layout/ManagerMenu'

import axios from 'axios'

const AddFaq = ({userRole}) => {

  const defaultValue = {
    faqheading: '',
    faqparagraph: '',
  };

  const [faq, setFaq] = useState(defaultValue);

  const onValueChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  const addFaq = async (data) => {
    try {
      const response = await axios.post(`${URL}/api/faq`, data);
      console.log('API response:', response.data);
      // Handle success, update UI, etc.
    } catch (error) {
      console.error('Error adding FAQ:', error);
    }
  };

  const addFaqDetails = async () => {
    await addFaq(faq);
  };
  return (
    <>

<div className="d-flex">
{userRole === 'admin' ? <AdminSidebar className='sticky'/> : <ManagerSidebar className='sticky'/>}


<div className="container mt-4 mb-3">
        <h4 className='text-center mt-2 mb-2'>Add Faq's</h4>
     <form className="row g-3 needs-validation" noValidate>

  <div className="col-md-12">
    <label htmlFor="validationCustom01" className="form-label">Heading</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="heading" required 
    onChange={(e)=>onValueChange(e)} name='faqheading' 
    />
  
  </div>
  
 
  <div className="form-group purple-border">
  <label for="exampleFormControlTextarea4">Paragraph</label>
  <textarea className="form-control" id="exampleFormControlTextarea4" rows="3" onChange={(e)=>onValueChange(e)} name='faqparagraph' ></textarea>
</div>


  
  

 



  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=> addFaqDetails()}>Add Faq</button>
  </div>
</form>
<h4 className='text-center'>All Faq's  Data</h4>
<div className="overflow-scroll">
 
<ViewFaq/>

</div>

    </div>

   </div>
  
   
    </>
  )
}

export default AddFaq