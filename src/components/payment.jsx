
import "./payment.css";
import logo from "../img/logo.svg";
import search from "../img/search.svg";
import map from "../img/map.svg";
import list from "../img/list.svg";
import { useState, useEffect } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import watermark from '../img/hidden logo.svg'

import bitcoin from '../img/Bitcoin.svg';
import googlepay from '../img/GooglePay.svg';
import Mastercard from '../img/Mastercard.svg';
import PayPal from '../img/PayPal.svg';
import innerLogo from '../img/inner logo.svg';
import saveBtn from '../img/saveBtn.svg';


const address="University of Ruhuna";
const locationName="Matara, 07, beach Rd";
const tel = 119;
const email= "test@gmail.coom";

const Payment = () => {

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
                                <li className="v-progress-item completed"><h4>Billing</h4></li>
                                
                                <li className="v-progress-item inprogress"><h4>Payment</h4></li>
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
                           <h5>Location Data payment page</h5>
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
                            <li className="v-progress-item completed"><h4>Slot allocation</h4></li>
                                <li className="v-progress-item completed"><h4>Billing</h4></li>
                                
                                <li className="v-progress-item inprogress"><h4>Payment</h4></li>
                                <li className="v-progress-item"><h4>Invoise</h4></li>
                            </ul>
                        </div>
                </div>

                <div className="contaner">
                        <div className="nav">
                            <Navbar/>
                        </div>

                        <div className="contenct">
                            <img src={watermark} alt='Logo' class='water_mark'/>
                            <div className="invoDiv"><div className="invoiceDiv"></div></div>
                            <div className="paydiv">
                                <div className="payData">Enter Payment Data</div>
                                <div className="payBtnDiv">
                                    <button ><img src={bitcoin} alt='bitcoin'  className='Paybtn'/></button>
                                    <button ><img src={googlepay} alt='googlepay'  className='Paybtn'/></button>
                                    <button ><img src={Mastercard} alt='Mastercard'  className='Paybtn'/></button>
                                    <button ><img src={PayPal} alt='PayPal'  className='Paybtn'/></button>
                                </div>
                                <div className="payDataForm">
                                    <table>
                                        <tr>
                                            <td>Name on Card</td>
                                            <td><input type="text" /></td>
                                        </tr><br />
                                        <tr>
                                            <td>Email</td>
                                            <td><input type="text" /></td>
                                        </tr><br />
                                        <tr>
                                            <td>Card Number</td>
                                            <td><input type="text" /></td>
                                        </tr><br />
                                        <tr>
                                            <td>Expire Data</td>
                                            <td><input type="text" /></td>
                                        </tr><br />
                                        <tr>
                                            <td>Security Code</td>
                                            <td><input type="text" /></td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="lastbtn"><button className="paybtnG">Complete Order</button></div>
                                
                            </div>

                            

                        </div> 

                </div>
            </div>

            <div className="footer">
                <Footer/>
            
            </div>
        </div>

    );
}
 
export default Payment;