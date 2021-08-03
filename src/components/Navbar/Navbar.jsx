import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navCol1">
                Carbon footprint <span>caluculator</span>
            </div>
            <div className="navCol2">
                <button className="navLink">Home</button>
                <button className="navLink">About</button>
                <button className="navLink"><Link className="link navlink" to="/calculator">Calculator</Link></button>
            </div>
        </div>
    )
}

export default Navbar
