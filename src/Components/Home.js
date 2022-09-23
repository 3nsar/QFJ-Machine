import React from 'react'
import About from './About'
import Footer from './Footer'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    
    <div className='home-container'>
        <div className='home-content'>
            <div className='home-text'>
                <h1>WELCOME TO THE QFJ-MACHINE</h1>
                <h2>READ SOMETHING NEW</h2>
                <button><Link to="/quotes">Get Started</Link></button>
            </div>
            <div className='home-img'>
                <img src="./images/home-pic.svg" alt="pic"/>
            </div>
        </div>
        <About/>

    </div>
  
    
  )
}

export default Home