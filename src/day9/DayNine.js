import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Singers from './Singer';
import Albums from './Album';
import Navbar from './Navbar';
function Day9() {
  return (
    <div>
    <h1>DAY 9</h1>
    <Navbar/>
        <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/singers' element = {<Singers />} />
            <Route path = '/albums' element = {<Albums />} />
        </Routes>
    </div>
  )
}

export default Day9;