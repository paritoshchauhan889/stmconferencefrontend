import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from '../../Components/Banner/Slider';
import Cards from '../KnowMore/Cards';
import Company from '../../Components/Banner/Company/Company';
import { getNewss } from '../../api/Api';
import Layout from '../../Components/Layout/Layout';
import './home.css';

const Home = () => {
  const [newss, setNewss] = useState([]);

  useEffect(() => {
    getAllNewss();
  }, []);

  const getAllNewss = async (id) => {
    try {
      let response = await getNewss(id);
      setNewss(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const truncateText = (text, maxWords) => {
    if (!text) return '';

    const words = text.split(' ');

    if (words.length <= maxWords) {
      return text;
    } else {
      const truncatedText = words.slice(0, maxWords).join(' ');
      return truncatedText + '...';
    }
  };

  useEffect(() => {
    const marquee = document.getElementById('myMarquee');

    function stopMarquee() {
      marquee.stop();
    }

    function startMarquee() {
      marquee.start();
    }

    marquee.addEventListener('mouseover', stopMarquee);
    marquee.addEventListener('mouseout', startMarquee);

    return () => {
      marquee.removeEventListener('mouseover', stopMarquee);
      marquee.removeEventListener('mouseout', startMarquee);
    };
  }, []);

  return (
    <Layout title={'Home Page'}>
            <Slider />
        <div className="homedflex mt-2">
          <div className="col-md-8 p-2">
            <Cards />
          </div>
          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '4rem' }}>
              <div>
                <h4 className="fst-italic">Recent News</h4>
                <ul className="list-unstyled">
                  <marquee id="myMarquee" direction="up" height="400px">
                    {newss.map((news) => (
                      <Link to={`/detail-news/${news._id}`} key={news._id} className="text-decoration-none">
                        <div className="d-flex gap-3 align-items-start py-3 border-top border-bottom">
                          <img src={news.image} width={100} style={{ height: 'auto', margin: 'auto' }} alt="news" />
                          <div className="col-lg-8">
                            <span className="mb-0" style={{ fontSize: '15px', wordBreak: 'break-all' }}>
                              {truncateText(news.title, 8)}
                            </span>
                            <Link to={`/detail-news/${news._id}`} style={{ color: 'Highlight' }}>
                              Read more
                            </Link>
                            <div className="0">
                              {news.createdAt && !isNaN(new Date(news.createdAt)) && (
                                <small className="text-body-secondary">
                                  {new Date(news.createdAt).toDateString()}
                                </small>
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </marquee>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Company />
    </Layout>
  );
};

export default Home;
