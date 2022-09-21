import React from 'react'



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
    </div>
  )
}

export default Home