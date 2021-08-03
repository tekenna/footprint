import React from 'react'
import "./about.css"
import Acol1 from "../acol1/Acol1"
import Acol2 from "../acol2/Acol2"

function About() {
    return (
        <div className="about" id="about">
            <div className="intro">
                <div></div>
                <div className="intro_body">
                    <span>
                        <h1 className="intro_top">What is Carbon footprint?</h1>
                        <img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/thinking-face.png" alt="..." />
                    </span>
                    <p className="def">Carbon footprint is basically the total amount of greenhouse gas emissions that a person, organization, event or product emits over a specific period of time. It comprises carbon dioxide, the most prevalent gas released by humans, as well as other gases such as methane, nitrous oxide, and fluorinated gases, all of which trap heat in the atmosphere and contribute to global warming. Transportation, housing, and food account for the majority of an individual's carbon footprint.</p>
                </div>
            </div>
            <div className="about_body">
                <div></div>
                <div className="about1">
                    <Acol1 />
                </div>
                <div className="about2">
                    <Acol2 />
                </div>
            </div>
        </div>
    )
}

export default About
