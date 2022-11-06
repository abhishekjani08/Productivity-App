import React, { useState, useEffect } from 'react'
import { BsFillBackspaceFill } from 'react-icons/bs';
// var fetch = require("fetch");

import { Link, useHistory } from 'react-router-dom'
import "../LoginPage.css"
// import "../App1.css"
import BackgroundImage from './login.png'


export default function LoginPage() {
    let history = useHistory();


    //body will send the data item but it will nto accept the data directly its need to convert it into the string
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handleSubmit = async (e) => {

        // console.log(e)
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
        // console.log(json.sucess)
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

    // creating auseState in which we change the state of the data
    // const [user , setUser]   = useState({
    //     name : "" ,email : "" , password : ""
    // })
    // let name , value;
    // const handleInputs =(e)=>{
    //     console.log(e) ;
    //     name =  e.target.name; //email
    //     value = e.target.value; //zaidkhan1681@gmail.com
    //     setUser({... user, [name] : value}) //Here i am storin the data-value to the respected place of variable


    // }//hooks setting the value

    // const PostData = async(e) =>{
    //     e.preventDefault(); //preventing from loading
    //     //here by using the object destructring we are not getting the data int he form of user.email or user.password 
    //     //here we are simply fetching the data input by the user
    //     const {name , email , password} = user //user from the useState
    //     //putting the data at the backend using fetch
    //     const response = await fetch("http://localhost:5000/api/user/login",{
    //         method : "POST" ,
    //         header:{
    //             "Content-Type" :"application/json"
    //         } ,
    //         body : JSON.stringify({
    //             name,
    //             email,
    //             password
    //         })

    //     });
    //     const json = await response.json()
    //         console.log(json)



    //     const data = await response.json();
    //     if (data.status === 400 || !data){
    //         window.alert("Invalid Registration")
    //         console.log("Invalid Registration")

    //     }
    //     else{
    //         window.alert("Login Success")
    //         console.log("Login Success")
    //         history.push("/dashboard")

    //     }



    // }

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
                            {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                            <br />
                            <input type="password" name="password" value={credentials.password} required onChange={onChange} />
                        </p>
                        <Link to="/dashboard">
                            <button className="secondary-button" onClick={handleSubmit} >Log in</button>
                        </Link>
                </form>
                <footer >
                    <p className='footer1'>Need an account? <Link to="/register" id="signup">Signup</Link></p>
                    <p className='footer2'><Link to="/" className='secondary-button'>Homepage</Link></p>
                </footer>
            </div >
        </div>
    )
}


















   // const history = useHistory();


    // const [name , setName] = useState("");
    // const [email , setEmail] = useState("");
    // const [password , setPassword] = useState("");

    // useEffect(()=>{
    //     if(localStorage.getItem('user-info')){
    //         history.push("/dashboard")
    //     }
    // })

    // async function login(){
    //     let item = { email , password}
    //     console.log(item) ;
    //    let result = await fetch("http://localhost:5000/api/user/login" ,
    //     {
    //         method: "POST" ,
    //         // url: "/api/user/login",
    //         headers :{
    //             'Content--Type' : 'application/json',
    //             'Accept': "application/json, text/plain, /",
    //             "Accept" : "application/json",
    //             'Origin' : 'http://localhost:5000'
    //         },
    //         body : JSON.stringify({item})
    //     });

    //     result = await result.json();
    //     localStorage.setItem("user-info " , JSON.stringify(result))
    //     history.push("/dashboard")

    // }