import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './reviewers.css';
import Layout from '../../Components/Layout/Layout';
import { Link } from 'react-router-dom';

const Reviewers = () => {
  const testimonials = [
    {
      author:"Subham",
      company:"Celnet",
      quote: "I'm thoroughly impressed with Stm Conferences ! Their intuitive platform streamlined our conference logistics, making attendee management a breeze.",
      image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/3f759531-shubham-150x150.jpg',
    },
    {
      author:"Nigam",
      company:"It Break",
        quote: "Kudos to [Stm Conferences] for their outstanding service! Their platform's ease of use and robust features made organizing our conference a delight.",
        image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/8e254b48-premn-150x150.jpg',
    },
    {
      author:"Paritosh Chauhan",
      company:"Dhruv Info Systems Pvt Ltd",
      quote: "Paritosh The team's support and dedication ensured a flawless event execution. Stm Conferences is definitely our choice for future conferences!",
      image: 'https://paritosh.netlify.app/static/media/myimg.e0d125b762b2de3a6028.jpg',
    },
    {
      author:"Nidhi",
      company:"Conferences",
      quote: "The seamless registration process, coupled with their proactive support, ensured a stress-free event. Their innovative features and user-friendly interface set the stage for an engaging and memorable conference.",
      image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/11/080e7a5e-img-20231104-wa0010.jpg',
    },
    {
      author:"Aditi Mantri",
      company:"Dhruv Info Systems Pvt Ltd",
      quote: "Stm Conferences stands out with its innovative features. The agenda management tools, speaker engagement options, and customizable registration process added a professional touch to our event.",
      image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/1b23485e-aditi.jpg',
    },
    {
      author:"Keshvam Shrivastava",
      company:"IT Break",
      quote: "In conclusion, Stm conferences is a comprehensive and user-friendly solution for conference management. Its range of features, coupled with excellent customer support, makes it a top choice for anyone organizing events of any scale.",
      image: 'https://res.cloudinary.com/de7mwtft7/image/upload/v1701172091/zq0lrf25evuliyte07cx.jpg',
    },
    {
      author:"Vivek Verma",
      company:"It Break",
        quote: "The comprehensive features, like agenda management and speaker engagement tools, ensured a professional and engaging event. I highly recommend [Website Name] for anyone seeking a top-tier conference hosting solution.",
        image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/8eeca4d6-img-20230818-wa0000.jpg',
      },
      {
        author:"Preeti ",
        company:"Stm Journals",
        quote: "The seamless registration process and customizable options exceeded our expectations. The team's support and dedication ensured a flawless event execution.",
        image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/be042411-img-20230818-wa0007.jpg',
      },
      
      {
        author:"Amit Kumar Rai",
        company:"Stm Journals",
        quote: "Their innovative features and user-friendly interface set the stage for an engaging and memorable conference. Kudos to [Stm Conferences] for exceeding our expectations!",
        image: 'https://storage.googleapis.com/journals-stmjournals-com-wp-media-to-gcp-offload/2023/09/313a774a-amit.jpg',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <Layout title={'Reviewers page'}>
      <div className="mt-4">
      <h3 className='text-center'>Our Reviewers</h3>
      <div className="container mt-2 mb-2">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
              <figure className="snip1157" key={index}>
                <blockquote className='border'>{testimonial.quote}</blockquote>
                <img src={testimonial.image} alt={`Reviewer ${index + 1}`} />
                <div className="author">
                  <h6>{testimonial.author} <br/><span>{testimonial.company}</span></h6>
                  
                </div>
              </figure>
          ))}
        </Slider>
      <div className="text-center mt-4">
      <Link to='/feedback'><button className='btn btn-dark'>Feedback</button></Link>
      </div>

      </div>
      </div>
     

    </Layout>
  );
};

export default Reviewers;
