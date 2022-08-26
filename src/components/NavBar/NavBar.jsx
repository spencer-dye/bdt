import React from 'react'
import { Link } from 'react-router-dom'
import bdtLogo from '../../images/icons/bdt-logo-official.svg'
import './NavBar.css'

const primaryNav = document.querySelector('.primaryNavigation')
const navToggle = document.querySelector('.mobileNavToggle')

const handleClick = () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
}

const NavBar = () => {
  return (
    <nav>
        <div className="container navContainer">
            <img src={bdtLogo} alt="Benefits Data Trust Main Logo" className='logo'/>
            <button className='mobileNavToggle' aria-controls='primary-navigation' aria-expanded='false' onClick={handleClick}>
                <span className='sr-only'>Menu</span>
            </button>
            <ul className="primaryNavigation" id='primary-navigation' data-visible='false'>
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
