import React from 'react';
import '../styles/Navbar.css'
import NasaLogo from '../nasa-logo.png'
import {withRouter, Link} from 'react-router-dom'

const Navbar = () => {
    return(
    <div className="navbar">
    <nav>
        <div className="nav-wrapper light-blue darken-3" id="myNav">
        <Link to="/"><a href="#" className="brand-logo left"><img src={NasaLogo} alt="Nasa Logo" id="logo"/></a></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </nav>
  </div>
    )
}

export default withRouter(Navbar);