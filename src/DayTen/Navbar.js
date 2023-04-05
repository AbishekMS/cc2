import React from "react";

import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div >
        <div>
        <Link to="/"style={{marginLeft:30}}> Home </Link>
        <Link to="/destination" style={{marginLeft:30}}>Destination</Link>
        <Link to="/about" style={{marginLeft:30}}> About </Link>
        <Link to="/contact" style={{marginLeft:30}}> Contact </Link>  
        <Link to="/registration" style={{marginLeft:30}}> Registration </Link>
        
      </div>
        </div>
    )
}