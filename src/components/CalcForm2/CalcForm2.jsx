import React,{useState} from 'react'
import "./CalcForm2.css"
import { StateConsumer } from "../../context";
import axios from "axios"
import Result from "../Results/Result2"

function CalcForm2() {
    const [formDetails, setFormDetails] = useState({
        school: "",
        department: "",
        staffs: 0,
        offices: 0,
        lectureHalls: 0,
        photocopiers: 0,
        printers: 0,
        machines: 0,
    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("/deu", {
                school: formDetails.school,
                department: formDetails.department,
                staffs: formDetails.staffs,
                offices: formDetails.offices,
                lectureHalls: formDetails.lectureHalls,
                photocopiers: formDetails.photocopiers,
                printers: formDetails.printers,
                machines: formDetails.machines,
            })
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <StateConsumer>
            {value=>{
                const {state} = value.form2
                const {result, openResult} = value
                if (state === true){
                    return(
                        <>
                        <div className="form_heading">
                            <h1 className="h1">DEPARTMENTAL ENERGY USAGE</h1>
                            <small className="small"><i>(NOTE: all the data provided are strictly for research purposes and all of the provided information will remain confidential)</i></small>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form_user">
                                <label className="user_label">DEPARTMENT:</label>
                                <input className="user_input"  type="text" required onChange={e=>setFormDetails({...formDetails, department: e.target.value})} />
                                <label className="user_label">SCHOOL:</label>
                                <input className="user_input" type="text" required onChange={e=>setFormDetails({...formDetails, school: e.target.value})} />
                            </div>
                            <small className="small"><i>(please, kindly answer the following questions)</i></small>
                            <ol className="form_questions">
                                <li className="form_q">
                                    <label>What is the total number of staffs in the department?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, staffs: e.target.value})} />
                                </li>
                                <li className="form_q">
                                    <label>What is the total number of offices in the department?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, offices: e.target.value})}/>
                                </li>
                                <li className="form_q">
                                    <label>What is the total number of lecture halls in the department?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, lectureHalls: e.target.value})} />
                                </li>
                                <li className="form_q">
                                    <label>How many photocopying machines are there in the department?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, photocopiers: e.target.value})} />
                                </li>
                                <li className="form_q">
                                    <label>How many printing machines are there in the department?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, printers: e.target.value})}/>
                                </li>
                                <li className="form_q">
                                    <label>If the department uses other kinds of machine, how many are there?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, machines: e.target.value})} />
                                </li>
                            </ol>
                            <button>Submit</button>
                        </form>
                        <button onClick={()=>openResult()}>Show result</button>
                        {result === true && formDetails.school !== ""? 
                        <Result 
                                scl= {formDetails.school}
                                dept={ formDetails.department}
                                stf= {formDetails.staffs}
                                off= {formDetails.offices}
                                lect= {formDetails.lectureHalls}
                                photo= {formDetails.photocopiers}
                                print= {formDetails.printers}
                                mch= {formDetails.machines}
                            />: null}
                        
                        </>
                    )
                } else{
                    return null
                }
            }}
        </StateConsumer>
    )
}

export default CalcForm2