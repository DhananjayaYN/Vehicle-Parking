import React from 'react'
import './HomePageCSS.css';
import Footer from '../Components/Footer';
import Navibar from '../Components/NaviBar'
import SelectVehicle from '../Components/SelectVehicle';
import logo from '../Images/inner logo.svg'
import watermark from '../Images/hidden logo.svg'

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
                   
                </div>
               
            </div>
            <div class='rightside_box'>
                <div class='navibar_box'>
                    <Navibar/>
                </div>
                <div class='container'>
                    <div>
                        <SelectVehicle/>
                    </div>
                    <div class='rectragle'>
                        <img src={watermark} alt='Logo' class='water_mark'/>
                    </div>
                </div>
            </div>
        </div>
        <div class='footer_box'>
            <Footer/>
        </div>
    </div>
  )
}
