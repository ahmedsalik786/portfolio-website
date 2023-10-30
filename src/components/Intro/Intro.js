import React from "react";
import "./intro.css";
import bg from "../../assets/my-image2.png";
import btnImg from "../../assets/hireme.png"
import { Link } from "react-scroll";


function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="into-content">
          <span className="hello">Hello,</span>
          <span className="intro-text">
            I'm <span className="intro-name">Salik</span>
            <br />
            Web Developer
          </span>
          <p className="intro-para">
            {" "}
            I am a skilled web developer with experience in creating <br /> visually
            appealing and user friendly websites.
          </p>
          <Link> <button className="btn"> <img className="btn-img" src={btnImg} alt="" />Hire Me</button></Link>
        </div>
        <img src={bg} className="bg" alt="" />
      </section>
    </div>
  );
}

export default Intro;
