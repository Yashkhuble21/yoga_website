import React from "react"
//import { useState } from "react"
import "./register.css"

const Register = () => {
// const [user, setUser] = useState({

//     name:"",
//     email:"",
//     password:"",
//     reEnterPassword:""
// })
//  const handleChange = e =>{
//     const {name , value} = e.target
//     setUser({...user,[name]:value})
//  }
    return (
        <div className="register">
            <h1>Registeration</h1>
            <input type="email" name="text"  placeholder="Your Name" ></input>
            <input type="email" name="email"    placeholder="Your Email" ></input>
            <input  type="password" name="password"    placeholder="Your Password" ></input>
            <input  type="password" name="repassword"   placeholder="Re-enter Password" ></input>
            <div className="button">Registeration</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default Register;
//value={user.reEnterPassword}