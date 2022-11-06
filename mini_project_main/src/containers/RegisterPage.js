import React, {useState} from 'react'
import { Link , useHistory} from 'react-router-dom'
import "./Register.css";
import Bg from "./reg.png";
// import "./App1.css"


/* 1. usrname 2. email 
3. password
*/

export default function SignUpPage() {

    let history = useHistory();
 

    //body will send the data item but it will nto accept the data directly its need to convert it into the string
    const [credentials , setCredentials] = useState({name: " " ,email: "" , password : "", cpassword : ""})

    const handleSubmit =  async (e) =>{
        e.preventDefault();
        const { name, email , password} = credentials
        const response = await fetch("/api/user/cal" , {
            method: "POST" ,
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name , email , password})
    
        });
        const json = await response.json()
        console.log("hello!!! " + json)
        console.log(json.sucess)
        if(json.sucess){
            //save the autheotkem and redirect
            localStorage.setItem('token' , json.authtoken)
            alert("User Register Sucessfully!! please login")
            history.push("/login")

        }
        else{
            alert("Invalid credential")
        }
    
    }

    const onChange =(e)=>{
        setCredentials({...credentials , [e.target.name] : e.target.value})

    }

    const header = {
        width: "100%",
        height: "180%",
        background: `url(${Bg})`,
        backgroundPosition: "top right",
        padding: "0 px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50% 50%" //cover 
    }

    return (
        <div className="text-left m-5-auto" style={header}>
            <h2 className='join'>Join us</h2>
            <form method= "POST" action="/home" className='form'>
                <p>
                    <label>Username</label><br/> 
                    <input type="text" name="name"   onChange={onChange}/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email"  onChange={onChange}/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password"  onChange={onChange} required minLength={5} />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="cpassword"  onChange={onChange} required minLength={5} />
                </p>
                {/* <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p> */}
              <Link to="/dashboard">
                <button className="primary-button" onClick={handleSubmit} id="butt1">Log in</button>
            </Link>
            </form>
            <footer>
                <p><Link to="/"><button className="primary-button" id="butt2">Homepage</button></Link></p>
            </footer>
        </div>
    )

}
