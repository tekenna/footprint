import React from 'react'
import { StateConsumer } from "../../context";
import styled from "styled-components"

function Result1({res,books, trans, diet, mP, sD, alc, lt, text, clt}) {
    let Res, Trans, Diet, MP
    if (res==="eziobodo"){
        Res = 1.2
    } else if (res==="ihiagwa"){
        Res = 2.2
    } else if (res==="obinze"){
        Res = 4.7
    } else if (res==="umuchima"){
        Res = 2
    } 


    if (trans==="car"){
        Trans = 0.325 * 2
    } else if (trans==="bus"){
        Trans = 0.071 * 2
    } else if (trans==="motor cycle"){
        Trans = 0.0855 * 2
    }else if (trans==="trekking"){
        Trans = 2
    }

    if (mP==="once daily"){
        MP = 1
    } else if (mP==="twice daily"){
        MP = 2
    } else if (mP==="thrice daily"){
        MP = 3
    }

    if (diet==="vegetarian"){
        Diet = 1.14 * MP
    } else if (diet==="omnivore"){
        Diet = 2.3 * MP
    } else if (diet==="Extreme meat eater"){
        Diet = 2.6 * MP
    }

    var total = Res + Trans + Diet + sD * 0.545 + alc * 0.378 + lt * 2.5 + clt *0.2756 *6.5 / 105 + books * 0.048 + text * 0.097

    return (
        <StateConsumer >
            {value=>{
                const {closeResult} = value
                return(
                    <Result>
                        <div className="res_container">
                            <div className="res_head">
                                <h1>Results</h1>
                                <button onClick={()=>closeResult()}>Close</button>
                            </div>
                            <div className="res_body">
                            <p>Your carbon footprint is {` ${total.toFixed(3)} CO`}<span className="tiny">2</span>e</p>
                            </div>
                        </div>
                    </Result>
                )
            }}
        </StateConsumer>
    )
}

export default Result1

const Result = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 128, 128, 0.46);

    .res_container{
        width: 500px;
        background: white;
        max-height: 500px;
        padding: 2rem;
        border-radius: 1rem;
    }

    .res_head{
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;

        h1{
            color: teal;
            font-size: 2em;
        }
        button{
            font-size: 1em;
            padding: 0.3rem 0.5rem;
            color: white;
            background: red;
        }
    }
    .res_body{
        p{
            font-size: 1.5em;
            .tiny{
                font-size: 0.5em;
            }
        }
    }
`
