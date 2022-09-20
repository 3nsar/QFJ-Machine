import Facts from "./Facts";
import Jokes from "./Jokes";
import Quotes from "./Quotes";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Routes,Route, Switch}from "react-router-dom"

import React from 'react'

const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Quotes />}/>
        <Route path="/jokes" element={<Jokes />}/>
        <Route path="/facts" element={<Facts />}/>
      </Routes>
    </Router>
    
  )
}

export default App