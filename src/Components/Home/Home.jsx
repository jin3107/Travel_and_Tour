import React, {useEffect} from "react";
import './home.scss'
import video1 from '../../Assets/VideoHome.mp4'

import { GrLocation } from "react-icons/gr";
import { RiFilter2Fill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";


import Aos from 'aos'
import 'aos/dist/aos.css'



function Home() {

  useEffect(() => {
    Aos.init({duration: 4000})
  }, [])


  return(
    <>
      <section className="homeSection">
        <div className="overlay"></div>
        
        <video src={video1} muted autoPlay loop 
          type="VideoHome/mp4">
        </video>

        <div className="textDiv">  

          <span data-aos="fade-up" 
            className="smallText">
            Our Packages
          </span>           

          <h1 data-aos="fade-up" 
            className="homeTitle">
            Search you Holiday
          </h1>         

        </div>

        <div className="homeContent">

          <div className="carDiv grid"
            data-aos="fade-up">  

            <div className="desInput">
              <label htmlFor="city">Search your destination:</label>
              <div className="input flex">
                <input type="text" placeholder="Search" />
                <GrLocation className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Search date:</label>
              <div className="input flex">
                <input type="date" placeholder="Date" />
              </div>
            </div>

            <div className="priceInput">
              <div className="lable_Total flex">
                <label htmlFor="price">Max Price:</label>
                <h3 className="total">$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000"/>
              </div>
            </div>

            <div className="searchOptions flex">
              <RiFilter2Fill className="icon"/>
              <span> MORE FILTERS </span>
            </div>

          </div>            
        </div>

        <div data-aos="fade-up" className="homeFooterIcon flex">
            
            <div className="rightIcon">
                <IoLogoFacebook className="icon"/>
                <FaInstagramSquare className="icon"/>
                <FaTripadvisor className="icon"/>
            </div>

            <div className="leftIcon">
              <FaList className="icon"/>
              <TbAppsFilled className="icon"/>
            </div>

          </div>

      </section>
    </>
  )
}
export default Home