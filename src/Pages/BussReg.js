import React, { useState, useRef } from 'react'
import "./BussReg.css"
import Footer from '../Components/Footer';
import logo from '../Images/inner logo.svg'
import watermark from '../Images/hidden logo.svg'
import NewNaviBar from '../Components/NewNaviBar';
import V from '../Images/V.svg'
import emailIcon from '../Images/email_Icon.svg'
import Phone_Icon from '../Images/Phone_Icon.svg'

const BussReg = () => {
    const [searchValue, setSearchValue] = useState();

    //image
    const [image, setImage] = useState();
    const inputRef = useRef(null);
    const changeimage = (e) => {
        setImage(e.target.files[0]);
    }


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
                        <NewNaviBar />
                    </div>
                    <div className='container'>
                        <div className='containerBody'>
                            <div className='card1'>
                                <div className='card11'>
                                    <div className='frame11'>
                                        <div className='frame11_body'>
                                            <div className='frame11_body_contnts'>
                                                <div className='frame11_body_01'>
                                                    <p>Enter company Name :<span className='input1'><input type='text' /></span></p>
                                                    <p>Enter your name :<span className='input2'><input type='text' /></span></p>
                                                    <p> Enter email :<span className='iconimage1' ><img src={emailIcon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /></span><span className='input3'><input type='text' /></span></p>
                                                    <p>Enter phone number :<span className='iconimage2'><img src={Phone_Icon} style={{ width: 18, height: 18, position: 'relative', top: 5 }} /></span><span className='input4'><input type='text' /></span><span className='btn'><button>Verify</button></span> </p>
                                                    <button className='button11'>Update Details</button>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='card12'>
                                    <div className='frame12'>
                                        {image ? <img src={URL.createObjectURL(image)} onClick={() => { inputRef.current.click(); }} className='image1' /> : <img src={V} onClick={() => { inputRef.current.click(); }} className='image1' />}
                                        <input type='file' ref={inputRef} onChange={changeimage} style={{ display: "none" }} />
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