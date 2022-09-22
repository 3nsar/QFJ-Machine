import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const[showLinks, setShowLinks]= useState(true);
  return (
    <div className='nav-container'>
        <div className='nav-content'>
          <h1 className='title'>QFJ-MACHINE</h1>
          <div className='links' >
            <ul id={showLinks ? "hidden" : ""}>
                <li><Link to="/" onClick={()=> setShowLinks(!showLinks)}>Home</Link></li>
                <li><a href="/#about" onClick={()=> setShowLinks(!showLinks)}>About</a></li>
                <li><Link to="/quotes" onClick={()=> setShowLinks(!showLinks)}>Quotes</Link></li>
                <li><Link to="/facts" onClick={()=> setShowLinks(!showLinks)}>Facts</Link></li>
                <li><Link to="/jokes"  onClick={()=> setShowLinks(!showLinks)}>Jokes</Link></li>
            </ul>
            </div>
            <button className='burger' onClick={()=> setShowLinks(!showLinks)}>Open</button>
        </div>
    </div>
  )
}

export default Navbar