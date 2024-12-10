import React from "react";
import './navbar.scss'
import {PiAirplaneTiltFill} from 'react-icons/pi'
import {IoMdCloseCircle} from 'react-icons/io'
import {RxDragHandleDots2} from 'react-icons/rx'

function Navbar() {
  return(
    <>
      <section className="navbarSection">
        <header className="header flex">
        <div className="logoDiv">
            <a href="#" className="logo flex">
              <h1>Travel.<PiAirplaneTiltFill /></h1>
            </a>
        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className="btn">
              <a href="#" >BOOK NOW</a>
            </button>

            {/* <button type="button" className="btn btn-primary" data-mdb-ripple-init>BUTTON</button> */}

          </ul>

          <div className="closeNavbar">
            <IoMdCloseCircle className="icon"/> 
          </div>

          <div className="toggleNavbar">
            <RxDragHandleDots2 className="icon"/>
          </div>


        </div>
      </header>
    </section>
  </>
  )
}
export default Navbar