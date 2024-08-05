import React, { useState, useEffect , useRef, useContext} from 'react';

// import Select from 'react-select';
import { ReactSVG } from 'react-svg'; 
import './SelectParkingSlot.css';
import './RightSideButtons';
// import { useParkingContext } from '../../../hooks/useParkingContext';
import ParkingContext from '../../../context/ParkingContext';
// import CustomSelect from './CustomSelect'; 
import { ReactComponent as CarIcon } from '../Images/Cutomer/VehicleCategories/Car.svg';
import { ReactComponent as ArrowDownIcon } from '../../../Images/Cutomer/FilterBar/arrow_down.svg'
import { ReactComponent as BikeIcon } from '../Images/Cutomer/VehicleCategories/Bike.svg'
import { ReactComponent as ThreeWheelIcon } from '../Images/Cutomer/VehicleCategories/Bus.svg'
import cartIcon from '../../../Images/Cutomer/selectParking/cart.svg'
import RightSideButtons from './RightSideButtons';
import ParkingGrid from './ParkingGrid';
import CarImage from '../Images/Cutomer/VehicleCategories/Car.svg';
import BikeImage from '../Images/Cutomer/VehicleCategories/Bike.svg';
import BusImage from '../Images/Cutomer/VehicleCategories/Bus.svg'; 


// export default function SelectParkingSlot({ selectedCategory }) {
  export default function SelectParkingSlot() {

  const { selectedCategory, setSelectedCategory } = useContext(ParkingContext);
  const [parkings, setParkings] = useState(null)

  // useEffect(() => {
  //   const fetchParkings = async () => {
  //     const response = await fetch('/api/parking-slots')
  //     const json = await response.json()

  //     if(response.ok){
  //       setParkings(json)
  //     }
  //   }

  //   fetchParkings()
  // }, [])

  useEffect(() => {
    const fetchParkingsByCategory = async () => {
      const response = await fetch(`/api/parking-slots/?vehicle_type=${selectedCategory}`)
      const json = await response.json()

      if(response.ok){
        setParkings(json)
      }
    }

    fetchParkingsByCategory()
  }, [selectedCategory])

  // const [vehicleType, setVehicleType] = useState(selectedCategory);

  // useEffect(() => {
  //   setVehicleType(selectedCategory);
  // }, [selectedCategory]);

  // const handleVehicleTypeChange = (type) => {
  //   setVehicleType(type);
  // };

  const handleVehicleTypeChange = (type) => {
    setSelectedCategory(type);
  };

  const vehicleIcons = {
    Car: <CarIcon />,
    Bike: <BikeIcon />,
    ThreeWheel: <ThreeWheelIcon />
  };

  // const filteredParkings = parkings ? parkings.filter(parking => parking.vehicle_type === selectedCategory) : [];

  // const handleVehicleTypeChange = (event) => {
  //   setVehicleType(event.target.value);
  // };

  return (
    <div className="parkingSlotContainer">
      <div className="filter-bar">
        {console.log(parkings)}
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
        {parkings ? 
          <ParkingGrid parkings={parkings} /> : 
          <p>Loading...</p>
        }
      </div>
      <div className="checkout-wrapper">
      <div className="checkout-section">
        <button className='cart-button'>
          <ReactSVG src={cartIcon} className="cart-icon" />
          Cart
        </button>
        <button className='continue-button'>Continue</button>
      </div>
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
      <DropdownItem icon={<CarIcon />} text="Car" className="dropdown-item">
        Car
      </DropdownItem>
      <DropdownItem icon={<ReactSVG src={BikeImage} />} text="Bike" className = "dropdown-item">
        Bike
      </DropdownItem>
      <DropdownItem icon={<ReactSVG src={BusImage} />} text="ThreeWheel" className = "dropdown-item">
        Three <br /> Wheel
      </DropdownItem>
    </div>
  );
}