import React, { useState, useRef } from 'react';
import "./BussReg.css";
import Footer from '../Components/Footer';
import logo from '../Images/inner logo.svg';
import watermark from '../Images/hidden logo.svg';
import NewNaviBar from '../Components/NewNaviBar';
import V from '../Images/V.svg';
import emailIcon from '../Images/email_Icon.svg';
import Phone_Icon from '../Images/Phone_Icon.svg';
import Car_Icon from '../Images/Car_Icon.svg';
import Bike_Icon from '../Images/Bike_Icon.svg';
import Three_wheel_Icon from '../Images/Three_wheel_Icon.svg';
import bin_Icon from '../Images/bin_Icon.svg';
import HeaderNaviBarDropdown from '../Components/HeaderNaviBarDropdown';

const BussReg = () => {
    const [searchValue, setSearchValue] = useState();

    //Icons
    const [selectvalue, setselectvalue] = useState();
    const [showCar, setshowCar] = useState(true);
    const chngecarvalue = () => {
        setshowCar(true);
        setselectvalue("");
    }
    const chngecarvalue2 = () => {
        setshowCar(false);
    }

    const [showBike, setshowBike] = useState(true);
    const chngebikevalue = () => {
        setshowBike(true);
        setselectvalue("");
    }
    const chngebikevalue2 = () => {
        setshowBike(false);
    }
    const [showThreeWheel, setshowThreeWheel] = useState(true);
    const chngethreewheelvalue = () => {
        setshowThreeWheel(true);
        setselectvalue("");
    }
    const chngethreewheelvalue2 = () => {
        setshowThreeWheel(false);
    }

    //bank
    const [bank, setbank] = useState();

    //branch
    const [branch, setbranch] = useState();

    //image
    const [image, setImage] = useState();
    const inputRef = useRef(null);
    const changeimage = (e) => {
        setImage(e.target.files[0]);

    }


    return (
        <div className='B_Home'>
            <div className='B_main_box'>
                <div className='B_sidebar_box'>
                    <div className='B_logo_body'>
                        <img src={logo} alt='Logo' className='B_logo' />
                    </div>
                    <div className='B_searchbody'>
                        <input type='text' placeholder='Search location parking / Place' onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                    <div className='B_place_card'>
                        {searchValue}
                    </div>
                    <div className='B_My_Planes_Side'>
                        {searchValue}
                    </div>
                </div>
                <div className='B_rightside_box'>
                    <div className='B_navibar_box'>
                        <NewNaviBar />
                    </div>
                    <div className='B_container'>
                        <div className='B_containerBody'>
                            <div className='B_card1'>
                                <div className='B_card11'>
                                    <div className='B_frame11'>
                                        <div className='B_frame11_body'>
                                            <div className='B_frame11_body_contnts'>
                                                <div className='B_frame11_body_01'>
                                                    <p>Enter company Name :<span className='B_input1'><input type='text' /></span></p>
                                                    <p>Enter your name :<span className='B_input2'><input type='text' /></span></p>
                                                    <p> Enter email :<span className='B_iconimage1' ><img src={emailIcon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /></span><span className='B_input3'><input type='text' /></span></p>
                                                    <p>Enter phone number :<span className='B_iconimage2'><img src={Phone_Icon} style={{ width: 18, height: 18, position: 'relative', top: 5 }} /></span><span className='B_input4'><input type='text' /></span><span className='B_btn'><button>Verify</button></span> </p>
                                                    <button className='B_button11'>Update Details</button>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='B_card12'>
                                    <div className='B_frame12'>

                                        {image ? <img src={URL.createObjectURL(image)} onClick={() => { inputRef.current.click(); }} className='B_image1' /> : <img src={V} onClick={() => { inputRef.current.click(); }} className='B_image1' />}
                                        <input type='file' ref={inputRef} onChange={changeimage} style={{ display: "none" }} />
                                    </div>
                                </div>
                            </div>
                            <div className='B_card2'>
                                <div className='B_card21'>
                                    <br />
                                    <div className='B_frame21'>
                                        <div className='B_frame21_body'>
                                            <div className='B_frame21_body_01'>
                                                <p>Enter Address : <span className='B_input5'><input type='text' /></span></p>
                                                <p>Add Vehicle Types <span className='B_vehicle_type'><span><select onChange={(e) => { setselectvalue(e.target.value) }}><option></option><option value="Car"  >Car </option><option value="Bike">Bike</option><option value="Three wheel">Three wheel</option></select></span> {(selectvalue == "Car") && <span className='B_iconimage3' ><img src={Car_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /> <input type='checkbox' onClick={chngecarvalue} /></span>} {(selectvalue == "Bike") && <span className='B_iconimage4' ><img src={Bike_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><input type='checkbox' onClick={chngebikevalue} /></span>}{(selectvalue == "Three wheel") && <span className='B_iconimage5' ><img src={Three_wheel_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><input type='checkbox' onClick={chngethreewheelvalue} /></span>}<span className='B_B_showCar'>{(showCar) && <span className='B_iconimage3' ><img src={Car_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><span className='B_iconimage3' ><img src={bin_Icon} onClick={chngecarvalue2} style={{ width: 16, height: 16, position: 'relative', top: 5 }} /></span></span>}</span><span className='B_B_B_showBike'>{(showBike) && <span className='B_iconimage3' ><img src={Bike_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><span className='B_iconimage3' ><img src={bin_Icon} onClick={chngebikevalue2} style={{ width: 16, height: 16, position: 'relative', top: 5 }} /></span></span>}</span><span className='B_showThreeWheel'>{(showThreeWheel) && <span className='B_iconimage3' ><img src={Three_wheel_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><span className='B_iconimage3' ><img src={bin_Icon} onClick={chngethreewheelvalue2} style={{ width: 16, height: 16, position: 'relative', top: 5 }} /></span></span>}</span></span></p>
                                                <p>Charging Fee (Slot per hour) :<span className='B_Slotperhour'>{(showCar) && <span className='B_input6'><input type='text' /></span>}{(showBike) && <span className='B_input7'><input type='text' /></span>}{(showThreeWheel) && <span className='B_input8'><input type='text' /></span>}</span></p>
                                                <p>Company Bank Details :</p>
                                                <div>
                                                    <ul style={{ listStyleType: 'none' }}>
                                                        <li><p>Bank  <span className='B_bank'><select onChange={(e) => { setbank(e.target.value) }}><option></option><option value="Bank of Ceylon">Bank of Ceylon</option><option value="Commercial Bank">Commercial Bank</option><option value="Hatton National Bank">Hatton National Bank</option><option value="People's Bank">People's Bank</option><option value="Sampath Bank">Sampath Bank</option><option value="National Development Bank">National Development Bank</option><option value="Union Bank">Union Bank</option><option value="DFCC Bank">DFCC Bank</option><option value="Cargills Bank">Cargills Bank</option></select></span></p></li>
                                                        <li><p>Branch <span className='B_branch'><select onChange={(e) => { setbranch(e.target.value) }}><option></option><option value="Bank of Ceylon - Colombo Fort">Bank of Ceylon - Colombo Fort</option><option value="Bank of Ceylon - Kandy">Bank of Ceylon - Kandy</option><option value="Bank of Ceylon - Galle">Bank of Ceylon - Galle</option><option value="Commercial Bank - Colombo Main">Commercial Bank - Colombo Main</option><option value="Commercial Bank - Nugegoda">Commercial Bank - Nugegoda</option><option value="Commercial Bank - Jaffna">Commercial Bank - Jaffna</option><option value="Hatton National Bank - Head Office">Hatton National Bank - Head Office</option><option value="Hatton National Bank - Mount Lavinia">Hatton National Bank - Mount Lavinia</option><option value="Hatton National Bank - Kandy">Hatton National Bank - Kandy</option><option value="People's Bank - Colombo Fort">People's Bank - Colombo Fort</option><option value="People's Bank - Rajagiriya">People's Bank - Rajagiriya</option><option value="People's Bank - Matara">People's Bank - Matara</option><option value="Sampath Bank - Colombo 3">Sampath Bank - Colombo 3</option><option value="Sampath Bank - Battaramulla">Sampath Bank - Battaramulla</option><option value="Sampath Bank - Anuradhapura">Sampath Bank - Anuradhapura</option><option value="National Development Bank - Colombo">National Development Bank - Colombo</option><option value="National Development Bank - Negombo">National Development Bank - Negombo</option><option value="National Development Bank - Gampaha">National Development Bank - Gampaha</option><option value="Union Bank - Colombo">Union Bank - Colombo</option><option value="Union Bank - Kandy">Union Bank - Kandy</option><option value="Union Bank - Jaffna">Union Bank - Jaffna</option><option value="DFCC Bank - Colombo">DFCC Bank - Colombo</option><option value="DFCC Bank - Galle">DFCC Bank - Galle</option><option value="DFCC Bank - Kandy">DFCC Bank - Kandy</option><option value="Cargills Bank - Colombo">Cargills Bank - Colombo</option><option value="Cargills Bank - Kandy">Cargills Bank - Kandy</option><option value="Cargills Bank - Jaffna">Cargills Bank - Jaffna</option>
                                                        </select></span></p></li>
                                                        <li><p>Name<span className='B_input9'><input type='text' /></span></p></li>
                                                        <li><p>Account Number<span className='B_input10'><input type='text' /></span></p></li>
                                                    </ul>
                                                </div>
                                                <p><span className='B_Updatebtn'><button>Update Details</button></span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p><span className='B_CreateMyParkingSpacebtn'><button>Create My Parking Space</button></span></p>
                                    <br />
                                </div>
                                <div className='B_card22'>
                                    <div className='B_frame22'>
                                        <div className='B_frame22_body' style={{ alignSelf: 'center', }}>
                                            <span style={{ fontSize: 30, fontWeight: 'bolder' }}>One Galle Face</span><br /><br />
                                            <span style={{ fontSize: 20, fontWeight: 'bolder' }}>Parking  History</span><br /><br />
                                            <span>Date:</span><span className='B_Intext'>In:</span><br />
                                            <p><span className='B_input11'><input type='text' /></span><span className='B_input12'><input type='text' /></span></p>
                                            <button>View</button><br /><br />
                                            <span style={{ fontSize: 20, fontWeight: 'bolder' }}>Earnings</span> <br /><br />
                                            <span>Date:</span><span className='B_Intext'>In:</span><br />
                                            <p><span className='B_input13'><input type='text' /></span><span className='B_input14'><input type='text' /></span></p>
                                            <button>View</button><br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='B_rectragle'></div>
                        <img src={watermark} alt='Logo' className='B_water_mark' />
                    </div>
                </div>
            </div>
            <Footer className="B_footer" />
        </div>
    )B_B_B_
}
export default BussReg;