import React, {useEffect} from "react";
import './footer.scss'

import video2 from '../../Assets/VideoFooter.mp4'

import { FiSend } from "react-icons/fi";
import {PiAirplaneTiltFill} from 'react-icons/pi'
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";


import Aos from 'aos'
import 'aos/dist/aos.css'


function Footer() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <>
      <section className="footer">

        <div className="videoDiv">
          <video src={video2} loop autoPlay muted 
            typeof="VideoFooter/mp4" >
          </video>
        </div>

        <div className="secContent container">
          <div data-aos="fade-up" 
            className="contactDiv flex">
            
            <div data-aos="fade-up" className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className="inputDiv flex">
              <input data-aos="fade-up"
                type="text"
                placeholder="Enter Email Address" 
              />

              <button data-aos="fade-up"
                className="btn flex" 
                type="submit"> SEND 
                <FiSend className="icon"/>
              </button>
            </div>

          </div>

          <div className="footerCard flex">

            <div className="footerIntro flex"
            data-aos="fade-up" data-aos-duration="3000">
              
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  Travel. 
                  <PiAirplaneTiltFill className="icon"/>
                </a>
              </div>

              <div className="footerPara">
                Consequuntur repudiandae quis labore reprehenderit iusto, quisquam atque? 
                Possimus aliquam ab iusto doloremque, fugit dolores neque tempore a consequatur
                soluta suscipit maxime architecto animi illum vero porro dolorum cum voluptates!
              </div>

              <div className="footerSocials flex">
                  <AiOutlineTwitter className="icon"/>
                  <FaYoutube className="icon"/>
                  <FaInstagramSquare className="icon"/>
                  <FaTripadvisor className="icon"/>
              </div>


            </div>

            <div className="footerLinks grid">

              {/* ------groupOne------- */}
              <div className="linkGroup"
                data-aos="fade-up" data-aos-duration="3000">

                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Insurace
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Agency
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Payment
                </li>
              </div>

              {/* ------groupTwo------- */}
              <div className="linkGroup"
                data-aos="fade-up" data-aos-duration="3000">

                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Bookings
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Rentcars
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  HostelWorld
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Trivago
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  TripAdvisor
                </li>
              </div>

              {/* ------groupThree------- */}
              <div className="linkGroup"
                data-aos="fade-up" data-aos-duration="4000">

                <span className="groupTitle">
                  LAST MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  France
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Japan
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  VietNam
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Jordan
                </li>

                <li className="footerList flex">
                  <FiChevronRight className="icon"/>
                  Korea
                </li>
              </div>

            </div>

            <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE THEME</small>
              <small>COPYRIGHT RESERVED - ISRATECH 2024</small>
            </div>


          </div>



        </div>

      </section>
    
    
    
    </>
  )
}
export default Footer
