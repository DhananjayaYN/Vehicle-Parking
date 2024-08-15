import React from 'react';
import Select from 'react-select';
import { ReactSVG } from 'react-svg';
// import './CustomS elect.css';
import CarImage from '../Images/Cutomer/VehicleCategories/car_small.svg';
import BikeImage from '../Images/Cutomer/VehicleCategories/car_small.svg';
import BusImage from '../Images/Cutomer/VehicleCategories/car_small.svg';

const options = [
  {
    value: 'Car',
    label: (
      <div className="category">
        <ReactSVG src={CarImage} className="dropDownImage" />
        <span className="categoryTitle">Car</span>
      </div>
    ),
  },
  {
    value: 'Bike',
    label: (
      <div className="category">
        <ReactSVG src={BikeImage} className="dropDownImage" />
        <span className="categoryTitle">Bike</span>
      </div>
    ),
  },
  {
    value: 'ThreeWheel',
    label: (
      <div className="category">
        <ReactSVG src={BusImage} className="dropDownImage" />
        <span className="categoryTitle">Three Wheel</span>
      </div>
    ),
  },
];

const CustomSelect = ({ vehicleType, handleVehicleTypeChange }) => {
  const handleChange = (selectedOption) => {
    handleVehicleTypeChange(selectedOption.value);
  };

  return (
    <Select
      value={options.find(option => option.value === vehicleType)}
      onChange={handleChange}
      options={options}
      classNamePrefix="react-select"
      id="categorySelect"
    />
  );
};

export default CustomSelect;
