import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getNewss } from '../../../api/Api';
import Layout from '../../../Components/Layout/Layout';

const BlogList = () => {


  const [newss, setNewss] = useState([]);

  useEffect(() => {
    getAllNewss();
  }, []);

  const getAllNewss = async (id) => {
    let response = await getNewss(id);
    setNewss(response.data);

  }
  return (
    <Layout title={'Blog List'}>
      <section id="search-result" className="search-result">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="category-title">All News List</h3>
              {
                newss.map(news => (
                  <div className="d-md-flex post-entry-2">
                    <Link to={`/detail-news/${news._id}`} className="m-4">
                      <img src={news.image} alt="news" width={250}  height={'auto'}/>
                    </Link>
                    <div style={{marginTop:'auto',marginBottom:'auto'}}>
                      <div className="post-meta">{news.createdAt && !isNaN(new Date(news.createdAt)) && (
                        <small className="text-body-secondary">
                          {new Date(news.createdAt).toDateString()}
                        </small>
                      )}</div>
                      <h4 style={{ margin: 'auto' }}><Link to={`/detail-news/${news._id}`}>{news.title}</Link></h4>
                      <p>{news.keypoints}</p>
                    </div>
                  </div>
                ))
              }

            </div>



          </div>
        </div>
      </section>


    </Layout>
  )
}

export default BlogList