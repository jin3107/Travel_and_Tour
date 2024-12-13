import React from "react";
import './App.scss'


import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'


function App() {
  return(
    <>
        <Navbar />
        <Home />
        <Footer />
        <Main />

    </>
  )
}
export default App