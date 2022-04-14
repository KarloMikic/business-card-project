import React from "react"
import FacebookIcon from "../Images/FacebookIcon.png"
import InstagramIcon from "../Images/InstagramIcon.png"
import GitHubIcon from "../Images/GitHubIcon.png"
export default function Footer(){
    return(
        <footer className="footer">
            <a href="https://www.facebook.com/Kaki.069" target="_blank" rel="noreferrer"> <img alt= "" src ={FacebookIcon} className="ass" /> </a>
            <a href="https://www.instagram.com/mikic_karlo/" target="_blank" rel="noreferrer"> <img alt= "" src ={InstagramIcon} /> </a>
            <a href="https://github.com/KarloMikic" target="_blank" rel="noreferrer"> <img alt= "" src ={GitHubIcon} /> </a>
        </footer>
    )
}