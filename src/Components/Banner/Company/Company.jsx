import React from 'react'
import './Company.css'
import { Link } from 'react-router-dom'
import nstc from '../../../api/Assets/img/nstc-logo.png'
import journalslibrary from '../../../api/Assets/img/Journal-Library-logo.png'
import openbook from '../../../api/Assets/img/openbook.png'
import conwiz from '../../../api/Assets/img/conwiz-logo.gif'
import stmlogo from '../../../api/Assets/img/stmlogo.png'
import openaccess from '../../../api/Assets/img/openaccess-logo.png'
import apidlogo from '../../../api/Assets/img/Apid-logo.png'
import manuscript from '../../../api/Assets/img/manuscript-engine.png'

const Company = () => {
  const intiatives =[
    {
      name:'Apid',
      img:apidlogo,
      url:'https://apid.journalslibrary.com/'
    },
    {
      name:'Nstc',
      img:nstc,
      url:'https://nanoschool.in/Nstc/'
    },
    {
      name:'Manuscript-Engine',
      img: manuscript,
      url:'https://manuscript-engine.journalslibrary.com'
    },
    {
      name:'Journals Library',
      img:journalslibrary,
      url:'https://journalslibrary.com/'
    },
    {
      name:'Open Book',
      img:openbook,
      url:'https://openbookspublisher.com/index.php/openbooks'
    },
    {
      name:'Conwiz',
      img:conwiz,
      url:'https://conwiz.in/'
    }
   
  ]
  return (
    <>
    
   <section id="supporters" className="section-with-bg mt-5">
   <div className="container mt-2 mb-4 aos-init aos-animate" data-aos="fade-up">
    <div className="section-header">
    <h2 className='text-center' style={{color: "#1d5818"}}>Our Journals</h2>
    </div>
    <div className="row no-gutters mt-2 supporters-wrap clearfix aos-init aos-animate" data-aos="zoom-in" data-aos-delay={100}>
       <div className="col-sm-6">
       <Link to='https://stmjournals.in'>
       <div className="supporter-logo">
         <img src={stmlogo} className="img-fluid" alt="logo" />
       </div>
       </Link>
     </div>
     <div className="col-sm-6">
       <Link to='https://journals.stmjournals.com'>
       <div className="supporter-logo">
         <img src={openaccess} className="img-fluid" alt="logo" />
       </div>
       </Link>
     </div>


     

    </div>
  </div>
  <div className="container  mt-2 mb-4 aos-init aos-animate" data-aos="fade-up">
    <div className="section-header">
     <h2 className='text-center' style={{color: "#1d5818"}}>Our Initiatives</h2>
    </div>
    <div className="row no-gutters mt-2 supporters-wrap clearfix aos-init aos-animate" data-aos="zoom-in" data-aos-delay={100}>
     
      {intiatives.map((item)=>
       <div className="col-lg-3 col-md-4 col-xs-6" key={item.name}>
       <Link to={item.url}>
       <div className="supporter-logo">
         <img src={item.img} className="img-fluid" alt="logo" />
       </div>
       </Link>
     </div>
      )}
     

    </div>
  </div>
</section>

    </>
  )
}

export default Company