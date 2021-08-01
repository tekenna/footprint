import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navCol1">
                Carbon footprint <span>caluculator</span>
            </div>
            <div className="navCol2">
                <ul className="navUl">
                    <li className="navLink"><a href="#home">Home</a></li>
                    <li className="navLink"><a href="#about">About</a></li>
                    <li className="navLink"><Link className="link" to="/calculator">Calculator</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
