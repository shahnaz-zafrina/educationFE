import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import home from '../../assets/Home.gif'

function Header() {
  return (
    <div className="education__header section__padding" id="home">
    <div className="education__header-content">
      <h1 className="gradient__text">Investing in Knowledge and Your Future</h1>
      <p>Over 5,200 Courses In Topics Like Business Analytics, Graphic Design, Python, And More. Breakthrough Pricing On 100% Online Degrees From Top Universities. 14Day Money Back Gurantee. ‎Explore Skills. Certificates. Language Learning. Management Skills. Engineering.</p>
    </div>

    <div className="education__header-image">
      <img src={home} alt='home'/>
    </div>
  </div>
  )
}

export default Header
