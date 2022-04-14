import React from "react"
import linkedinIcon from "../Images/Linkedin.png"
import mailIcon from "../Images/Mail.png"
import profilePic from "../Images/profile1.png"

export default function Info(){
    return(
        <div className="info">
            <img alt="" src = {profilePic} className = "profile-pic"/>
            <h1 className="info--name"> Karlo Mikić</h1>
            <h4 className="info--profession">Front-End Developer</h4>
            <a href="https://karlo-mikic-portfolio.netlify.app/" target="_blank" rel="noreferrer"><h6 className ="info--website">https://karlo-mikic-portfolio.netlify.app/</h6></a>
            <nav className="contact-nav">
                <a href="https://www.linkedin.com/in/karlo-miki%C4%87-a86234237/" target="_blank" rel="noreferrer"> <img alt="" className="linkedin-icon" src = {linkedinIcon}/> </a>
                <a href="mailto: karlomikicdev@gmail.com"> <img  alt="" className="mail-icon" src = {mailIcon}/> </a>
            </nav>
        </div>
    )
}