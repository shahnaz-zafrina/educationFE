import React from 'react'
import logo from '../../assets/Udemy_logo.svg.png'
import './footer.css'

function Footer() {
  return (
    <div className="education__footer section__padding">
    <div className="education__footer-heading">
      <h1>Do you want to step in to the future before others</h1>
    </div>

    <div className="education__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="education__footer-links">
      <div className="education__footer-links_logo">
        <img src={logo} alt="logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="education__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="education__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="education__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="education__footer-copyright">
      <p>@2021 Udemy. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer
