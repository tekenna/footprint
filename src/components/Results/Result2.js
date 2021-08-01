import React from 'react'
import { StateConsumer } from "../../context";
import styled from "styled-components"

function Result1({scl, dept, stf, off, lect, photo, print, mch}) {


    // var total = Res + Trans + Diet + sD * 0.545 + alc * 0.378 + lt * 2.5
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
                                <p>Your carbon footprint is </p>
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
`
