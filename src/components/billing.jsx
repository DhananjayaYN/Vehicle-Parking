
import "./billing.css";
import logo from "../img/logo.svg";
import search from "../img/search.svg";
import map from "../img/map.svg";
import list from "../img/list.svg";
import { useState, useEffect } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import Footer from './footer';
import Navbar from './navbar';
import watermark from '../img/hidden logo.svg'

const address="University of Ruhuna";
const locationName="Matara, 07, beach Rd";
const tel = 119;
const email= "test@gmail.coom";

const Hello = () => {

    const[showSidebarBox,showFullSidbar] = useState('');

    const handleResize =()=>{
        if(window.innerWidth > 900){
            showFullSidbar(true);
        }else{
            showFullSidbar(false);
        }
    
    };
    useEffect(
        ()=>{

            handleResize();
            window.addEventListener('resize',handleResize);

            return ()=>{
                window.removeEventListener('resize',handleResize);
            };
    } , [] );

    const show =()=>{
        showFullSidbar(prevState => !prevState);
    }


    return (
        <div className="home">
            <div className="mainBox">

                <div className="sideBarSmall">
                    <img src={logo} alt='Logo' className='logo_mobile'/><br></br>
                    <ul className='side_bar_tool'>
                        <li><img src={search} alt='Search' className='side_tool'/></li>
                        <li><img src={map} alt='map' className='side_tool'/></li>
                        <li><img src={list} alt='list' className='side_tool'/></li>
                    </ul>
                    
                    <button onClick={show} className={showSidebarBox? 'show_button_move' : 'show_button' }>{showSidebarBox? '<<' : '>>'}</button>

                    <div className="v-progress">
                            <ul>
                                <li className="v-progress-item completed"><h4>Slot allocation</h4></li>
                                <li className="v-progress-item inprogress"><h4>Billing</h4></li>
                                
                                <li className="v-progress-item"><h4>Payment</h4></li>
                                <li className="v-progress-item"><h4>Invoise</h4></li>
                            </ul>
                        </div>
                </div>

                <div class={showSidebarBox ? 'sideBar' : 'sideBarHidden'}>
                    

                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="search">
                            
                            <input type="text" placeholder="Search location"/>
                        </div>
                        <div className="location">
                           <h5>Location Data</h5>
                           <ul>
                            <li>{locationName}</li>
                            <li>{address}</li>
                            <li>{tel}</li>
                            <li>{email}</li>
                           </ul>
                           
                          
                           
                        </div>
                        <div className="forButton">
                            <button>MR PARK</button>
                            <button>MAP</button>
                        </div>
                        <div className="v-progress">
                            <ul>
                                <li className="v-progress-item completed"><h3>Slot allocation</h3></li>
                                <li className="v-progress-item inprogress"><h3>Billing</h3></li>
                                
                                <li className="v-progress-item"><h3>Payment</h3></li>
                                <li className="v-progress-item"><h3>Invoise</h3></li>
                            </ul>
                        </div>
                </div>

                <div className="contaner">
                        <div className="nav">
                            <Navbar/>
                        </div>




                        <div className="contenct">
                            <img src={watermark} alt='Logo' class='water_mark'/>
                            <div>
                            <label htmlFor="reservation">Reservation Type:</label>
                            <button>Single Day</button>
                            <button>Multiple Day</button>
                            </div><br />
                            <div>
                                <label htmlFor="date">Date:</label>
                                <button>2022-03-05 </button>
                                <button>2022-03-05</button>
                                <button>2022-03-05</button>
                            </div><br />
                            <div>
                                <label htmlFor="ptime">Paking Time:</label>
                                <label htmlFor="ptime">From:</label>
                                <label htmlFor="ptime">To:</label>
                            </div>
                            <div>
                                <label className="toGap" htmlFor="timeBtn"></label>
                                <button>10:00 AM</button>
                                <button>02:00 PM</button>
                            </div><br />
                            
                            <div>
                                <label htmlFor="parkingSpace">Selected Parking Space:</label>
                                <label htmlFor="item1">B 07</label>
                                <label htmlFor="item1">D 07</label>
                                <label htmlFor="item1">A 07</label>
                                <button>Change</button>
                            </div><br />
                            <div className="containerInput">
                                <table>
                                    <tr>
                                        <td><label htmlFor="">Name:</label></td>
                                        <td><input type="text" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="">Contact Number:</label></td>
                                        <td><input type="text" name="" id="" /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="">Vehicle Number:</label></td>
                                        <td><input type="text" name="" id="" /></td>
                                        
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="">Total Amount:</label></td>
                                        <td>LKR 1500.00</td>
                                    </tr>
                                </table>
                               
                            </div>
                            <button className="paybtnG">Pay Now</button>

                        </div> 











                </div>
            </div>

            <div className="footer">
                <Footer/>
            
            </div>
        </div>

    );
}
 
export default Hello;