import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
// import Header from "../../components/Header/Header"
import About from "../../components/About/About"
import Cart from "../../components/Cart/Cart"
import Offset from "../../components/Offset/Offset"
import Footer from "../../components/Footer/Footer"


function Home() {
    return (
        <div className="home">
            <Navbar />
            {/* <Header id="home" /> */}
            <div className="intro">
                <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thinking_Face_Emoji_large.png?v=1571606036" alt="..." />
                <div>
                    <h1 className="intro_top">What is Carbon footprint?</h1>
                    <p className="def">Carbon footprint is basically the total amount of greenhouse gas emissions that a person, organization, event or product emits over a specific period of time.</p>
                </div>
            </div>
            <div className="home_sides">
                <div className="side1"><Cart /></div>
                <div className="side2">
                    <About />
                    <Offset />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
