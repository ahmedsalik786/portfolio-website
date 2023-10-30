import React, { useRef } from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import microsoft from "../../assets/microsoft.png";
import adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedIcon from "../../assets/linkedInIcon.png";
import GithubIcon from "../../assets/github-icon-1600.png.crdownload";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m1aznwz",
        "template_jl4jszm",
        form.current,
        "JNSzWcrwdNgYk5NCa"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent")
        },
        (error) => {
          console.log(error.text);
          alert("Email not sent")
        }
      );
  };
  return (
    <section className="contact-page">
      <div className="clients">
        <h1 className="contact-page-title">My Clients</h1>
        <p className="clients-desc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="client-imgs">
          <img src={walmart} alt="" className="client-img" />
          <img src={microsoft} alt="" className="client-img" />
          <img src={adobe} alt="" className="client-img" />
          <img src={facebook} alt="" className="client-img" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contact-page-title">Contact Me</h1>
        <span className="contact-desc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form
          
          className="contact-form"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            id=""
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            id=""
          />
          <textarea
            className="msg"
            placeholder="Your Message"
            name="message"
            rows="5"
          ></textarea>
          <button type="submit" value="Send" className="submit-btn">
            Submit
          </button>
          <div className="links">
            
            <a target="blank" href="https://www.facebook.com/sahihul.jami/"> <img src={facebookIcon} alt="" className="link" /></a>
            <a  target="blank" href="https://www.instagram.com/salikahmed05/"> <img src={InstagramIcon} alt="" className="link" /></a>
            <a  target="blank" href="https://www.linkedin.com/in/salik-ahmed-3ab120215/"><img src={LinkedIcon} alt="" className="link" /></a>
            <a  target="blank" href="https://github.com/ahmedsalik786"><img src={GithubIcon} alt="" className="link" /></a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
