import {useState, useEffect } from 'react'
import {editNews,   getNews } from '../../../api/Api' 
import {Link, useParams} from 'react-router-dom';
import AdminSidebar from '../../../Components/Layout/AdminMenu';

const EditNews = () => {

    const dafaultValue = {

        title: '',
        image:'',
        keypoints:'',
        description1:'',
        description2:'',
      }
    
       
      const [news,setNews]=useState(dafaultValue);
      
      const {id} = useParams();
      
      useEffect(()=>{
      loadNewsDetails();
    },[])
      
      const loadNewsDetails= async()=>{
      const response = await  getNews(id);
      setNews(response.data);
      }
      
        
      
      
      // form value
          const onValueChange=(e)=>{
              setNews({...news,[e.target.name]:e.target.value});
          }
      
          const editnewsDetails = async()=>{
            alert('Data Updated successfully');
             await editNews(news,id);
      
          }
  return (
    <>

      <div className="d-flex">
        <AdminSidebar/>

        <div className="container mt-4 mb-3">
          <h4 className='text-center mt-2 mb-2'>Edit News</h4>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">Title</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="title" required
                onChange={(e) => onValueChange(e)} name='title' value={news.title}
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Image Url</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image url" required onChange={(e) => onValueChange(e)} name='image' value={news.image}/>

            </div>
            <div className="col-md-2">
              <label htmlFor="validation" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter key  points" required onChange={(e) => onValueChange(e)} name='keypoints' value={news.keypoints}/>

            </div>

       
            <label htmlFor="validationCustom03" className="form-label">Description |</label>
            <textarea type='text' rows="4" cols="50" onChange={(e) => onValueChange(e)} name='description1' value={news.description1}/>
          
       
            <label htmlFor="validationCustom03" className="form-label">Description ||</label>
            <textarea id="w3review" rows="4" cols="50" onChange={(e) => onValueChange(e)} name='description2' value={news.description2}/>
          
          
            <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={() => editnewsDetails()}>Submit form</button>
            </div>
            <div className="col-12">
             <Link to='/dashboard/add-news' >
             <button className="btn btn-outline-primary" type="button" >Add News</button>
             </Link>
            </div>
          </form>
    

        </div>

      </div>


    </>
  )
}

export default EditNews