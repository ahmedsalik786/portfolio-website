import React, { useState } from "react";
import "./nabvar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png"

function Navbar() {
  const [showMenu,setShowMenu] =useState(false)
  return (
    <div>
      <nav className="navbar">
        <img src={logo} className="logo" alt="" />
        <div className="nav-menu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="list"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktop-menu-list-item"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktop-menu-list-item"
          >
            Portfolio
          </Link>
          <Link
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="desktop-menu-list-item"
          >
            Clients
          </Link>
        </div>
        <button
          className="desktop-menu-btn"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={contactImg} alt="" className="desktop-menu-img" /> Contact
          Me
        </button>

        <img src={menu} className="menu" onClick={()=>setShowMenu(!showMenu)} alt="" />
        <div className="mob-menu" style={{display:showMenu? 'flex':'none'}} >
          <Link onClick={()=>setShowMenu(false)}
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="list-item"
          >
            Home
          </Link>
          <Link onClick={()=>setShowMenu(false)}
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="list-item"
          >
            About
          </Link>
          <Link onClick={()=>setShowMenu(false)}
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="list-item"
          >
            Portfolio
          </Link>
          <Link onClick={()=>setShowMenu(false)}
            activeClass="active"
            to="clients"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="list-item"
          >
            Clients
          </Link>
          <Link onClick={()=>setShowMenu(false)}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="list-item"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
