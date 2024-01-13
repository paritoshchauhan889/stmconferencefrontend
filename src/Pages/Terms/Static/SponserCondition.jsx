import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Layout from '../../../Components/Layout/Layout'

const SponserCondition = () => {
  return (
    <Layout title={'Sponser - Condition'}>
     <div className="container p-4 sponser-container">
  <p> STM Conferences provides opportunities, revealing oodles of unique ways you can reach your prospects through our many events and offerings. We invite you to explore our agenda and discover the ways you can partner, sponsor and advertise with us. We at STM Conferences provide direct exposure to your products and brand.</p>
  <p>STM Conferences is a global leader in producing high-quality conferences, meetings, workshops and symposia in all major fields of science, technology, medicine, law and management. STM Conferences supports broad scope research and peer review at a broad range of specialists around the world.</p>
  <p>The key strategic objective of STM Conferences is to communicate science, medical, law and management research between academia, and industry. Through inspiring sessions and tons of networking, you will learn to be even more audacious and bold than you are now and free to grow your mind, grow your business, and grow your bottom-line.</p>
  <h6>Why Sponsor @ STM Conferences?</h6>
  <ul>
    <li>Increase your visibility</li>
    <li>Building your reputation and brand</li>
    <li>Direct access to your targeted client</li>
    <li>Strengthen client relationship through face to face interaction</li>
    <li>Make your product more recognizable</li>
    <li>Find new partners and meet like-minded professionals</li>
    <li>Getting ROI</li>
  </ul>
  <p>Many of our sponsorship and exhibit offerings include extra registrations for your team, logo attribution on our conference and marketing materials, access to the delegate list, and more. You can select from our sponsorship brochure the package that will not only help you achieve your marketing goals but accommodate your budget as well.</p>
  <h6>View Meetings International Upcoming Conferences through STM Conferences- <Link to='#'>Click Here</Link></h6>
  <h5 className='text-center'>Sponsorship</h5>
  <p className='text-center'>Successful conferences can attract sponsorship and a better overall outlook towards the future of such conferences.</p>
  <div className="sponser-container" style={{margin:'10px'}}>
    <table style={{margin:'auto'}}>
     <tbody style={{textAlign:'center',fontWeight:'700px'}}>
      <tr >
        <th style={{backgroundColor:'#b22222'}}>BASIC</th>
        <th style={{backgroundColor:'#9acd32'}}>SILVER</th>
        <th style={{backgroundColor:'#4b0082'}}>GOLD</th>
        <th style={{backgroundColor:'#4169e1'}}>PLATINUM</th>
      </tr>
      <tr>
        <td >₹25000 + GST</td>
        <td>₹35000 + GST</td>
        <td>₹50000 + GST</td>
        <td>₹80000 + GST</td>
      </tr>
     </tbody>
    </table>
  </div>
  <h6>PLATINUM SPONSORS FEE: Rs 80,000 + GST</h6>
  <ul>
    <li>One Plenary speaking opportunity/3 Corporate-sponsored workshop</li>
    <li>Company acknowledgment on all official conference support signs, program and on all marketing collateral</li>
    <li>Inclusion of logo on all event materials and STM Journal home page</li>
    <li>Complimentary registration for 5 delegates</li>
    <li>Complimentary tabletop exhibition</li>
    <li>One set of promotional materials included in the registration material</li>
    <li>A complimentary full-page advertisement in the program booklet</li>
    <li>After the event “Thank you email” to all attendees with company logo</li>
    <li>A waiver on Sponsorship for any of our next year conferences</li>
    <li>15 minutes time after the Second of keynote speeches to the audience in the seminar hall.</li>
    <li>Three participants can be allowed to attend all the Technical Sessions with Lunch and Snacks</li>
    <li>Logo on Main conference banner</li>
    <li>One Stall to exhibit their products and posters</li>
    <li>One conference kit</li>
    <li>Logo on the front cover page of the souvenir</li>
  </ul>
  <h6>GOLDEN SPONSORS FEE: Rs 50,000 + GST</h6>
  <ul>
    <li>Two participants can be allowed to attend all the Technical Sessions with Lunch and Snacks.</li>
    <li>Logo on Main conference banner</li>
    <li>One conference kit</li>
    <li>Logo on the Back cover page of the souvenir.</li>
    <li>Company acknowledgment on all official conference support signs, program, and on all marketing collateral</li>
    <li>Inclusion of logo on all event materials and Allied Academies Journal home page</li>
    <li>Two corporate sponsored workshop</li>
    <li>Complimentary registration for 3 delegates</li>
    <li>Complimentary tabletop exhibition</li>
    <li>One set of promotional materials included in the registration material</li>
    <li>A complimentary full-page advertisement in the conference proceedings</li>
    <li>A waiver on Sponsorship for any of our next year conferences</li>
  </ul>
  <h6>SILVER SPONSORS FEE: Rs 35,000 + GST</h6>
  <ul>
    <li>Company acknowledgment on all official conference support signs, program and on all marketing collateral including enhanced logo on the conference holding slide</li>
    <li>Special recognition on the conference website</li>
    <li>One Corporate sponsored workshop</li>
    <li>Complimentary registration for 2 delegates</li>
    <li>Complimentary table top exhibition</li>
    <li>One set of promotional materials included in registration material</li>
    <li>Waiver on Sponsorship for any of our next year conferences</li>
    </ul>
    <h6>EXHIBITION SPONSORS FEE: Rs 25,000 + GST</h6>
    <ul>
      <li>Company acknowledgment on all official conference support signs, program and on all marketing, collateral including enhanced logo on the conference holding slide</li>
      <li>Special recognition on the conference website</li>
      <li>Complimentary registration for 1 delegate</li>
      <li>Complimentary tabletop exhibition</li>
      <li>One set of promotional materials included in the registration material</li>
      <li>A waiver on Sponsorship for any of our next year conference</li>
    </ul>
    <h6>Additional Sponsorship Packages</h6>
    <ul>
      <li>Lunch/Dinner Sponsor</li>
      <li>Coffee Break Sponsor</li>
      <li>Conference Delegate Bag Sponsor</li>
      <li>Bag Insert Sponsor</li>
      <li>Lanyard (neck cords)</li>
    </ul>
    <h6>Advertisements on Conference Proceedings</h6>
    <ul>
      <li>Outside Back Cover (color)</li>
      <li>Inside Front Cover (color)</li>
      <li>Inside Back Cover (color)</li>
    </ul>
    <h5>For More Details</h5>
    <h6>Connect with us at</h6>
    <p>stmconferences@celnet.in, info@stmconferences.in, sponsors@stmconferences.in</p>
    <p>+91-120-4781200</p>
</div>
    </Layout>
  )
}

export default SponserCondition
