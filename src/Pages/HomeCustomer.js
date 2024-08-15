import React from 'react'
import { useState, useEffect } from 'react';
import './HomeCustomerCSS.css';
import Footer from '../Components/Footer';
import Navibar from '../Components/NaviBar'
import logo from '../Images/inner logo.svg'
import home_img from '../Images/Home image.svg'
import watermark from '../Images/hidden logo.svg'
import search from '../Images/search.svg'
import map from '../Images/map.svg'
import list from '../Images/list.svg'

import Toggle_button from '../Components/Toggle_button';

import { FaCircleUser } from "react-icons/fa6";


export default function HomeCustomer() {

    const [showSidebarBox, showFullSidebar] = useState(window.innerWidth <= 900);

    // Function to handle window resize
    const handleResize = () => {
        if (window.innerWidth > 900) {
            showFullSidebar(true);
        } else {
            showFullSidebar(false);
        }
    };

    // Set up the resize event listener
    useEffect(() => {
        // Call the handler initially to set the correct state
        handleResize();
    
        // Add the resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    //const [showSidebarBox, showFullSidebar] = useState(false);
    const show = () =>{
        showFullSidebar(prevState => !prevState);
    }

  return (
    <div className='C_Home'>
        <div className='C_main_box'>

            {/*--------------------responsive side bar-------------------------*/}
            <div className="C_sidebar_mobile">
                <img src={logo} alt='Logo' className='C_logo_mobile'/><br></br>
                <ul className='C_side_bar_tool'>
                    <li><img src={search} alt='Search' className='C_side_tool'/></li>
                    <li><img src={map} alt='map' className='C_side_tool'/></li>
                    <li><img src={list} alt='list' className='C_side_tool'/></li>
                </ul>
                <button onClick={show} className={showSidebarBox? 'C_show_button_move' : 'C_show_button' }>{showSidebarBox? '<<' : '>>'}</button>
            </div>

            {/*------------------------------------------------------------------*/}

            <div className={showSidebarBox ? 'C_sidebar_box' : 'C_sidebar_box_hidden'}>
                <img src={logo} alt='Logo' className='C_logo'/>
                <div className='C_Map'>
                    <div className='C_search_bar'>
                        <input type='text' placeholder="Search..." className='C_search'/>
                    </div>
                </div>
                <div className='C_profile'>
                    <FaCircleUser />
                    <button className='C_admin_button'>Owner Profile</button>
                </div>
                <div className="button-container">
                    <div className="background-circle">
                         <button className="start-button">Let's Get Start</button>
                    </div>
                </div>
                <div className='C_shops'>
                    <div className='C_shop_view'>

                    </div>
                    <button className='C_more'>More</button>
                </div>
            </div>

            {/*---------------------rightside box----------------------------*/}

            <div className='C_rightside_box'>
                <div className='C_navibar_box'>
                    <Navibar/>
                </div>

                {/*---------------------------container----------------------------------*/}

                <div className='C_container'>
                    <p className='C_main_topic'>"Provide Stress Free Parking,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Your Customer"</p>
                    <div className='C_change_mode'>
                        <Toggle_button/>
                    </div>
                    <p className="C_description">
                    Welcome to Mr. Park - your go-to solution for easy and convenient parking. 
                    Find and reserve parking spots in real-time with just a few clicks. 
                    Say goodbye to parking hassles and hello to seamless parking experiences. Your spot awaits!
                    </p>
                    <div className='C_rectragle'></div>
                    <img src={watermark} alt='Logo' className='C_water_mark'/>
                    <div className='C_triangle'></div>
                    <img src={home_img} alt='Home_image' className='C_home_image'/>
                </div>
            </div>
        </div>
        <div className='C_footer_box'>
            <Footer/>
        </div>
    </div>
  )
}
