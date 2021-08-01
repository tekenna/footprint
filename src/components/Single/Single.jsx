import React from 'react'
import "./Single.css"

function Single({desc, src, small}) {
    return (
        <div className="single">
            <div className="singleImg">
                <img src={src} alt="..." />
            </div>
            <small>{small}</small>
            <p>{desc}</p>
        </div>
    )
}

export default Single
