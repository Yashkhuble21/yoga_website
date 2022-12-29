import React from "react"
import "./login.css"

const Login = () => {

   
    return (
        <div className="login">
            <h1>login</h1>
            <input type="email" name="email" placeholder="Enter your Email"></input>
            <input  type="password" name="password" placeholder="Enter your Password"></input>
            <div className="button">Login</div>
            <div>or</div>
            <div className="button">Registeration</div>
        </div>
    )
}

export default Login;