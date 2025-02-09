import React, {useState} from "react";
import './navbar.scss'


import {PiAirplaneTiltFill} from 'react-icons/pi'
import {IoMdCloseCircle} from 'react-icons/io'
import {RxDragHandleDots2} from 'react-icons/rx'


function Navbar() {
  const [active, setActive] = useState('navBar')

    // ----> navToggle
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
    // ----> navClose
  const removeNav = () => {
    setActive('navBar')
  }

  return(
    <>
      <section className="navSection">
        <header className="header flex">
          <div className="logoDiv">
              <a href="#" className="logo flex">
                <h1>Travel<PiAirplaneTiltFill className="icon"/></h1>
              </a>
          </div>



          <div className={active}>
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
            </ul>

            <div className="navClose" onClick={removeNav}>
              <IoMdCloseCircle className="icon"/> 
            </div>
            
          </div>

          <div className="navToggle" onClick={showNav}>
              < RxDragHandleDots2 className="icon"/>
          </div>

        </header>
      </section>
    </>
  )
}
export default Navbar