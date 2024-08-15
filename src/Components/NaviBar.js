import React from 'react'
import './NaviBarCSS.css';

export default function NaviBar() {
  return (
    <div className='NaviBar'>
        <ul className='NaviList'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>My Booking</a></li>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Login</a></li>
            <div className='right_navi_item'>
              <li><a href='#'>Signup</a></li>
            </div>
        </ul>
        <hr/>
    </div>
  )
}