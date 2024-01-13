import React from 'react'
import '../../api/Assets/styles/main.css'
import { Link } from 'react-router-dom'
import './footer.css'
import Subscribe from '../Subscribe/Subscribe'

const Footer = () => {
  return (
    <>
    <Subscribe/>
  <footer id="footer" className="footer shadow-sm">
  <div className="footer-content">
    <div className="container">
      <div className="row g-5">
        <div className="about-col-lg-4">
          <h3 className="footer-heading">About Stm conference</h3>
          <p className='h6'>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world.</p>
          <p><Link to="#" className="footer-link-more">Learn More</Link></p>
        </div>
        <div className="col-6 col-lg-2">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links list-unstyled">
            <li><Link to="/"><i className="bi bi-chevron-right" /> Home</Link></li>
            <li><Link to="/blogs"><i className="bi bi-chevron-right" /> News</Link></li>
            <li><Link to="/about"><i className="bi bi-chevron-right" /> About us</Link></li>
            <li><Link to="/contact"><i className="bi bi-chevron-right" /> Contact</Link></li>
          </ul>
        </div>
        <div className="col-6 col-lg-4">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links list-unstyled">
            <li><Link to="/terms-and-conditions"><i className="bi bi-chevron-right" />Terms and conditions</Link></li>
            <li><Link to="/privacy-policy"><i className="bi bi-chevron-right" />Privacy Policy</Link></li>
            <li><Link to="/faq"><i className="bi bi-chevron-right" /> Faq's</Link></li>
          </ul>
        </div>
        
        <div className="col-lg-4">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-links footer-blog-entry list-unstyled" style={{lineHeight:'2'}}>
          <Link to="tel:+01204781211/219">Tel : 01204781211/219  </Link><br/>
          <Link to='mailto:conferences@conwiz.in'>Email : conferences@conwiz.in</Link>
            <li>
              <p><b>Address :</b> A-118, 1st Floor, Sector-63, Noida, U.P. India</p>
            </li>
       
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-legal">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <hr/>
          <div className="copyright">
            © Copyright <strong><span>stmconference</span></strong>. All Rights Reserved
          </div>
       </div>
      </div>
    </div>
  </div>
</footer>


    
    </>
  )
}

export default Footer