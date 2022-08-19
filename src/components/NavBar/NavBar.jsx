import React from 'react'
import { Link } from 'react-router-dom'
import bdtLogo from '../../images/icons/bdt-logo-official.svg'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <div className="container navContainer">
            <img src={bdtLogo} alt="Benefits Data Trust Main Logo" className='logo'/>
            <div className="linksWrap">
                <Link to='/' className='navLink'>Who We Are</Link>
                <Link to='/' className='navLink'>What We Do</Link>
                <Link to='/' className='navLink'>Get Help</Link>
                <Link to='/' className='navLink'>News & Insights</Link>
                <input type="search" className='navSearch' placeholder='Search'/>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
