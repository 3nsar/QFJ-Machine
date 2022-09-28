import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const[showLinks, setShowLinks]= useState(false);
  return (
    <div className='nav-container'>
        <div className='nav-content'>
          <h1 className='title'>QFJ-MACHINE</h1>
          
            <ul id={showLinks ? "hidden" : ""}>
                <li><Link to="/" onClick={()=> setShowLinks(!showLinks)}>Home</Link></li>
                <li><Link to="about" onClick={()=> setShowLinks(!showLinks)}>About</Link></li>
                <li><Link to="/quotes" onClick={()=> setShowLinks(!showLinks)}>Quotes</Link></li>
                <li><Link to="/facts" onClick={()=>  setShowLinks(!showLinks)}>Facts</Link></li>
                <li><Link to="/jokes"  onClick={()=> setShowLinks(!showLinks)}>Jokes</Link></li>
            </ul>
          <div className='burger' onClick={()=> setShowLinks(!showLinks)}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div> 
        </div>
    </div>
  )
}

export default Navbar