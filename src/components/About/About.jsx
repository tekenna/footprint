import React from 'react'
import "./About.css"
import Single from "../Single/Single"

function About() {
    return (
        <div className="about" id="about">
            <h2 >Did you know</h2>
            <div className="about_body">
                <div className="about_cards">
                    <Single src="https://media.product.which.co.uk/prod/images/803_402/gm-255dafc9-5a4c-4f8c-a98f-af8a32840da8-car-emissions-explained-2.jpg" small="CO2 EMISSIONS FROM YOUR VEHICLE" desc="Your vehicle is another significant part of your carbon footprint, accounting for approximately 30 percent of the average American's carbon footprint, at 5.16 tons per year." />
                    <Single src="https://www.thebraggingmommy.com/wp-content/uploads/2021/04/image-16.png" small="CO2 EMISSIONS FROM YOUR HOME" desc="The third largest factor in your carbon footprint is utilities. The amount of carbon dioxide emissions depends on the type of utility and on the number of people in your household. To simplify the estimates, we use your average monthly utility bills."/>
                    <Single src="http://static1.squarespace.com/static/5bc6009ac46f6d5be4e0bbdb/5bd1614a7817f73712a377e5/5e4ec1115ceeae299ebca54f/1582221816274/shutterstock_526855693.jpg?format=1500w" small="YOUR FOODPRINT" desc="What you eat is an important part of your carbon footprint - your calorie intake and food choices both affect your foodprint. A Vegetarian’s foodprint is about two thirds of the average and almost half that of a meat lover. For a Vegan it is even lower. But perhaps most interestingly, eating chicken instead of beef cuts a quarter of emissions in one simple step." />
                </div>
            </div>
        </div>
    )
}

export default About
