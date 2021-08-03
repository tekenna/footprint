import React from 'react'
import "./acol2.css"
import Card from "../aboutCards/Card"

function Acol2() {
    return (
        <div className="acol2">
            <h2>Did you know?</h2>
            <div className="cards">
                <div className="single_card">
                    <Card
                        src="http://static1.squarespace.com/static/5bc6009ac46f6d5be4e0bbdb/5bd1614a7817f73712a377e5/5e4ec1115ceeae299ebca54f/1582221816274/shutterstock_526855693.jpg?format=1500w"
                        small="YOUR FOODPRINT"
                        desc="What you eat is an important part of your carbon footprint - your calorie intake and food choices both affect your foodprint. A Vegetarian’s foodprint is about two thirds of the average and almost half that of a meat lover. For a Vegan it is even lower. But perhaps most interestingly, eating chicken instead of beef cuts a quarter of emissions in one simple step." 
                    />
                </div>
                <div className="single_card">
                    <Card 
                        src="https://media.product.which.co.uk/prod/images/803_402/gm-255dafc9-5a4c-4f8c-a98f-af8a32840da8-car-emissions-explained-2.jpg"
                        small="CO2 EMISSIONS FROM YOUR VEHICLE"
                        desc="Your vehicle is another significant part of your carbon footprint, accounting for approximately 30 percent of an average individual carbon footprint in the Federal University of Technology Owerri (FUTO), at 5.16 tons per year." 
                    />
                </div>
                <div className="single_card">
                    <Card
                        src="https://www.thebraggingmommy.com/wp-content/uploads/2021/04/image-16.png"
                        small="CO2 EMISSIONS FROM YOUR HOME"
                        desc="The third largest factor in your carbon footprint is utilities. The amount of carbon dioxide emissions depends on the type of utility and on the number of people in your household. To simplify the estimates, we use your average monthly utility bills." 
                    />
                </div>
            </div>
        </div>
    )
}

export default Acol2
