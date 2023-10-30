import React from "react";
import "./works.css";
import crypto from "../../assets/projects/crypto.png";
import finance from "../../assets/projects/Screenshot (129).png";
import portfolio from "../../assets/projects/portfilio.png";
import redux from "../../assets/projects/redux.png";
import imageBazzer from "../../assets/projects/imageBazzar.png";
import signup from "../../assets/projects/signup.png";
import { Link } from "react-scroll";
import { BrowserRouter } from "react-router-dom";

function Works() {
  return (
    <section id="works">
      <h2 className="works-title">My Portfolio</h2>
      <span className="works-desc">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skill and experience to help businesses achieve their goals and create a strong online presence.
      </span>
      <div className="works-imgs">
        <a target="blank" href="https://crypto-tracker-web-application.netlify.app/" className="box">
          <img className="work-img" src={crypto} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis.</p>
        </a>
        <a target="blank" href="https://personal-finance-app-786.netlify.app/" className="box">
          <img className="work-img" src={finance} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis.</p>
        </a>
        <a target="blank" href="https://redux-shopping-cart-nu.vercel.app/" className="box">
          <img className="work-img" src={portfolio} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis.</p>
        </a>
        <a target="blank" href="https://redux-shopping-cart-nu.vercel.app/" className="box">
          <img className="work-img" src={redux} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis.</p>
        </a>
        <a target="blank" href="https://image-bazar-app.vercel.app/" className="box">
          <img className="work-img" src={imageBazzer} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis.</p>
        </a>
        <a target="blank" href="https://login-signup-page-iota.vercel.app/" className="box">
          <img className="work-img" src={signup} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis.</p>
        </a>
      </div>
      <button className="works-btn">see more</button>
    </section>
  );
}

export default Works;
