import React, { useState, useEffect , useRef} from 'react';

// import Select from 'react-select';
import { ReactSVG } from 'react-svg'; 
import './SelectParkingSlot.css';
import './RightSideButtons';
// import CustomSelect from './CustomSelect'; 
import { ReactComponent as CarIcon } from '../Images/Cutomer/VehicleCategories/Car.svg';
import { ReactComponent as ArrowDownIcon } from '../../../Images/Cutomer/FilterBar/arrow_down.svg'
import { ReactComponent as BikeIcon } from '../Images/Cutomer/VehicleCategories/Bike.svg'
import { ReactComponent as ThreeWheelIcon } from '../Images/Cutomer/VehicleCategories/Bus.svg'
import RightSideButtons from './RightSideButtons';
import ParkingGrid from './ParkingGrid';
import CarImage from '../Images/Cutomer/VehicleCategories/Car.svg';
import BikeImage from '../Images/Cutomer/VehicleCategories/Bike.svg';
import BusImage from '../Images/Cutomer/VehicleCategories/Bus.svg'; 


// const slots = [
//   'A01', 'A02', 'A03', 'A04', 'A05',
//   'B01', 'B02', 'B03', 'B04', 'B05'
//   // Add more slots as needed
// ];

export default function SelectParkingSlot({ selectedCategory }) {

  const [vehicleType, setVehicleType] = useState(selectedCategory);

  useEffect(() => {
    setVehicleType(selectedCategory);
  }, [selectedCategory]);

  const handleVehicleTypeChange = (type) => {
    setVehicleType(type);
  };

  const vehicleIcons = {
    Car: <CarIcon />,
    Bike: <BikeIcon />,
    ThreeWheel: <ThreeWheelIcon />
  };

  // const handleVehicleTypeChange = (event) => {
  //   setVehicleType(event.target.value);
  // };

  return (
    <div className="parkingSlotContainer">
      <div className="filter-bar">
        <div className='leftside'>
          <Navbar>
            <NavItem 
              initialIcon={vehicleIcons[selectedCategory]} 
              initialText={selectedCategory}
              onVehicleTypeChange={handleVehicleTypeChange}
            >
              <DropdownMenu onSelect={handleVehicleTypeChange} />
            </NavItem>
          </Navbar>
        </div>
        <div className="rightside">
          <RightSideButtons/>
        </div>
      </div>
      <div className="parking-grid">
        <ParkingGrid></ParkingGrid>
      </div>
      {/* <div className="slotsGrid">
        {slots.map((slot) => (
          <div key={slot} className="parkingSlot">
            <div className="slotImage">
              <img src="/path-to-car-image.svg" alt="car" />
            </div>
            <div className="slotNumber">{slot}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}


function NavItem({ initialIcon, initialText, children, onVehicleTypeChange }) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ icon: initialIcon, text: initialText });
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const handleSelect = (icon, text) => {
    setSelectedItem({ icon, text });
    onVehicleTypeChange(text);
    setOpen(false);
  };

  return (
    <li className="nav-item" ref={ref}>
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        <span>{selectedItem.icon}</span>
        {selectedItem.text}
        <span>
          <ArrowDownIcon id="arrow-down" />
        </span>
      </a>

      {open && React.cloneElement(children, { onSelect: handleSelect })}
    </li>
  );
}


function DropdownMenu({ onSelect }) {
  function DropdownItem({ icon, text, children }) {
    return (
      <a href="#" className="menu-item" onClick={() => onSelect(icon, text)}>
        <span className="icon-button">{icon}</span>
        {children}
      </a>
    );
  }

  return (
    <div className="dropdown">
      <DropdownItem icon={<CarIcon />} text="Car">
        Car
      </DropdownItem>
      <DropdownItem icon={<ReactSVG src={BikeImage} />} text="Bike">
        Bike
      </DropdownItem>
      <DropdownItem icon={<ReactSVG src={BusImage} />} text="ThreeWheel">
        Three <br /> Wheel
      </DropdownItem>
    </div>
  );
}