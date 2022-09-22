import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-content'>
          <h1 className='title'>QFJ-MACHINE</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#about-title">About</a></li>
                <li><Link to="/quotes">Quotes</Link></li>
                <li><Link to="/facts">Facts</Link></li>
                <li><Link to="/jokes">Jokes</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar