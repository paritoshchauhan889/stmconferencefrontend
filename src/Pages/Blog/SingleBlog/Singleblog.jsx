import React, { useEffect, useState }  from 'react'
import comment1 from '../../../api/Assets/img/person-5.jpg'
import comment2 from '../../../api/Assets/img/person-2.jpg'
import reply1 from '../../../api/Assets/img/person-4.jpg'
import reply2 from '../../../api/Assets/img/person-3.jpg'
import {getNews }  from '../../../api/Api';
import {useParams} from 'react-router-dom'
import Layout from '../../../Components/Layout/Layout'

const Singleblog = () => {


   
  const [news,setNews]=useState({});
  
  const {id} = useParams();
  
  useEffect(()=>{
  loadNewsDetails();
},[])
  
  const loadNewsDetails= async()=>{
  const response = await  getNews(id);
  setNews(response.data);
  }
  
    
  
  
 
  
 

  

  
  return (
    <Layout title={'Blog List'}>
 
   <section className="single-post-content mx-4">
   <div className="row">
      <div className="col-md-12 post-content" data-aos="fade-up">
      
         <div  className="single-post">
         <div className="post-meta"><span className="date">Time</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
         <h1 className="mb-5">{news.title}</h1>
         <p><span className="firstcharacter" style={{whiteSpace: 'pre-line',textAlign:'justify'}}></span><b style={{fontSize:'20px'}}>About conference: </b>{news.description1}</p>
       
          <figure className="my-4 text-center">
          <img src={news.image} width='400px'  alt='news' className="img-fluid" />
          <figcaption>{news.keypoints}</figcaption>
        </figure>
    
         <p style={{whiteSpace: 'pre-line',textAlign:'justify'}}>{news.description2}</p>
       </div>
     
        <div className="comments">
          <h5 className="comment-title py-4">2 Comments</h5>
          <div className="comment d-flex mb-4">
            <div className="flex-shrink-0">
              <div className="avatar avatar-sm rounded-circle">
                <img className="avatar-img" src={comment1} alt='news' />
              </div>
            </div>
            <div className="flex-grow-1 ms-2 ms-sm-3">
              <div className="comment-meta d-flex align-items-baseline">
                <h6 className="me-2">Jordan Singer</h6>
                <span className="text-muted">2d</span>
              </div>
              <div className="comment-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui magni, placeat deserunt pariatur itaque laudantium impedit aliquam eligendi repellendus excepturi quibusdam nobis esse accusantium.
              </div>
              <div className="comment-replies bg-light p-3 mt-3 rounded">
                <h6 className="comment-replies-title mb-4 text-muted text-uppercase">2 replies</h6>
                <div className="reply d-flex mb-4">
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img className="avatar-img" src={reply1} alt='news' />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ms-sm-3">
                    <div className="reply-meta d-flex align-items-baseline">
                      <h6 className="mb-0 me-2">Brandon Smith</h6>
                      <span className="text-muted">2d</span>
                    </div>
                    <div className="reply-body">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </div>
                  </div>
                </div>
                <div className="reply d-flex">
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img className="avatar-img" src={reply2} alt='news' />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ms-sm-3">
                    <div className="reply-meta d-flex align-items-baseline">
                      <h6 className="mb-0 me-2">James Parsons</h6>
                      <span className="text-muted">1d</span>
                    </div>
                    <div className="reply-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore sed eos sapiente, praesentium.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment d-flex">
            <div className="flex-shrink-0">
              <div className="avatar avatar-sm rounded-circle">
                <img className="avatar-img" src={comment2} alt='news' />
              </div>
            </div>
            <div className="flex-shrink-1 ms-2 ms-sm-3">
              <div className="comment-meta d-flex">
                <h6 className="me-2">Santiago Roberts</h6>
                <span className="text-muted">4d</span>
              </div>
              <div className="comment-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum in corrupti dolorum, quas delectus nobis porro accusantium molestias sequi.
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-12">
            <h5 className="comment-title">Leave a Comment</h5>
            <div className="row">
            
            
              <div className="col-12 mb-3">
                <label htmlFor="comment-message">Message</label>
                <textarea className="form-control" id="comment-message" placeholder="Enter your name" cols={30} rows={10} defaultValue={""} />
              </div>
              <div className="col-12">
                <input type="submit" className="btn btn-dark" defaultValue="Post comment" />
              </div>
            </div>
          </div>
        </div>{/* End Comments Form */}
      </div>
     
    </div>
</section>

    
    </Layout>
  )
}

export default Singleblog