import React from "react"
import Info from "./Components/Info.js"
import Interests from "./Components/Interests.js"
import About from "./Components/About.js"
import Footer from "./Components/Footer.js"

export default function App(){
   return(
    <div className="whole-card">
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>
   )
}
