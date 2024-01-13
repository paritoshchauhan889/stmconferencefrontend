import React from 'react';
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {


  return (
    <div>
      <div className="banner-img" />
      <div className="center">
        <div class="banner-content"><h1>Conferences</h1><div class="middle-line"></div><p>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.</p><Link to='/about'><button>Learn More</button></Link></div>

      </div>
    </div>

  );
};

export default Slider;
