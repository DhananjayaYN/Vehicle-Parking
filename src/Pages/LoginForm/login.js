import React from 'react';
import './login.css';
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";



export default function Login () {
  return (
    <div className='wrapper'>

        <form action= "">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaRegUser className='icon'/>

            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <CiLock className='icon'/>

            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href='#'>Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link"></div>
                <p>Don't have an account?<a href="#">Register</a></p>
        </form>
    </div>
  )
}
