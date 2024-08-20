import React from 'react'
import './footer.css';
import Youtube from '../img/Youtube.svg'
import X from '../img/X.svg'
import Facebook from '../img/Facebook.svg'
import Instergram from '../img/Instergram.svg'

export default function Footer() {
  return (
    <div className='footer'>
        <ul className='list'>
            <li className='highlight'>Hotline : 034 222 22 22</li>
            <li>
                <ul className='icon'>
                    <li>
                        <a href='#'><img src={Youtube} alt='img'/></a>
                    </li>
                    <li>
                        <a href='#'><img src={X} alt='img'/></a>
                    </li>
                    <li>
                        <a href='#'><img src={Facebook} alt='img'/></a>
                    </li>
                    <li>
                        <a href='#'><img src={Instergram} alt='img'/></a>
                    </li>
                </ul>
            </li>
            <li>
                <ul className='tags'>
                    <li>
                        <a href='#'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href='#'>Manage Cookies</a>
                    </li>
                    <li>
                        <a href='#'>Rules & Condition</a>
                    </li>
                </ul>
            </li>
            <li className='highlight'>Copyright © 2024 MrPark</li>
        </ul>
    </div>
  )
}
