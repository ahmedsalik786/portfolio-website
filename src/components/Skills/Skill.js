import React from 'react'
import "./skill.css"
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

function Skill() {
  return (
    <div>
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skilldesc">I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites. I have a string understanding of design and a keen eye for detail. I am proficient in HTML,CSS and javascript as well as design software such as a Adobe PhotoShop and Illustrator.</span>
            <div className="skillbars">
                <div className="skillBar">
                    <img src={UIDesign} alt="" className="skill-bar-img" />
                    <div className="skill-bar-text">
                        <h2>UI/UX design</h2>
                        <p>this is demo text u can write ur own text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="" className="skill-bar-img" />
                    <div className="skill-bar-text">
                        <h2>Website Design</h2>
                        <p>this is demo text u can write ur own text</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="" className="skill-bar-img" />
                    <div className="skill-bar-text">
                        <h2>App Design</h2>
                        <p>this is demo text u can write ur own text</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skill