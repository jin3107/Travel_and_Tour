import React, {useEffect} from "react";
import './main.scss'

import { MdLocationOn } from "react-icons/md";
import { LuClipboardCheck } from "react-icons/lu";

import img1 from '../../Assets/img/img1.jpg';
import img2 from '../../Assets/img/img2.jpg';
import img3 from '../../Assets/img/img3.jpg';
import img4 from '../../Assets/img/img4.jpg';
import img5 from '../../Assets/img/img5.jpg';
import img6 from '../../Assets/img/img6.jpg';
import img7 from '../../Assets/img/img7.jpg';
import img8 from '../../Assets/img/img8.jpg';
import img9 from '../../Assets/img/img9.jpg';


import Aos from 'aos'
import 'aos/dist/aos.css'


const data = [
  {
    id: 1,
    imgScr: img1,

    title: "Eiffel Tower",
    location: "France",
    grade: "RELAX",
    price: " $1000",
    description: "The Eiffel Tower is a historical landmark in the heart of Paris. It's frequently featured as a backdrop in movies and a variety of TV shows. The wrought-iron tower is often labelled as one of the world’s most romantic places to visit. Known to locals as ‘La Tour Eiffel’, the landmark is also the Parisian icon often seen in a variety of souvenirs sold in gift stores across France."
  },

  {
    id: 2,
    imgScr: img2,
    title: "Wat Phra Kaew",
    location: "Thailand",
    grade: "CULTURAL", 
    price: " $900",
    description: "When it comes to Thailand - the land of Golden Temples, surely every tourist has the first impression of the unique temples here. Wat Phra Kaew (known as the Temple of the Emerald Buddha or locally as Wat Phra Sri Rattana Satsadaram) is one of the most important Buddhist temples in Thailand. Located in the historic centre of Bangkok and within the grounds of the Grand Palace, the temple enshrines Phra Kaew Morakot (the Emerald Buddha), the highly revered Buddha image meticulously carved from a single block of jade."
  },
  
  {
    id: 3,
    imgScr: img3,
    title: "Great Wall of China",
    location: "China",
    grade: "ADVENTURE",
    price: " $900",
    description: "The Great Wall of China is one of the most famous landmarks in the world. It's a UNESCO World Heritage Site and a must-visit for anyone travelling to China. The Great Wall stretches over 21,000 km and was built to protect the Chinese Empire from invasions"
  },

  {
    id: 4,
    imgScr: img4,
    title: "Machu Picchu",
    location: "Peru",
    grade: "ADVENTURE",
    price: " $1500",
    description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers northwest of Cuzco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate."
  },

  {
    id: 5,
    imgScr: img5,
    title: "Mount Fuji",
    location: "Japan",
    grade: "RELAX",
    price: " $800",
    description: "At Mount Fuji, you can ski, make snowmen, walk on snowy roads and freely take beautiful photos. On Mount Fuji, many famous ski resorts, luxury resorts and traditional Japanese houses are waiting for you to relax.The most convenient thing is that you can book a tour to visit Mount Fuji. There will be a car to take visitors straight to the 5th station at an altitude of 2,300m and experience exciting activities typical of the land of Phu Tang."
  },

  {
    id: 6,
    imgScr: img6,
    title: "Sydney Opera House",
    location: "Australia",
    grade: "CULTURAL",
    price: " $1400",
    description: "The Sydney Opera House is one of the most iconic buildings in the world. It's located in Sydney Harbour and is a UNESCO World Heritage Site. The Opera House is home to a variety of performing arts venues, including the Concert Hall, Drama Theatre, and Playhouse. The building is also a popular tourist attraction and is often featured in postcards and travel brochures."
  },

  {
    id: 7,
    imgScr: img7,
    title: "Petra",
    location: "Jordan",
    grade: "ADVENTURE",
    price: " $1200",
    description: "Petra is a historical and archaeological city in southern Jordan. It's famous for its rock-cut architecture and water conduit system. Petra is also known as the Rose City due to the color of the stone from which it's carved. The city is a UNESCO World Heritage Site and is one of the New Seven Wonders of the World."
  },

  {
    id: 8,
    imgScr: img8,
    title: "N Seoul Tower",
    location: "Korea",
    grade: "RELAX",
    price: " $900",
    description: "If you are planning to travel to Seoul, Korea, Namsan Tower will definitely be one of the notable destinations on your list. Located on top of Namsan Mountain, with beautiful views of the city from an altitude of 480m above sea level, Namsan Tower is considered a symbol of Seoul, attracting millions of tourists every year. "
  },

  {
    id: 9,
    imgScr: img9,
    title: "Dragon Bridge",
    location: "Viet Nam",
    grade: "RELAX",
    price: " $900",
    description: "Dragon Bridge is one of the famous bridges in Da Nang that tourists should visit even once when visiting this city. This bridge is famous for its special design in the shape of a Ly Dynasty dragon reaching out to the sea, expressing the beautiful city's strong desire to rise. Visitors can enjoy an impressive night experience with fire and water spray performances. This program usually takes place on weekend evenings (Saturday and Sunday) as well as during major holidays of the year."
  }

]


function Main() {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <>
      <section className="main container section">

        <div className="secTitle">
          <h1 className="title" data-aos="fade-right">
            Most visited destinations
          </h1>
        </div>

        <div className="secContent grid">
          {
            data.map(({id, imgScr, title, location, grade, price, description}) => {
              return(
                <>
                  <div className="card" key={id} 
                    data-aos="fade-up" data-aos-duration="4000">

                    <div className="imgDiv">
                      <img src={imgScr} alt={title}/>
                    </div>
                    <div className="cardInfo">

                      <h3 className="title">{title}</h3>

                      <span className="continent flex">
                        <MdLocationOn className="icon" color=""/>
                        <h4 className="local">{location}</h4>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        
                        <div className="price">
                          <p>{price}</p>
                        </div>
                      </div>

                      <div className="desc">
                        <p>{description}</p>
                      </div>

                      <putton className="btn flex">
                        DETAILS <LuClipboardCheck className="icon"/>
                      </putton> 

                    </div>

                  </div>
                </>
              )
            })
          }
          
        </div>

      </section>

    </>
  )
}
export default Main