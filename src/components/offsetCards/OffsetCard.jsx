import React from 'react'
import "./offsetCard.css"

function OffsetCard({src, content}) {
    return (
        <div className="o_card">
            <img src={src} alt="" />
            <p>{content}</p>
        </div>
    )
}

export default OffsetCard
