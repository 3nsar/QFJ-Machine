import Facts from "./Components/Facts";
import Jokes from "./Components/Jokes";
import Quotes from "./Components/Quotes";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import {BrowserRouter as Router, Routes,Route}from "react-router-dom"


import React from 'react'

const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/quotes" element={<Quotes />}/>
        <Route path="/jokes" element={<Jokes />}/>
        <Route path="/facts" element={<Facts />}/>
      </Routes>
    </Router>
    
  )
}

export default App