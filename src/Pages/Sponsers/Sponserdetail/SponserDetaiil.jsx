import React, { useState, useEffect } from 'react';
import '../Sponsers.css';
import { getSponser } from '../../../api/Api';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Layout from '../../../Components/Layout/Layout';

const SponserDetail = () => {
  const [sponser, setSponser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getAllSponserDetails = async () => {
      try {
        const response = await getSponser(id);
        setSponser(response.data);
      } catch (error) {
        // Handle error here (e.g., show an error message)
        console.error('Error fetching sponser details:', error);
      }
    };

    getAllSponserDetails();
  }, [id]); // Include 'id' in the dependency array

  return (
    <Layout title={'Sponser - Details'}>
      <section id="speakers-details">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Sponser Details</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={sponser.sponserimage} alt="Sponser" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <div className="details">
                <h2>{sponser.sponserfullname}</h2>
                <h4>{sponser.sponseremail}</h4>
                <div className="social">
                  <Link to="#"><i className="bi bi-twitter" /></Link>
                  <Link to="#"><i className="bi bi-facebook" /></Link>
                  <Link to="#"><i className="bi bi-instagram" /></Link>
                  <Link to="#"><i className="bi bi-linkedin" /></Link>
                </div>
                <span> <b>KeyPoints: </b>{sponser.sponserkeypoints}</span>
                <p><b>About:</b> {sponser.sponserabout}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SponserDetail;
