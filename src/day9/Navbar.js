import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div style={{textAlign:'center'}}>
        <Link to = "/" style={{marginLeft:30}}>Home</Link>
        <Link to = "/singers" style={{marginLeft:30}}>Singers</Link>
        <Link to = "albums" style={{marginLeft:30}}>Albums</Link>
    </div>
  )
}

export default Navbar;   