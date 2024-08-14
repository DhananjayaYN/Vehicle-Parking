import React, { useState } from "react";
import "./NewNaviBar.css";
import HeaderNaviBarDropdown from "./HeaderNaviBarDropdown";
const NewNaviBar = () => {
    const [hide, sethide] = useState(false);
    return (
        <div className="box">
            <div className="tabBox">
                <div className="tab" onClick={() => { sethide(!hide) }}>Hi Nimnatha</div>
            </div>
            <div className="tabBox">
                <div className="tab">Parking Place</div>
            </div>
            <div className="tabBox">
                <div className="tab">About Us</div>
            </div>
            <div className="tabBox">
                <div className="tab">My Plans</div>
            </div>
            <div className="tabBox">
                <div className="tab">Home</div>
            </div>
            {hide && <span className="show"><HeaderNaviBarDropdown /></span>}
        </div>

    );
}
export default NewNaviBar;