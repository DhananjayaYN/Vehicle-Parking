import React, { useState } from 'react'
import "./BussReg.css"
import Footer from '../Components/Footer';
import logo from '../Images/inner logo.svg'
import watermark from '../Images/hidden logo.svg'
import NaviBar from '../Components/NaviBar';
import V from '../Images/V.svg'
const BussReg = () => {
    const [searchValue, setSearchValue] = useState();
    return (
        <div className='Home'>
            <div className='main_box'>
                <div className='sidebar_box'>
                    <div className='logo_body'>
                        <img src={logo} alt='Logo' className='logo' />
                    </div>
                    <div className='searchbody'>
                        <input type='text' placeholder='Search location parking / Place' onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                    <div className='place_card'>
                        {searchValue}
                    </div>
                    <div className='My_Planes_Side'>
                        {searchValue}
                    </div>
                </div>
                <div className='rightside_box'>
                    <div className='navibar_box'>
                        <NaviBar />
                    </div>
                    <div className='container'>
                        <div className='containerBody'>
                            <div className='card1'>
                                <div className='card11'>
                                    <div className='frame11'>
                                        <div className='frame11_body'>
                                            Enter company Name : <input type='text' /><br />
                                            Enter your name : <input type='text' /><br />
                                            Enter email : <input type='text' /><br />
                                            Enter phone number : <input type='text' /><button>Verify</button><br />
                                            <button>Update Details</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='card12'>
                                    <div className='frame12'>
                                        <img src={V} />
                                    </div>
                                </div>
                            </div>
                            <div className='card2'>
                                <div className='card21'>
                                    <br />
                                    <div className='frame21'>
                                        <div className='frame21_body'>
                                            Enter Address : <input type='text' /><br />
                                            Add Vehicle Types <br />
                                            Charging Fee (Slot per hour) :<input type='text' /><input type='text' /><br />
                                            Company Bank Details : <br />
                                            <button>Update Details</button>
                                        </div>
                                    </div>
                                    <br />
                                    <button>Create My Parking Space</button>
                                    <br />
                                </div>
                                <div className='card22'>
                                    <div className='frame22'>
                                        <div className='frame22_body' style={{ alignSelf: 'center', }}>
                                            One Galle Face<br /><br />
                                            Parking  History <br /><br />
                                            Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In:<br />
                                            <input type='text' /><br /><input type='text' /><br />
                                            <button>View</button><br />
                                            Earnings <br />
                                            Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In:<br />
                                            <input type='text' /><br /><input type='text' /><br />
                                            <button>View</button><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='rectragle'></div>
                        <img src={watermark} alt='Logo' className='water_mark' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default BussReg;