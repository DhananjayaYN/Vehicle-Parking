import React, { useState, useContext } from 'react';
import './CustomerPage.css';
import Footer from '../Components/Footer';
import Navibar from '../Components/NaviBar';
import SelectVehicle from './buying phase/SelectVehiclePage/SelectVehicle';
import SelectParkingSlot from './buying phase/SelectParkingSlot/SelectParkingSlot';
import { ParkingContext } from '../context/PakingContext';
import logo from '../Images/inner logo.svg';
import watermark from '../Images/hidden logo.svg';

import './HomePageCSS.css';

export default function CParkingSpace() {
    return (
        <div className='Home'>
            <div className='main_box'>

                <div class='sidebar_box'>
                    <img src={logo} alt='Logo' class='logo' />
                    <div class='Map'>
                        <div class='search_bar'>
                            <input type='text' placeholder="Search..." class='search' />
                        </div>
                        <p>Find Nearby Parking Location</p>
                    </div>
                    <div className='shops'>
                        <div className='shop_view'>
                            <div className='package'>Packages</div>
                            <div className='shop_display'>
                                
                            </div>
                        </div>
                        <button className='more'>More</button>
                    </div>
                </div>
                <div className='rightside_box'>
                    <div className='navibar_box'>
                        <Navibar />
                    </div>
                    <div className='container'>
                        <div className='rectangle'>
                            <img src={watermark} alt='Logo' className='water_mark' />
                        </div>
                        <div className='content'>
                            <SelectParkingSlot/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_box'>
                <Footer />
            </div>
        </div>
    );
}