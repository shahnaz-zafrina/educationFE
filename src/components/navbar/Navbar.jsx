import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/Udemy_logo.svg.png'

// BEM -> Block Element Modifier

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#weducation'>Service</a></p>
  <p><a href='#possibility'>Courses</a></p>
  <p><a href='#features'>Blog</a></p>
  <p><a href='#blog'>Contact</a></p>
  </>
)

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='education__navbar'>
        <div className='education__navbar-links'>
          <div className='education__navbar-links_logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='education__navbar-links_container'>
            <Menu />
          </div>
        </div>
        <div className='education__navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
        <div className='education__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#c2c2c2" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#c2c2c2" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="education__navbar-menu_container scale-up-center">
            <div className="education__navbar-menu_container-links">
              <Menu />
              <div className='education__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
        </div>
    </div>
  )
}

export default Navbar



