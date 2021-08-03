import React from 'react'
import "./acol1.css"
import {Link} from "react-router-dom"

function Cart() {
    return (
        <div className="acol1">
            <div className="acol1_sect">
                <span className="acol1_title">
                    <h3>ABOUT THE CALCULATOR</h3>
                </span>
                <img src="https://media.istockphoto.com/photos/hell-stay-until-he-has-it-all-figured-out-picture-id1186079153?k=6&m=1186079153&s=612x612&w=0&h=a6aOROqhwWEhc1T0Cerlk7peiJapfu0ab9dZLSM27pY=" alt="..." />
                <p className="sect_p">To calculate carbon footprint, a lot of factors are to be taken into consideration. These factors ranges between the existing realtionships between the observable qauntity and it's environment.This calculator is designed calculate carbon footprint of several qauntities with the Federal University of Technology Owerri as case study.</p>
            </div>
            <div className="acol1_sect">
                <span className="acol1_title">
                    <h3>CATEGORIES</h3>
                </span>
                <span className="acol1_title"></span>
                <ul className="acol1_list">
                    <li className="acol1_listItem">Futo Staffs</li>
                    <li className="acol1_listItem">Futo Students</li>
                    <li className="acol1_listItem">Futo business community</li>
                </ul>
            </div>
            <div className="acol1_sect3">
                <span className="acol1_title">
                    <h3>LET'S CALCULATE YOUR FOOTPRINT</h3>
                </span>
                <span className="acol1_title"></span>
                    <button className="acol1_btn"><Link className="link" to="/calculator">Calculator</Link></button>
            </div>
        </div>
    )
}

export default Cart
