import React from "react";
import "./Packages.css"
import Package from "../Images/Package.svg"
const Packages = (props) => {
    return (
        <div className="P_Container">
            <div className="P_card1"></div>
            <div className="P_card2"><span className="P_name">{props.name}</span></div>
            <div className="P_card3"><img src={Package} style={{ width: 200, height: 200 }} /></div>
        </div>
    );
}
export default Packages;