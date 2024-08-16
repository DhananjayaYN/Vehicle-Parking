import React, { useState } from "react";
import "./CompanyDetails.css"
import place_Icon from "../Images/place_Icon.svg"
import location_Icon from "../Images/location_Icon.svg"
import Phone_Icon from "../Images/Phone_Icon.svg"
import email_Icon from "../Images/email_Icon.svg"
const CompanyDetails = (props) => {
    return (
        <div className="container">
            <div className="card1"></div>
            <div className="card2">Company Details</div>
            <div className="card3">
                <div className="company"><div className="text"><img src={place_Icon} style={{ width: 15, height: 15, position: 'relative', top: 5 }} /><span className="text2"><span>{props.company}</span></span></div></div>
                <div className="address"><div className="text"><img src={location_Icon} style={{ width: 15, height: 15, position: 'relative', top: 5 }} /><span className="text2"><span>{props.address}</span></span></div></div>
                <div className="number"><div className="text"><img src={Phone_Icon} style={{ width: 15, height: 15, position: 'relative', top: 5 }} /><span className="text2"><span>{props.number}</span></span></div></div>
                <div className="number"><div className="text"><img src={email_Icon} style={{ width: 15, height: 15, position: 'relative', top: 5 }} /><span className="text2"><span>{props.email}</span></span></div></div>
            </div>
        </div>);
}
export default CompanyDetails;