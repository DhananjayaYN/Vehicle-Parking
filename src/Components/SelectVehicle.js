import React from "react";
import './SelectVehicleCss.css';

export default function SelectVehicle() {
    return(
        <div class = 'SelectVehicleBox'>
            <div class = 'TopicBox'>
                <p class = 'TopicText'>
                    Select Your Vehicle Type
                </p>
            </div>
            <div class = 'CategoriesBox'>
                <ul class = 'CategoryList'>
                    <li class = 'Car'><a href="">Car</a></li>
                    <li class = 'Bike'><a href="">Bike</a></li>
                    <li class = 'ThreeWheel'><a href="">Three Wheel</a></li>
                </ul>
            </div>
        </div>
    )
}
