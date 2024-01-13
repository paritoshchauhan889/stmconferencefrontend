import React from 'react'
import './registration.css'
import Layout from '../../Components/Layout/Layout'

const Registration = () => {
  return (
    <Layout title={'Registration - page'}>
<div classname="container" style={{margin:'20px'}}>
  <table id="customers" style={{backgroundColor: '#e8c2cf'}}>
    <tbody><tr>
        <th style={{width: 80}}>Categories</th>
        <th style={{width: 80}}>Indian Delegate</th>
        <th style={{width: 80}}>SAARC / African Countries Delegates</th>
        <th style={{width: 80}}>Rest of the Countries Delegate</th>
      </tr>
      <tr>
        <td><b>Academic Faculty/ HOD’s</b></td>
        <td>4000 INR</td>
        <td>125 USD</td>
        <td>250 USD</td>
      </tr>
      <tr>
        <td><b>Industrial Delegates</b></td>
        <td>4500 INR</td>
        <td>125 USD</td>
        <td>300 USD</td>
      </tr>
      <tr>
        <td><b>Research Scholars</b></td>
        <td>3500 INR</td>
        <td>100 USD</td>
        <td>200 USD</td>
      </tr>
      <tr>
        <td><b>Students</b></td>
        <td>2500 INR</td>
        <td>75 USD</td>
        <td>150 USD</td>
      </tr>
      <tr>
        <td><b>Listener / Accompanying Member</b></td>
        <td>2500 INR</td>
        <td>75 USD</td>
        <td>150 USD</td>
      </tr>
    </tbody></table>
  <p style={{color: 'red', fontSize: 18}}>Group Discount = Registration of 3 Delegates together will get a 5% discount on the registration.</p>
  <p>*All the prices are exclusive of 18% GST.</p>
</div>

    </Layout>
  )
}

export default Registration
