import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Store from './redux/Store'
// componenets
import State from './compnents/state'
import Home from './compnents/home'
import Navbar from './compnents/navbar'
import Settings from './compnents/settings';
import Lebel from './compnents/lebel';

function App() {


  return (
   
      <>
      
      {/* <Navbar/>
      <Home/>
      <State/>
      <Settings/> */}
          <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<State />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/lebel" element={<Lebel />} />
      </Routes>
    </Router>
    
      </>
   
  )
}

export default App
