import React, {useState} from 'react'
import "./CalcTopbar.css"
import {AiOutlineMenuUnfold} from "react-icons/ai"
import {CgCommunity} from "react-icons/cg"
// import {FcDepartment} from "react-icons/fc"
import {GrUserWorker} from "react-icons/gr"
// import {GiFarmTractor} from "react-icons/gi"
// import {RiBankFill} from "react-icons/ri"
import {FaGraduationCap} from "react-icons/fa"
import { StateConsumer } from "../../context";
import { Link } from "react-router-dom";

function CalcSidebar() {
    const [sidebar, setSidebar] = useState(false)
    const name = sidebar? "open": "close"
    const showSidebar = ()=> setSidebar(!sidebar)
    return (
        <div className="calcSidebar">
            <div className="top" >
                <div className="top1">
                    <AiOutlineMenuUnfold className="menu" onClick={showSidebar}/>
                    <p>Select Category</p>
                </div>
                {/* <button><Link className="link" to="/">back</Link></button> */}
            </div>
            <ul className={name}>
                <StateConsumer>
                {value=>{
                    const {
                        displayForm1,
                        // displayForm2,
                        displayForm3,
                        displayForm4,
                        // displayForm5,
                        // displayForm6
                    } = value
                    return (
                        <>
                            <li onClick={()=>displayForm1()}><CgCommunity className="icon1" /><span >Futo Business comunity</span></li>
                            {/* <li onClick={()=>displayForm2()}><FcDepartment className="icon2" /><span>Departmental Energy Usage</span></li> */}
                            <li onClick={()=>displayForm3()}><GrUserWorker color="green" className="icon3" /><span>Futo Staffs</span></li>
                            <li onClick={()=>displayForm4()}><FaGraduationCap   className="icon4" /><span>Students</span></li>
                            {/* <li onClick={()=>displayForm5()}><GiFarmTractor className="icon5" /><span>Futo Farmers</span></li>
                            <li onClick={()=>displayForm6()}><RiBankFill className="icon6" /><span>Diamond Bankers</span></li> */}
                        </>
                    )
                }}
                </StateConsumer>
            </ul>
           
        </div>
    )
}

export default CalcSidebar
