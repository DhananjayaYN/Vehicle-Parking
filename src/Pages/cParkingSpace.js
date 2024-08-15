import React from 'react';
import './UserCSS.css';
import './OwnerCSS.css';
import logo from '../Images/inner logo.svg';

export default function cParkingSpace(){
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
                                            <div className='frame21_body_01'>
                                                <p>Enter Address : <span className='input5'><input type='text' /></span></p>
                                                <p>Add Vehicle Types <span className='vehicle_type'><span><select onChange={(e) => { setselectvalue(e.target.value) }}><option></option><option value="Car"  >Car </option><option value="Bike">Bike</option><option value="Three wheel">Three wheel</option></select></span> {(selectvalue == "Car") && <span className='iconimage3' ><img src={Car_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /> <input type='checkbox' onClick={chngecarvalue} /></span>} {(selectvalue == "Bike") && <span className='iconimage4' ><img src={Bike_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><input type='checkbox' onClick={chngebikevalue} /></span>}{(selectvalue == "Three wheel") && <span className='iconimage5' ><img src={Three_wheel_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><input type='checkbox' onClick={chngethreewheelvalue} /></span>}<span className='showCar'>{(showCar) && <span className='iconimage3' ><img src={Car_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><span className='iconimage3' ><img src={bin_Icon} onClick={chngecarvalue2} style={{ width: 16, height: 16, position: 'relative', top: 5 }} /></span></span>}</span><span className='showBike'>{(showBike) && <span className='iconimage3' ><img src={Bike_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><span className='iconimage3' ><img src={bin_Icon} onClick={chngebikevalue2} style={{ width: 16, height: 16, position: 'relative', top: 5 }} /></span></span>}</span><span className='showThreeWheel'>{(showThreeWheel) && <span className='iconimage3' ><img src={Three_wheel_Icon} style={{ width: 20, height: 20, position: 'relative', top: 5 }} /><span className='iconimage3' ><img src={bin_Icon} onClick={chngethreewheelvalue2} style={{ width: 16, height: 16, position: 'relative', top: 5 }} /></span></span>}</span></span></p>
                                                <p>Charging Fee (Slot per hour) :<span className='Slotperhour'>{(showCar) && <span className='input6'><input type='text' /></span>}{(showBike) && <span className='input7'><input type='text' /></span>}{(showThreeWheel) && <span className='input8'><input type='text' /></span>}</span></p>
                                                <p>Company Bank Details :</p>
                                                <div>
                                                    <ul style={{ listStyleType: 'none' }}>
                                                        <li><p>Bank  <span className='bank'><select onChange={(e) => { setbank(e.target.value) }}><option></option><option value="Bank of Ceylon">Bank of Ceylon</option><option value="Commercial Bank">Commercial Bank</option><option value="Hatton National Bank">Hatton National Bank</option><option value="People's Bank">People's Bank</option><option value="Sampath Bank">Sampath Bank</option><option value="National Development Bank">National Development Bank</option><option value="Union Bank">Union Bank</option><option value="DFCC Bank">DFCC Bank</option><option value="Cargills Bank">Cargills Bank</option></select></span></p></li>
                                                        <li><p>Branch <span className='branch'><select onChange={(e) => { setbranch(e.target.value) }}><option></option><option value="Bank of Ceylon - Colombo Fort">Bank of Ceylon - Colombo Fort</option><option value="Bank of Ceylon - Kandy">Bank of Ceylon - Kandy</option><option value="Bank of Ceylon - Galle">Bank of Ceylon - Galle</option><option value="Commercial Bank - Colombo Main">Commercial Bank - Colombo Main</option><option value="Commercial Bank - Nugegoda">Commercial Bank - Nugegoda</option><option value="Commercial Bank - Jaffna">Commercial Bank - Jaffna</option><option value="Hatton National Bank - Head Office">Hatton National Bank - Head Office</option><option value="Hatton National Bank - Mount Lavinia">Hatton National Bank - Mount Lavinia</option><option value="Hatton National Bank - Kandy">Hatton National Bank - Kandy</option><option value="People's Bank - Colombo Fort">People's Bank - Colombo Fort</option><option value="People's Bank - Rajagiriya">People's Bank - Rajagiriya</option><option value="People's Bank - Matara">People's Bank - Matara</option><option value="Sampath Bank - Colombo 3">Sampath Bank - Colombo 3</option><option value="Sampath Bank - Battaramulla">Sampath Bank - Battaramulla</option><option value="Sampath Bank - Anuradhapura">Sampath Bank - Anuradhapura</option><option value="National Development Bank - Colombo">National Development Bank - Colombo</option><option value="National Development Bank - Negombo">National Development Bank - Negombo</option><option value="National Development Bank - Gampaha">National Development Bank - Gampaha</option><option value="Union Bank - Colombo">Union Bank - Colombo</option><option value="Union Bank - Kandy">Union Bank - Kandy</option><option value="Union Bank - Jaffna">Union Bank - Jaffna</option><option value="DFCC Bank - Colombo">DFCC Bank - Colombo</option><option value="DFCC Bank - Galle">DFCC Bank - Galle</option><option value="DFCC Bank - Kandy">DFCC Bank - Kandy</option><option value="Cargills Bank - Colombo">Cargills Bank - Colombo</option><option value="Cargills Bank - Kandy">Cargills Bank - Kandy</option><option value="Cargills Bank - Jaffna">Cargills Bank - Jaffna</option>
                                                        </select></span></p></li>
                                                        <li><p>Name<span className='input9'><input type='text' /></span></p></li>
                                                        <li><p>Account Number<span className='input10'><input type='text' /></span></p></li>
                                                    </ul>
                                                </div>
                                                <p><span className='Updatebtn'><button>Update Details</button></span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <p><span className='CreateMyParkingSpacebtn'><button>Create My Parking Space</button></span></p>
                                    <br />
                                </div>
                                <div className='card22'>
                                    <div className='frame22'>
                                        <div className='frame22_body' style={{ alignSelf: 'center', }}>
                                            <span style={{ fontSize: 30, fontWeight: 'bolder' }}>One Galle Face</span><br /><br />
                                            <span style={{ fontSize: 20, fontWeight: 'bolder' }}>Parking  History</span><br /><br />
                                            <span>Date:</span><span className='Intext'>In:</span><br />
                                            <p><span className='input11'><input type='text' /></span><span className='input12'><input type='text' /></span></p>
                                            <button>View</button><br /><br />
                                            <span style={{ fontSize: 20, fontWeight: 'bolder' }}>Earnings</span> <br /><br />
                                            <span>Date:</span><span className='Intext'>In:</span><br />
                                            <p><span className='input13'><input type='text' /></span><span className='input14'><input type='text' /></span></p>
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
            <Footer className="footer" />
        </div>
    )
}
