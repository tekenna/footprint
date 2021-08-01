import React from 'react'
import "./Calcbody.css"
import CalcTopbar from '../../components/CalcTopbar/CalcTopbar'
import CalcForm1 from "../../components/CalcForm1/CalcForm1"
// import CalcForm2 from "../../components/CalcForm2/CalcForm2"
import CalcForm3 from "../../components/CalcForm3/CalcForm3"
import CalcForm4 from "../../components/CalcForm4/CalcForm4"
// import CalcForm5 from "../../components/CalcForm5/CalcForm5"
// import CalcForm6 from "../../components/CalcForm6/CalcForm6"

function Body() {
    return (
        <div className="calc">
            <CalcTopbar  />
            <div className="calcForms">
                <CalcForm1 />
                {/* <CalcForm2 /> */}
                <CalcForm3 />
                <CalcForm4 />
                {/* <CalcForm5 />
                <CalcForm6 /> */}
            </div>
        </div>
    )
}

export default Body
