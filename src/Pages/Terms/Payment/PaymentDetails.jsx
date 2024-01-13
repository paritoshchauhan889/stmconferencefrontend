import React from 'react'

import Layout from '../../../Components/Layout/Layout'

const PaymentDetails = () => {
  return (
    <Layout title={'Payment - Details'}>
      <div className="container" style={{padding:'20px',textAlign:'justify'}}>
  <h5>Registration fees can be paid via:</h5>
  <ul>
    <li>RTGS/NEFT</li>
    <li>At Par Cheque, Demand DraftDemand draft</li>
    <li>Paytm</li>
  </ul>
  <p>
    The delegate fee includes conference proceedings, registration kit and
    working lunch. Delegate fee can be wired transferred / sent by demand
    draft drawn in favor of <b>Consortium e-Learning Network Pvt. Ltd.</b>
  </p>
  <div className="container">
    <p>Bank Name: HDFC</p>
    <p>Bank Location: Sector-62, NOIDA,</p>
    <p>U.P. India</p>
    <p>A/C no.: 03942000001153</p>
    <p>IFSC Code: HDFC0000394</p>
    <p>Swift Code: HDFCINBBXXX</p>
    <p>Registration fee once paid will not be refunded.</p>
  </div>
  <p>You can also pay the via Paytm:</p>
  <p>Paytm Number: <b>9810367262</b></p>
</div>
    </Layout>
  )
}

export default PaymentDetails
