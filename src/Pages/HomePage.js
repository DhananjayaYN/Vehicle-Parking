import React from 'react'
import { useState, useEffect } from 'react';
import './HomePageCSS.css';
import Footer from '../Components/Footer';
import Navibar from '../Components/NaviBar'
import logo from '../Images/inner logo.svg'
import home_img from '../Images/Home image.svg'
import watermark from '../Images/hidden logo.svg'
import search from '../Images/search.svg'
import map from '../Images/map.svg'
import list from '../Images/list.svg'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Toggle_button from '../Components/Toggle_button';
import Card_list from '../Components/Places_card';


const center = {
    lat: 6.9271, // latitude in colombo
    lng: 79.8612, // longitude in colombo
  };

const mapContainerStyle = { // map style
    width: '100%',
    height: '100%',
};

const option = {
    
}



export default function HomePage() {

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
    <div class='Home'>
        <div class='main_box'>

            {/*--------------------responsive side bar-------------------------*/}
            <div className="sidebar_mobile">
                <img src={logo} alt='Logo' className='logo_mobile'/><br></br>
                <ul className='side_bar_tool'>
                    <li><img src={search} alt='Search' className='side_tool'/></li>
                    <li><img src={map} alt='map' className='side_tool'/></li>
                    <li><img src={list} alt='list' className='side_tool'/></li>
                </ul>
                <button onClick={show} className={showSidebarBox? 'show_button_move' : 'show_button' }>{showSidebarBox? '<<' : '>>'}</button>
            </div>

            {/*------------------------------------------------------------------*/}

            <div class={showSidebarBox ? 'sidebar_box' : 'sidebar_box_hidden'}>
                <img src={logo} alt='Logo' class='logo'/>
                <div class='Map'>
                    <div class='search_bar'>
                        <input type='text' placeholder="Search..." class='search'/>
                    </div>
                    <p>Find Nearby Parking Location</p>
                    <div class='Map_view'>
                        <LoadScript googleMapsApiKey={'AIzaSyDXLZ8bWEPoplJetqqQJa-m2f6pAiVKo1c'}>
                            <GoogleMap
                            mapContainerStyle={mapContainerStyle}
                            center={center}
                            zoom={7}
                        
                            />
                        </LoadScript>
                    </div>
                </div>
                <div className='shops'>
                    <div className='shop_view'>
                        <div className='package'>Packages</div>
                        <div className='shop_display'>
                           <Card_list/>
                        </div>
                    </div>
                    <button className='more'>More</button>
                </div>
            </div>

            {/*---------------------rightside box----------------------------*/}

            <div class='rightside_box'>
                <div class='navibar_box'>
                    <Navibar/>
                </div>

                {/*---------------------------container----------------------------------*/}

                <div class='container'>
                    <p class='main_topic'>"Park with Ease,<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reserve with Confidence"</p>
                    <div class='change_mode'>
                        <Toggle_button/>
                    </div>
                    <p class="description">
                    Welcome to Mr. Park - your go-to solution for easy and convenient parking. 
                    Find and reserve parking spots in real-time with just a few clicks. 
                    Say goodbye to parking hassles and hello to seamless parking experiences. Your spot awaits!
                    </p>
                    <div class='rectragle'></div>
                    <img src={watermark} alt='Logo' class='H_water_mark'/>
                    <div class='triangle'></div>
                    <img src={home_img} alt='Home_image' class='home_image'/>
                </div>
            </div>
        </div>
        <div class='H_footer_box'>
            <Footer/>
        </div>
    </div>
  )
}
