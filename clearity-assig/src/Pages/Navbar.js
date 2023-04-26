import React from 'react'
import "../styles/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='shipment'>
                <img src='/images/Logo.png'/> </div>
                <div className='link'>
                  <Link to="/">Search</Link>
                  <Link to='/booking'>Booking</Link>
                  <Link to="/list">List</Link>
                  
                </div>
            
            <div className='login-learn'>
           <div className='learn'>
                    <img src='/dollar.png' alt='err'/>
                </div>
                <button className='login'>Track shipment</button>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar