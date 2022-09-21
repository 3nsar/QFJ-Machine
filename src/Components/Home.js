import React from 'react'
import About from './About'



const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-content'>
            <div className='home-text'>
                <h1>WELCOME TO THE QFJ-MACHINE</h1>
                <h2>READ SOMETHING NEW</h2>
                <button>Get Started</button>
            </div>
            <div className='home-img'>
                <img src="./images/home-pic.svg" alt="pic"/>
            </div>
        </div>
        <div className='about-content'>
          <div className='about-title'>
            <h1>What's QFJ?</h1>
          </div>
          <div className='about-pg'>
          <p>The QFJ-Machine is a webapp and generates quotes, facts and also jokes from three differnet APIS.
              QFJ stands for "Quotes", "Facts" and "Jokes".
              To start the program you just need to click one of the buttons.</p>
              </div>
        </div>
    </div>
  )
}

export default Home