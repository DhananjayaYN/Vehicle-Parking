import React from 'react'
import './FooterCSS.css';
import Youtube from '../Images/Youtube.svg'
import X from '../Images/X.svg'
import Facebook from '../Images/Facebook.svg'
import Instergram from '../Images/Instergram.svg'

export default function Footer() {
  return (
    <div class='footer'>
        <ul class='list'>
            <li class='highlight'>Hotline : 034 222 22 22</li>
            <li>
                <ul class='icon'>
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
                <ul class='tags'>
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
            <li class='highlight'>Copyright © 2024 MrPark</li>
        </ul>
    </div>
  )
}
