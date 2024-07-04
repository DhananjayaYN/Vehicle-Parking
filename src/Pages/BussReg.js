import React from 'react'
import "./BussReg.css"
import Footer from '../Components/Footer';
import logo from '../Images/inner logo.svg'
import watermark from '../Images/hidden logo.svg'
import NaviBar from '../Components/NaviBar';

const BussReg = () => {
    return (
        <div className='Home'>
            <div className='main_box'>
                <div className='sidebar_box'>
                    <div className='logo_body'>
                        <img src={logo} alt='Logo' className='logo' />
                    </div>
                </div>
                <div className='rightside_box'>
                    <NaviBar />
                    <div className='container'>
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