import React from 'react'
import './authorservices.css'
import { Link } from 'react-router-dom'
import Layout from '../../../Components/Layout/Layout'

const AuthorServices = () => {
  return (
    <Layout>
    <div className="container">
  <h2 style={{color: '#a50c00', textAlign: 'center'}}>AUTHOR SERVICES</h2>
  <h3 style={{color: '#a50c00', textDecoration: 'underline'}}>Conference Proceedings Services:</h3>
  <p>As a conference proceedings publisher, our primary goal is to produce and deliver on time a high quality,
    error-free, attractively designed proceedings at a reasonable cost to your group, society, association, or
    organization.</p>
  <p>Professional book design and layout of a conference book is provided to you. we will create pages and design
    a professional format for both the main body of the text and the front matter of your proceedings volume.
  </p>
  <h6>Contact</h6>
  <p><b>Contact</b> <Link href="mailto:stmconferences@celnet.in" style={{color:'Highlight'}}>stmconferences@celnet.in</Link>to request a detailed
    proposal for any upcoming proceedings project.
  </p>
  <h5 style={{color: '#a50c00', textDecoration: 'underline'}}>Conference Marketing and Advertisement:</h5>
  <p>After the conference, we will advertise and promote your proceedings publication to specialists in the
    technical field presented, take sales orders, warehouse and fulfill all orders, and return royalties from
    all sales to your organization.
  </p>
  <h5 style={{color: '#a50c00', textDecoration: 'underline'}}>Author’s Services:</h5>
  <p>when presenter material (Article) is not camera-ready according to our format, we can keystroke and format
    papers, ensuring a uniform look to the finished document.
  </p>
  <ul>
    <li>Plagiarism Checking
    </li>
    <li>Peer Review with review form
    </li>
    <li>Copyediting
    </li>
    <li>Formatting</li>
    <li>Graphics
    </li>
    <li>DOI Service with online certificate
    </li>
    <li>Publication Certificate
    </li>
  </ul>

  <div className="container">
  <div className="row-prc top-row">
    <div className="col-md-4 custom-card">
      <div className="card p-4" style={{alignItems:'center'}}>
      <img width="48" height="48" src="https://img.icons8.com/fluency/48/secured-letter.png" alt="secured-letter"/>
        <div className="card-body">

          Acceptance letter
        </div>
      </div>
    </div>
    <div className="col-md-4 custom-card">
      <div className="card p-4" style={{alignItems:'center'}}>
      <img width="48" height="48" src="https://freeiconshop.com/wp-content/uploads/edd/certificate-flat.png" alt="secured-letter"/>
        <div className="card-body">

        E-Certificates

        </div>
      </div>
    </div>
    <div className="col-md-4 custom-card">
      <div className="card p-4" style={{alignItems:'center'}}>
      <img width="48" height="48" src="https://cdn-icons-png.flaticon.com/512/5778/5778439.png" alt="secured-letter"/>
        <div className="card-body">

        DOI Number Availability

        </div>
      </div>
    </div>
 
  </div>
  <div className="row-prc top-row">
  <div className="col-md-4 custom-card">
      <div className="card p-4" style={{alignItems:'center'}}>
      <img width="48" height="48" src="https://st2.depositphotos.com/5266903/8921/v/450/depositphotos_89215104-stock-illustration-print-rounded-vector-icon.jpg" alt="secured-letter"/>
        <div className="card-body">Hard copy
        </div>
      </div>
    </div>
    <div className="col-md-4 custom-card">
      <div className="card p-4" style={{alignItems:'center'}}>
      <img width="48" height="48" src="https://w7.pngwing.com/pngs/501/305/png-transparent-academic-journal-open-access-journal-publishing-science-special-poster-text-orange-logo.png" alt="secured-letter"/>
        <div className="card-body">Open access
        </div>
      </div>
    </div>
    <div className="col-md-4 custom-card">
      <div className="card p-4" style={{alignItems:'center'}}>
      <img width="48" height="48" src="data:image/png;base64,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" alt="secured-letter"/>
        <div className="card-body">Rapid publication

        </div>
      </div>
    </div>
  </div>
</div>

<p style={{textAlign:'center',fontWeight:'bold'}}>Three months’ access of our website, OJS where you can track the entire processing of your paper(s).</p>

</div>


    
   
    </Layout>
  )
}

export default AuthorServices
