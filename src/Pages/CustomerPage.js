import React, { useState, useContext } from 'react';
import './CustomerPage.css';
import Footer from '../Components/Footer';
import Navibar from '../Components/NaviBar';
import SelectVehicle from './buying phase/SelectVehiclePage/SelectVehicle';
import SelectParkingSlot from './buying phase/SelectParkingSlot/SelectParkingSlot';
import ParkingContext from '../context/ParkingContext';
import logo from '../Images/inner logo.svg';
import watermark from '../Images/hidden logo.svg';

export default function CustomerPage() {

    const { selectedCategory, setSelectedCategory } = useContext(ParkingContext);

    const handleCategorySelect = (type) => {
        setSelectedCategory(type);
      };

    // const [selectedCategory, setSelectedCategory] = useState(null);

    // const handleCategorySelect = (category) => {
    //     setSelectedCategory(category);
    // };

    // const handleBackClick = () => {
    //     setSelectedCategory(null);
    // };

    return (
        <div className='Home'>
            <div className='main_box'>
                <div className='sidebar_box'>
                    <img src={logo} alt='Logo' className='logo' />
                    <div className='Map'>
                        <div className='search_bar'>
                            <input type='text' placeholder="Search..." className='search' />
                        </div>
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
                            {!selectedCategory ? (
                                <SelectVehicle onCategorySelect={handleCategorySelect} />
                            ) : (
                                <>
                                    {/* <button onClick={handleBackClick} className='backButton'>Back</button> */}
                                    <SelectParkingSlot selectedCategory={selectedCategory} />
                                </>
                            )}
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
