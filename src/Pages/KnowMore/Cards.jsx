import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../../api/Assets/Conferences.jpg'
import image2 from '../../api/Assets/Organizers.jpg'
import image3 from '../../api/Assets/Speakers.jpg'
import image4 from '../../api/Assets/Events.jpg'
import './knowmore.css'

const Cards = () => {
  const AboutCard = [
    {
      img: image1,
      title: 'Conferences',
      paragraph: 'Nurturing Ideas, Inspiring Change',
      url: '/all-conferences'
    },
   
    {
      img: image3,
      title: 'Speakers',
      paragraph: 'Voices that Resonate, Ideas that Echo',
      url: '/all-speakers'
    },
   
  ]
  return (
    <>
       <div className="aboutpage">
        <h1 className='text-center '>Who we are!</h1>
        <p className='mb-1 'style={{textAlign:'justify'}}>Welcome to STM Conferences, an initiative by STM Journals publication. an initiative by STM Journals publication. We are a leading journal publication with the name STM (Scientific, Technical, and Medical Journals), based in Noida, committed to advancing knowledge and fostering collaboration in various fields. With a rich history of delivering high-quality research content, we are excited to extend our expertise to the world of conferences.</p>
        <p className='mb-1' style={{textAlign:'justify'}}>At STM Conferences, we believe in the power of intellectual exchange and the impact of shared insights. Our goal is to create a platform that brings together experts, scholars, researchers, and professionals from around the globe. By facilitating meaningful discussions, innovative ideas, and cutting-edge research presentations, we aim to contribute to the growth and development of various domains.</p>
        <p className='mb-1' style={{textAlign:'justify'}}>Your groundbreaking work and innovative ideas shared during the conferences have not only enriched the discussions but have also inspired fellow researchers worldwide. Now is the opportunity to ensure that your insights reach an even wider audience through our esteemed publication channels.
</p>

      </div>
      <div className="row mx-2">
        <h1 className='text-center about' style={{color:'#1d5818'}}><strong>Know More..</strong></h1>
  <div className="know-home-card" style={{display:'flex',justifyContent:'space-between'}}>
  {AboutCard.map((item) =>
          <div className="col-md-4 mt-2" key={item._id}>


            <Link to={item.url}>
            <div className="know-card text-center"><img src={item.img} className="img img-responsive" alt='Know More' />
              <div className="profile-content"><h4>{item.title}</h4>
                <div className="profile-description">{item.paragraph}</div>
                <div className="row">
                  <div className="col-xs-4">
                    <div className="profile-overview">
                      <button type="button" className="btn btn-dark ">Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>

          </div>
        )}
        
<div className="col-md-4 mt-2 ">
<Link to='/all-sponsers'>

<div className="know-card text-center"><img src={image4} className="img img-responsive" alt='News' />
  <div className="profile-content"><h4>Sponsers</h4>
    <div className="profile-description">Beyond Conferencing</div>
    <div className="row">
      <div className="col-xs-4">
        <div className="profile-overview mt-4">
          <Link to='/all-sponsers'><button type="button" className="btn btn-dark">Read More</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>
</div>
<div className="col-md-4 mt-2 ">
<Link to='/all-organizers'>

<div className="know-card text-center"><img src={image2} className="img img-responsive" alt='News' />
  <div className="profile-content"> <Link to='/all-organizers'><h4>Organizers</h4></Link>
    <div className="profile-description">Architects of Inspiration</div>
    <div className="row">
      <div className="col-xs-4">
        <div className="profile-overview mt-4">
          <Link to='/all-organizers'><button type="button" className="btn btn-dark">Read More</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>
</div>
  </div>

</div>




    </>
  )
}

export default Cards