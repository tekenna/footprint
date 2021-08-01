import React, {useState} from 'react'
import "./CalcForm5.css"
import { StateConsumer } from "../../context";
import axios from "axios"

function CalcForm1() {
    const [formDetails, setFormDetails] = useState({
        name: "",
        residence: "",
        location:"",
        transportation: "",
        diet: "",
        mealPlan: "",
        softDrinks: 0,
        alcohol: 0,
        livestocks: 0,
        feed: 0,
        dungs: 0,
        power: "",
        powerRating: 0,
        liters: 0,
        waste: 0,
    })
    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post("/farmers", {
                name: formDetails.name,
                residence: formDetails.residence,
                location: formDetails.location,
                transportation: formDetails.transportation,
                diet: formDetails.diet,
                mealPlan: formDetails.mealPlan,
                softDrinks: formDetails.softDrinks,
                alcohol: formDetails.alcohol,
                livestocks: formDetails.livestocks,
                feed: formDetails.feed,
                dungs: formDetails.dungs,
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
                const {state} = value.form5
                if (state === true){
                    return(
                        <>
                        <div className="form_heading">
                            <h1 className="h1">FUTO FARMERS</h1>
                            <small className="small"><i>(NOTE: all the data provided are strictly for research purposes and all of the provided information will remain confidential)</i></small>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form_user">
                                <label className="user_label">Name:</label>
                                <input className="user_input"  type="text" onChange={e=>setFormDetails({...formDetails, name: e.target.value})} required/>
                                <label className="user_label">Area of residence:</label>
                                <input className="user_input" type="text" onChange={e=>setFormDetails({...formDetails, residence: e.target.value})} required/>
                                <label className="user_label">Farm Location:</label>
                                <input className="user_input" type="text" onChange={e=>setFormDetails({...formDetails, location: e.target.value})}/>
                            </div>
                            <small className="small"><i>(please, kindly answer the following questions)</i></small>
                            <ol className="form_questions">
                                <li className="form_q">
                                    <label>What is your daily  means of transportation to your work place?</label>
                                    <select name="transportation" id="transportation" onChange={e=>setFormDetails({...formDetails, transportation: e.target.value
                                        })} required>
                                        <option value=""></option>
                                        <option value="motor cycle">Motor Cycle</option>
                                        <option value="bus">Bus</option>
                                        <option value="car">Car</option>
                                    </select>
                                </li>
                                <li className="form_q">
                                    <label>How best will you describe your diet? </label>
                                    <select name="diet" id="diet" onChange={e=>setFormDetails({...formDetails, diet: e.target.value})} required>
                                        <option value=""></option>
                                        <option value="vegetarian">Vegetarian</option>
                                        <option value="omnivore">Omnivore</option>
                                        <option value="Extreme meat eater">Extreme meat eater</option>
                                    </select>
                                </li>
                                <li className="form_q">
                                    <label>What is your daily meal plan while at the farm?</label>
                                    <div className="answer">
                                        <input id="mealCheck1" type="radio" name="mealPlan" value="once daily" onClick={e=>setFormDetails({...formDetails, mealPlan: e.target.value
                                            })} />
                                        <label htmlFor="mealCheck1">Once Daily</label>
                                        <input id="mealCheck2" type="radio" name="mealPlan" value="twice daily" onClick={e=>setFormDetails({...formDetails, mealPlan: e.target.value
                                            })} />
                                        <label htmlFor="mealCheck2">Twice Daily</label>
                                        <input id="mealCheck3" type="radio" name="mealPlan" value="thrice daily" onClick={e=>setFormDetails({...formDetails, mealPlan: e.target.value
                                            })} />
                                        <label htmlFor="mealCheck3">Thrice Daily</label>
                                    </div>
                                </li>
                                <li className="form_q">
                                    <label>On a weekly basis, how many cans of soft drinks do you take while at the farm?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, softDrinks: e.target.value
                                    })} />
                                </li>
                                <li className="form_q">
                                    <label>On a weekly basis, how many bottles of alcohol do you take while at the farm?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, alcohol: e.target.value
                                    })} />
                                </li>
                                <li className="form_q">
                                    <label>Can you estimate the total number of livestock present in this farm?</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, livestocks: e.target.value
                                    })} />
                                </li>
                                <li className="form_q">
                                    <label>What quantity of feed does the livestock consume daily??</label>
                                    <input type="number" required onChange={e=>setFormDetails({...formDetails, feed: e.target.value
                                    })} />
                                </li>
                                <li className="form_q">
                                    <label>What is the amount of livestock dung that is utilized or disposed weekly?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, dungs: e.target.value
                                    })} required />
                                </li>
                                <li className="form_q">
                                    <label>What is the source of power supply to the farm?</label>
                                    <div className="answer">
                                        <input id="powerCheck1" type="radio" name="power" value="generator" onClick={e=>setFormDetails({...formDetails, power: e.target.value
                                            })} />
                                        <label htmlFor="powerCheck1">Generator</label>
                                        <input id="powerCheck2" type="radio" name="power" value="wind energy" onClick={e=>setFormDetails({...formDetails, power: e.target.value
                                            })} />
                                        <label htmlFor="powerCheck2">Wind Energy</label>
                                        <input id="powerCheck3" type="radio" name="power" value="solar energy" onClick={e=>setFormDetails({...formDetails, power: e.target.value
                                            })} />
                                        <label htmlFor="powerCheck3">Solar Energy</label>
                                    </div>
                                </li>
                                <li className="form_q">
                                    <label>Specify the model and capacity / power rating of your power supply device</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, powerRating: e.target.value
                                            })}/><small>kVA</small>
                                </li>
                                <li className="form_q">
                                    <label>How many liters of petrol / diesel do you use daily?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, liters: e.target.value
                                    })}/><small>kVA</small>
                                </li>
                                <li className="form_q">
                                    <label>How many times is your general waste disposed  weekly?</label>
                                    <input type="number" onChange={e=>setFormDetails({...formDetails, waste: e.target.value
                                    })}/>
                                </li>
                            </ol>
                            <button>Submit</button>
                        </form>
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
