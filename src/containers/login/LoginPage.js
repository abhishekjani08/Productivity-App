import React, { useState, useEffect } from 'react'
import { BsFillBackspaceFill } from 'react-icons/bs';
// var fetch = require("fetch");

import { Link, useHistory } from 'react-router-dom'
import "../LoginPage.css"
// import "../App1.css"
import BackgroundImage from './login.png'


export default function LoginPage() {
    let history = useHistory();


    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await fetch("/api/user/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })

        });
        const json = await response.json()
        console.log("hello!!!" + json)
        if (json.sucess) {
            //save the autheotkem and redirect      
            localStorage.setItem('token', json.authtoken)
            alert("User Login Successfully Welcome to dashboard!!")
            history.push("/dashboard")

        }
        else {
            alert("Invalid credential")
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }

    const header = {
        width: "100%",
        height: "180%",
        background: `url(${BackgroundImage})`,
        backgroundPosition: "top right",
        padding: "0 px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% 50%" //cover 
    }

        const header2 = {
            color: "black",
        }
    

    return (
        <div className="text-center m-5-auto" style={header}>
            <div className='text-left'>
                <h2 style={header2} className="sign">Sign In</h2>
                <form method="POST" onSubmit={handleSubmit} id="form">
                        <p>
                            <label>Email address </label><br />
                            <input type="text" name="email" value={credentials.email} onChange={onChange} />
                        </p>
                        <p>
                            <label>Password</label>
                            <br />
                            <input type="password" name="password" value={credentials.password} required onChange={onChange} />
                        </p>
                            <button className="secondary-button" onClick={handleSubmit} >Log in</button>
                        
                </form>
                <footer >
                    <p className='footer1'>Need an account? <Link to="/register" id="signup">Signup</Link></p>
                    <p className='footer2'><Link to="/" className='secondary-button'>Homepage</Link></p>
                </footer>
            </div >
        </div>
    )
}
