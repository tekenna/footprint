import React, {useState} from 'react'
import "./CalcForm3.css"
import { StateConsumer } from "../../context";
import axios from "axios"
import Result from "../Results/Result3"

function CalcForm1() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        department: "",
        school: "",
        residence: "",
        transportation: "",
        diet: "",
        mealPlan: "",
        softDrinks: 0,
        alcohol: 0,
        paper: 0,
        pc: "",
        powerRating: "",
        genRunTime: 0,
        liters: 0,
        waste: 0,
    })
    const [drop1, setDrop1] = useState(false)
    const [drop2, setDrop2] = useState(false)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("/staffs", {
                name: formDetails.name,
                residence: formDetails.residence,
                businessName: formDetails.businessName,
                businessLocation: formDetails.businessLocation,
                transportation: formDetails.transportation,
                diet: formDetails.diet,
                mealPlan: formDetails.mealPlan,
                softDrinks: formDetails.softDrinks,
                alcohol: formDetails.alcohol,
                power: formDetails.power,
                powerRating: formDetails.powerRating,
                liters: formDetails.liters,
                waste: formDetails.waste,
            })
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <StateConsumer>
            {value=>{
                const {state} = value.form3
                const {result, openResult} = value
                if (state === true){
                    return(
                        <>
                        <div className="form_heading">
                            <h1 className="h1">FUTO STAFFS</h1>
                            <small className="small"><i>(NOTE: all the data provided are strictly for research purposes and all of the provided information will remain confidential)</i></small>
                        </div>
                        <form className="form" onSubmit={handleSubmit} >
                            <div className="form_user">
                                <label className="user_label">Name:</label>
                                <input className="user_input"  type="text" onChange={e=>setFormDetails({...formDetails, name: e.target.value})} />
                                <label className="user_label">Department:</label>
                                <input className="user_input" type="text" onChange={e=>setFormDetails({...formDetails, department: e.target.value})} required />
                                <label className="user_label">School:</label>
                                <input className="user_input" type="text" onChange={e=>setFormDetails({...formDetails, school: e.target.value})} required />
                                <label className="user_label">Area of Residence:</label>

                                <div className="answer1">
                                    <div className="select">
                                            <div className="selected">
                                                <input id="otown2"  type="radio" name="residence" onClick={()=>{
                                                    setDrop1(true)
                                                    setDrop2(false)
                                                }} />
                                                <label htmlFor="otown2">Owerri North</label>
                                            </div>
                                        {
                                            drop1?
                                            <>
                                            <small className="note1">please select the closest community to your residence</small>
                                             <select className="newSelect"  name="owerriWest" id="owerriWest" onChange={e=>setFormDetails({...formDetails, residence: e.target.value})} required >
                                                <option value="umugwuma">umugwuma</option>
                                                <option value="avu">avu</option>
                                                <option value="nekede">nekede</option>
                                                <option value="ihiagwa">ihiagwa</option>
                                                <option value="obinze">obinze</option>
                                                <option value="okuku">okuku</option>
                                                <option value="okolochi">okolochi</option>
                                                <option value="eziobodo">eziobodo</option>
                                                <option value="oforola">oforola</option>
                                                <option value="umuchima">umuchima</option>
                                                <option value="irete">irete</option>
                                                <option value="orogwe">orogwe</option>
                                                <option value="ndegwu">ndegwu</option>
                                                <option value="ohii">ohii</option>
                                            </select>
                                            </>: null
                                        }
                                        </div>
                                        <div className="select">
                                            <div className="selected">
                                                <input id="otown2"  type="radio" name="residence" onClick={()=>{
                                                    setDrop1(false)
                                                    setDrop2(true)
                                                }} />
                                                <label htmlFor="otown2">Owerri North</label>
                                            </div>
                                        {
                                            drop2? 
                                            <>
                                            <small className="note1">please select the closest community to your residence</small><select className="newSelect" name="owerriWest" id="owerriWest" onChange={e=>setFormDetails({...formDetails, residence: e.target.value})} required >
                                                <option value="egbu">egbu</option>
                                                <option value="naze">naze</option>
                                                <option value="orji">orji</option>
                                                <option value="ulakwo">ulakwo</option>
                                                <option value="emekuku">emekuku</option>
                                                <option value="agbala">agbala</option>
                                                <option value="emii">emii</option>
                                                <option value="awaka">awaka</option>
                                                <option value="azaraubo">azaraubo</option>
                                                <option value="ezimba">ezimba</option>
                                                <option value="ihite">ihite</option>
                                                <option value="mbaoma">mbaoma</option>
                                            </select>
                                            </>: null
                                        }
                                        </div>
                                        
                                    </div>


                            </div>
                            <small className="small"><i>(please, kindly answer the following questions)</i></small>
                            <ol className="form_questions">
                                <li className="form_q">
                                    <label>What is your daily  means of transportation to your work place?</label>
                                    <select name="transportation" id="transportation"onChange={e=>setFormDetails({...formDetails, transportation: e.target.value
                                        })} required>
                                        <option value=""></option>
                                        <option value="motor cycle">Motor Cycle</option>
                                        <option value="bus">Bus</option>
                                        <option value="car">Car</option>
                                    </select>
                                </li>
                                <li className="form_q">
                                    <label>How best will you describe your diet? </label>
                                    <div className="answer">
                                    <select name="diet" id="diet"onChange={e=>setFormDetails({...formDetails, diet: e.target.value
                                        })} required>
                                            <option></option>
                                            <option value="vegetarian">Vegetarian</option>
                                            <option value="omnivore">Omnivore</option>
                                            <option value="Extreme meat eater">Extreme meat eater</option>
                                        </select>
                                    </div>
                                </li>
                                <li className="form_q">
                                    <label> what is your daily meal plan while in school?</label>
                                    <select name="mealPlan" id="mealPlan" onChange={e=>setFormDetails({...formDetails, mealPlan: e.target.value
                                        })} required>
                                        <option ></option>
                                        <option value="once daily"
                                        >Once daily</option>
                                        <option value="twice daily">Twice daily</option>
                                        <option value="thrice daily">Thrice daily</option>
                                    </select>
                                </li>
                                <li className="form_q">
                                    <label>On a weekly basis, how many cans of soft drinks do you take while at your work place?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, softDrinks: e.target.value
                                            })} />
                                </li>
                                <li className="form_q">
                                    <label>On a weekly basis, how many bottles of alcohol do you take while at your work place?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, alcohol: e.target.value
                                            })} />
                                </li>
                                <li className="form_q">
                                    <label> How many A4 papers do you use daily?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, paper: e.target.value
                                            })} /> 
                                </li>
                                <li className="form_q">
                                    <label>Do you have an office PC/Laptop?</label>
                                    <input type="text" onChange={e=>setFormDetails({...formDetails, pc: e.target.value
                                            })} />
                                </li>
                                <li className="form_q">
                                    <label>What is the power rating of your departmental generator?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, powerRating: e.target.value
                                            })} />
                                </li>
                                <li className="form_q">
                                    <label>How long would you estimate the daily runtime of your departmental generator?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, genRunTime: e.target.value
                                            })} />
                                </li>
                                <li className="form_q">
                                    <label>Can you estimate how many liters it consumes daily?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, liters: e.target.value
                                            })} />
                                </li>
                                <li className="form_q">
                                    <label>How many times is the general waste bin of your department disposed weekly?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, waste: e.target.value
                                            })} />
                                </li>
                                
                            </ol>
                            <button className="btn">Submit</button>
                        </form>
                        <button className="btn" onClick={()=>openResult()}>Show result</button>
                        {result === true && formDetails.residence !== ""? <Result res={formDetails.residence}
                                lt = {formDetails.liters}
                                trans = {formDetails.transportation}
                                diet = {formDetails.diet}
                                mP = {formDetails.mealPlan}
                                sD = {formDetails.softDrinks}
                                alc = {formDetails.alcohol}
                                paper = {formDetails.paper}
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

export default CalcForm1
