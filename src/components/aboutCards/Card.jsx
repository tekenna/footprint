import React from 'react'
import "./card.css"

function Card({desc, src, small}) {
    return (
        <div className="card">
            <img src={src} alt="..." />
            <h3 className="card_h">{small}</h3>
            <p className="card_p">{desc}</p>
        </div>
    )
}

export default Card
