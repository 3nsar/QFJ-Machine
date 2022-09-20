import React from 'react'
import { Link } from "react-router-dom";

// ADD COMPONENTS FOLDER!!!!!!
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='nav-content'>
            <ul>
                <li><Link to="/">Quotes</Link></li>
                <li><Link to="/facts">Facts</Link></li>
                <li><Link to="/jokes">Jokes</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar