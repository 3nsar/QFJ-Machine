import Facts from "./Components/Facts";
import Jokes from "./Components/Jokes";
import Quotes from "./Components/Quotes";
import Navbar from "./Components/Navbar";
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