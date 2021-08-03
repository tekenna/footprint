import React from 'react'
import "./home.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import About from "../../components/about/About"
import Offset from '../../components/offset/Offset'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Header />
            <About />
            <Offset />
            <Footer />
        </div>
    )
}

export default Home
