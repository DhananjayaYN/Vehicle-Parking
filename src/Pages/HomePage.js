import React from 'react'
import './HomePageCSS.css';
import Footer from '../Components/Footer';
import Navibar from '../Components/NaviBar'
import logo from '../Images/inner logo.svg'
import home_img from '../Images/Home image.svg'

export default function HomePage() {
  return (
    <div class='Home'>
        <div class='main_box'>
            <div class='sidebar_box'>
                <img src={logo} alt='Logo' class='logo'/>
                <div class='Map'>
                    <div class='search_bar'>
                        <input type='text' placeholder="Search..." class='search'/>
                    </div>
                    <p>Find Nearby Parking Location</p>
                    <div class='Map_view'></div>
                </div>
                <div class='shops'>
                    <div class='shop_view'>

                    </div>
                    <button class='more'>More</button>
                </div>
            </div>
            <div class='rightside_box'>
                <div class='navibar_box'>
                    <Navibar/>
                </div>
                <div class='container'>
                    <p class='main_topic'>"Park with Ease,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserve with Confidence"</p>
                    <div class='change_mode'>asfdvd</div>
                    <p class="description">
                    Welcome to Mr. Park - your go-to solution for easy and convenient parking. 
                    Find and reserve parking spots in real-time with just a few clicks. 
                    Say goodbye to parking hassles and hello to seamless parking experiences. Your spot awaits!
                    </p>
                    <div class='rectragle'></div>
                    <img src={logo} alt='Logo' class='water_mark'/>
                    <div class='triangle'></div>
                    <img src={home_img} alt='Home_image' class='home_image'/>
                </div>
            </div>
        </div>
        <div class='footer_box'>
            <Footer/>
        </div>
    </div>
  )
}
