import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import './SelectVehicleCss.css';
import CarImage from '../Images/Cutomer/VehicleCategories/Car.svg';
import BikeImage from '../Images/Cutomer/VehicleCategories/Bike.svg';
import BusImage from '../Images/Cutomer/VehicleCategories/Bus.svg'; 
// import ParkingContext from '../../../context/ParkingContext';
import { ParkingContext } from '../../../context/PakingContext';



// export default function SelectVehicle({ onCategorySelect }) {
export default function SelectVehicle() {

    const { setSelectedCategory } = useContext(ParkingContext);

    return (
        <div className='SelectVehicleBox'>
            <div className='TopicBox'>
                <p className='TopicText'>
                    Select Your Vehicle Type
                </p>
            </div>
            <div className='CategoryBox'>
                <ul className='CategoryList'>
                    <li className='Car' onClick={() => setSelectedCategory('Car')}>
                        <div className='CategoryContainer'>
                            <ReactSVG src={CarImage} className="CategoryImage" />
                            <a href="#">Car</a>
                        </div>
                    </li>
                    <li className='Bike' onClick={() => setSelectedCategory('Bike')}>
                        <div className='CategoryContainer'>
                            <ReactSVG src={BikeImage} className="CategoryImage" />
                            <a href="#">Bike</a>
                        </div>
                    </li>
                    <li className='ThreeWheel' onClick={() => setSelectedCategory('ThreeWheel')}>
                        <div className='CategoryContainer'>
                            <ReactSVG src={BusImage} className="CategoryImage" />
                            <a href="#">Three Wheel</a>
                        </div>
                    </li>
                </ul>
            </div>
            {/* <div className='CategoryBox'>
                <ul className='CategoryList'>
                    <li className='Car' onClick={() => onCategorySelect('Car')}>
                        <div className='CategoryContainer'>
                            <ReactSVG src={CarImage} className="CategoryImage" />
                            <a href="#">Car</a>
                        </div>
                    </li>
                    <li className='Bike' onClick={() => onCategorySelect('Bike')}>
                        <div className='CategoryContainer'>
                            <ReactSVG src={BikeImage} className="CategoryImage" />
                            <a href="#">Bike</a>
                        </div>
                    </li>
                    <li className='ThreeWheel' onClick={() => onCategorySelect('ThreeWheel')}>
                        <div className='CategoryContainer'>
                            <ReactSVG src={BusImage} className="CategoryImage" />
                            <a href="#">Three Wheel</a>
                        </div>
                    </li>
                </ul>
            </div> */}
        </div>
    );
}
