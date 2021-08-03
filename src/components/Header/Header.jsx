import React from 'react'
import "./header.css"

function Header() {
    return (
        <div className="header" id="home">
            <div className="col1"></div>
            <div className="col2">
                <div className="htext">
                    <span>the</span>
                    <span className="hmain"> carbon footprint</span>
                    <span className="hsub">calculator</span>
                </div>
                <div className="hbase">
                    <p>lets help you know your <span>carbon footprint</span> contribution today</p>
                </div>
            </div>
        </div>
    )
}

export default Header
