import React from 'react'
import "./Cart.css"
// import {AiFillFacebook, AiFillTwitterSquare} from "react-icons/ai"
// import {FaPinterestSquare, FaInstagramSquare} from "react-icons/fa"


function Cart() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT THE CALCULATOR</span>
                <img src="https://media.istockphoto.com/photos/hell-stay-until-he-has-it-all-figured-out-picture-id1186079153?k=6&m=1186079153&s=612x612&w=0&h=a6aOROqhwWEhc1T0Cerlk7peiJapfu0ab9dZLSM27pY=" alt="..." />
                <p>To calculate carbon footprint, a lot of factors are to be taken into consideration. These factors ranges between the existing realtionships between the observable qauntity and it's environment.This calculator is designed calculate carbon footprint of several qauntities with the Federal University of Technology Owerri as case study.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Futo business community</li>
                    <li className="sidebarListItem">Departmental Energy usage</li>
                    <li className="sidebarListItem">Futo Staffs</li>
                    <li className="sidebarListItem">Futo Students</li>
                    <li className="sidebarListItem">Futo Poultry</li>
                    <li className="sidebarListItem">Diamon Bank</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">LET'S CALCULATE YOUR FOOTPRINT</span>
                    <div className="sidebarBtn">
                        <button>Calculator</button>
                    </div>
            </div>
        </div>
    )
}

export default Cart
