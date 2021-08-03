import React from 'react'
import "./offset.css"
import OffsetCard from '../offsetCards/OffsetCard'

function Offset() {
    return (
        <div className="offset">
            <div className="offset_head">
                <h1>five ways to help reduce your carbon foot print</h1>
            </div>
            <div className="offset_body">
                <p>Climate change seems to be growing at a high rate, however not unsolvable. There are loads of noteworthy advances you can take to save the planet from a consistently evolving environment. Here are five different ways to help diminish your carbon footprint.</p>
                <div className="offset_cards">
                    <OffsetCard
                        src={"https://media.istockphoto.com/vectors/different-colored-recycle-bins-different-waste-suitable-for-recycling-vector-id1206487598?k=6&m=1206487598&s=612x612&w=0&h=swJBOmLBDiR5EWj8sWpV1VMVCpDFNc-f8ySRIIpez38="}
                        content={"The 5 R’s: refuse, reduce, reuse, rot, recycle"} 
                    />
                    <OffsetCard
                        src={"https://images.unsplash.com/photo-1475666675596-cca2035b3d79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}
                        content={"Bike more and drive less"} 
                    />
                    <OffsetCard
                        src={"https://www.wwdmag.com/sites/wwd/files/styles/featured_block/public/water%20efficiency.jpg?itok=EkcuWpIe"}
                        content={"Conserve water and protect our waterways"} 
                    />
                    <OffsetCard
                        src={"https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2glMjBmcnVpdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}
                        content={"Eat seasonally, locally, and more plants"} 
                    />
                    <OffsetCard
                        src={"https://www.power-technology.com/wp-content/uploads/sites/7/2020/11/wind-power.jpg"}
                        content={"Switch to sustainable, clean energy"} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Offset
