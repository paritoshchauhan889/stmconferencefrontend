import React, {useState,useEffect} from 'react'
import '../Speakers.css'
import {useParams} from 'react-router-dom'
import {getSpeaker } from '../../../api/Api' 
import { Link } from 'react-router-dom'
import Layout from '../../../Components/Layout/Layout'


const SpeakerDetaiil = () => {



  const [speaker,setSpeaker]=useState({});
  const {id} = useParams();

useEffect(()=>{
loadSpeakerDetails();
  // eslint-disable-next-line
},[]);

const loadSpeakerDetails= async()=>{
const response = await  getSpeaker(id);
setSpeaker(response.data);
}
  return (
    <Layout title={'Speakers - Details'}>
    <section id="speakers-details">
  <div className="container">
    <div className="section-header text-center mb-4">
      <h2>Speaker Details</h2>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <img src={speaker.speakerimage} alt="Speaker 1" className="img-fluid" />
        <h2>{speaker.speakerfullname} <Link to={speaker.profileurl}><i className="bi bi-linkedin" /></Link></h2>  
          <h5>{speaker.speakeremail}</h5>
      </div>
     
      <span className='mt-4' style={{whiteSpace: 'pre-line',textAlign:'justify'}} >{speaker.bio}</span>
    </div>
  </div>
</section>

    </Layout>
  )
}

export default SpeakerDetaiil