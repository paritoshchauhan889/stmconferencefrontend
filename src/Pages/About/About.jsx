import React from "react";
import './About.css'
import AboutBackground from '../../api/Assets/aboutbackground.mp4'
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";



const About = () => {


  return (
    <Layout title={'About Page'}>
     
   <div className="about-body">
  <div className="about-page">
    <video autoPlay muted loop>
      <source src={AboutBackground} type="video/mp4" />
    </video>
    <div className="overlay" />
    <div className="about-content">
      <h1>ABOUT-US</h1>
      <div className="middle-line" />
      <p>Welcome to STM Conference, a leading organization dedicated to
        organizing and facilitating high-quality conferences and events all
        over the world. With a team of experienced professionals and a
        commitment to excellence, we are proud to be a trusted partner for
        researchers, scholars, academics, and professionals in various
        fields.</p>
        <Link to='/contact'><button>CONTACT US</button></Link>
    </div>
  </div>
  <div className="about-container second">
    <div className="about-item">
      <div className="img img-first" />
      <div className="about-card">
        <h3>OUR MISSION</h3>
        <p>At STM Conference, our mission is to facilitate the advancement of
          knowledge and foster collaboration among professionals in various
          fields through high-quality conferences and events worldwide. We aim
          to provide a platform for individuals to share their research, ideas,
          and experiences, promoting learning, discussion, and innovation.</p>
      </div>
    </div>
    <div className="about-item">
      <div className="img img-second" />
      <div className="about-card">
        <h3>OUR VISION</h3>
        <p>Our vision is to become a global leader in organizing conferences
          and events that bring together professionals from diverse backgrounds
          and cultures, promoting the exchange of knowledge and ideas. We strive
          to create a welcoming and inclusive environment that encourages
          collaboration, creativity, and professional growth.</p>
      </div>
    </div>
    <div className="about-item">
      <div className="img img-third" />
      <div className="about-card">
        <h3>OUR VALUES</h3>
        <p>Our core values guide everything we do, including our commitment to
          professionalism, quality, and inclusivity. We strive to provide the
          highest level of service, ensuring that every aspect of the event is
          well-planned and executed to perfection. We are committed to creating
          a welcoming and inclusive environment where all participants feel
          comfortable and valued.</p>
      </div>
    </div>
  </div>
</div>

    </Layout>
  );
};

export default About;
