import React from 'react';
import './login.css';
import { FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";



export const login = () => {
  return (
    <div className='wrapper'>

        <form action= "">
            <h1>SignIn</h1>
            <div className="input-box1">
                <input type="text" placeholder='First Name' required/>
                <FaRegUser className='icon'/>

            </div>
            <div className="input-box1">
                <input type="text" placeholder='Last Name' required/>
                <FaRegUser className='icon'/>

            </div>

            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <CiLock className='icon'/>

            </div>

            <div className="input-box">
                <input type="password" placeholder='Confirm Password' required/>
                <CiLock className='icon'/>

            </div>

            <button type="submit">Submit</button>
            
        </form>
    </div>
  )
}
