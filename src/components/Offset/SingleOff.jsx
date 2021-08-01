import React from 'react'
import "./singleOff.css"


function SingleOff({src, content}) {
    return (
        <div className="singleOff">
            <img src={src} alt="" />
            <p>{content}</p>
        </div>
    )
}

export default SingleOff
