import React, { useContext, useState, useEffect } from 'react';
import './CheckoutPage.css';
import { OrderContext } from '../../../context/OrderContext';
import { ParkingContext } from '../../../context/PakingContext';
import Footer from '../../../Components/Footer';
import Navibar from '../../../Components/NaviBar'
import logo from '../../../Images/inner logo.svg'
import watermark from '../../../Images/hidden logo.svg'
import search from '../../../Images/search.svg'
import map from '../../../Images/map.svg'
import list from '../../../Images/list.svg'


export default function CheckoutPage() {

    const { selectedCategory } = useContext(ParkingContext);
    const { orders } = useContext(OrderContext);
    const [showSidebarBox, setShowSidebarBox] = useState(window.innerWidth <= 900);

    useEffect(() => {
        console.log("Selected Category:", selectedCategory);
    }, [selectedCategory]);

    // Function to handle window resize
    const handleResize = () => {
        if (window.innerWidth > 900) {
            setShowSidebarBox(true);
        } else {
            setShowSidebarBox(false);
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
        setShowSidebarBox(prevState => !prevState);
    }

    const getHourlyCost = (vehicleType) => {
        switch (vehicleType) {
            case 'Car':
                return 150; 
            case 'Bike':
                return 50; 
            case 'Three Wheel':
                return 100; 
            default:
                return 200; // Default rate
        }
    };

    const calculateTotalCost = () => {
        return orders.reduce((total, order) => {
            const { inTime, outTime } = order;
            const hourlyRate = getHourlyCost(selectedCategory);
            const hours = (new Date(outTime) - new Date(inTime)) / (1000 * 60 * 60);
            return total + (Math.ceil(hours) * hourlyRate);
        }, 0);
    };

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
            </div>

            {/*---------------------rightside box----------------------------*/}

            <div class='rightside_box'>
                <div class='navibar_box'>
                    <Navibar/>
                </div>

                {/*---------------------------container----------------------------------*/}

                <div class='container'>
                    <div class = 'contents'>
                        <div>
                            <p>Reservation Type: <br></br>
                            </p>
                            <div class = 'order_details'>
                            <span>
                                Order Details: &nbsp;
                            </span>
                                <table>
                                <thead>
                                    <tr>
                                        <th>Reservation Date</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Level</th>
                                        <th>Lot Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => {
                                        const { selectedDate, inTime, outTime, slot } = order;
                                          const { parking_id, level, lot_number, vehicle_type } = slot; // Extract relevant properties
                                        return (
                                            <tr key={index}>
                                                <td>{new Date(selectedDate).toLocaleDateString()}</td>
                                                <td>{new Date(inTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</td>
                                                <td>{new Date(outTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</td>
                                                <td>{level}</td>
                                                <td>{lot_number}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            </div>
                            <div class="order-form">
                                <div class='order' id='name'>
                                    Name: <input type="text" name="name" id="name-input" />
                                </div>
                                <div class='order' id='contact-number'>
                                    Contact Number: <input type="text" name="contactNumber" id="contact-number-input" />
                                </div>
                                <div class='order' id='email'>
                                    Email Address: <input type="text" name="email" id="email-input" />
                                </div>
                                <div class='order' id='vehicle-number'>
                                    Vehicle Number: <input type="text" name="vehicleNumber" id="vehicle-number-input" placeholder='ABC-1234' />
                                </div>
                                <div class='order' id='vehicle-type'>
                                    Vehicle Type: <input type="text" name="vehicleType" id="vehicle-type-input" value={selectedCategory} readOnly />
                                </div>
                                <div class='order' id='total-amount'>
                                    Total Amount: <input type="text" name="totalAmount" id="total-amount-input" value={`LKR ${calculateTotalCost()}.00`} readOnly />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div class='rectragle'></div>
                    <img src={watermark} alt='Logo' class='water_mark'/>
                    {/* <div class='triangle'></div> */}
                    {/* <img src={home_img} alt='Home_image' class='home_image'/> */}
                </div>
            </div>
        </div>
        <div class='footer_box'>
            <Footer/>
        </div>
    </div>
  )
}
