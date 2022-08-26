import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bdtLogo from '../../images/icons/bdt-logo-official.svg'
import './NavBar.css'

const NavBar = () => {

const primaryNavRef = useRef(null)
const navToggleRef = useRef(null)

const handleClick = () => {
    const visibility = primaryNavRef.current.getAttribute('data-visible')
    if (visibility === 'false') {
        primaryNavRef.current.setAttribute('data-visible', true)
        navToggleRef.current.setAttribute('aria-expanded', true)
    } else {
        primaryNavRef.current.setAttribute('data-visible', false)
        navToggleRef.current.setAttribute('aria-expanded', false)
    }
}

  return (
    <nav>
        <div className="container navContainer">
            <img src={bdtLogo} alt="Benefits Data Trust Main Logo" className='logo'/>
            <button className='mobileNavToggle' aria-controls='primary-navigation' aria-expanded='false' onClick={handleClick} ref={navToggleRef}>
                <span className='sr-only'>Menu</span>
            </button>
            <ul className="primaryNavigation" id='primary-navigation' data-visible='false' ref={primaryNavRef}>
                <li><Link to='/' className='navLink'>Who We Are</Link></li>
                <li><Link to='/' className='navLink'>What We Do</Link></li>
                <li><Link to='/' className='navLink'>Get Help</Link></li>
                <li><Link to='/' className='navLink'>News & Insights</Link></li>
                <input type="search" className='navSearch' placeholder='Search'/>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
