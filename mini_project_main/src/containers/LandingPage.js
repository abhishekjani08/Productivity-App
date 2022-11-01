import React from 'react'
import { Link } from 'react-router-dom'

import "./App1.css"
import BackgroundImage from '../images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Welcome to Productivity App</h1>
            <p className="main-para text-center">Boost Your Productivity!</p>
            <div className="buttons text-center  center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register"> 
                {/* Here link has included  to lin to the other specifed page */}
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link> 
            </div>
        </header>
    )
}


//styled component

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    backgroundSize: "cover" //cover 
}