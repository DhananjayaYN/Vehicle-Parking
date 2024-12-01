import React, { useState, useEffect , useRef, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


// import Select from 'react-select';
import { ReactSVG } from 'react-svg'; 
import Cart from './Cart/Cart';
import Checkout from '../Checkout/Checkout'
import './SelectParkingSlot.css';
import './RightSideButtons';
// import { useParkingContext } from '../../../hooks/useParkingContext';
// import ParkingContext from '../../../context/ParkingContext';
// import {ParkingContext} from '../../../context/ParkingContext';
// import { ParkingContextProvider } from '../../../context/ParkingContext';
import ParkingContext from '../../../context/PakingContext';

import ErrorMessage from '../../../Components/ErrorMessage';
import Swal from 'sweetalert2';

// import CustomSelect from './CustomSelect'; 
import { ReactComponent as CarIcon } from '../Images/Cutomer/VehicleCategories/Car.svg';
import { ReactComponent as ArrowDownIcon } from '../../../Images/Cutomer/FilterBar/arrow_down.svg'
import { ReactComponent as BikeIcon } from '../Images/Cutomer/VehicleCategories/Bike.svg'
import { ReactComponent as ThreeWheelIcon } from '../Images/Cutomer/VehicleCategories/Bus.svg'
import cartIcon from '../../../Images/Cutomer/selectParking/cart.svg'
import RightSideButtons from './RightSideButtons';
import ParkingGrid from './ParkingGrid';
import CarTopViewImage from '../../../Images/Cutomer/selectParking/carTopView.svg';
import CarImage from '../Images/Cutomer/VehicleCategories/Car.svg';
import BikeImage from '../Images/Cutomer/VehicleCategories/Bike.svg';
import BusImage from '../Images/Cutomer/VehicleCategories/Bus.svg'; 
// import { se } from 'date-fns/locale';
// import { set } from 'date-fns';


// export default function SelectParkingSlot({ selectedCategory }) {
  export default function SelectParkingSlot() {

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate ] = useState(null);
  const [inTime, setInTime ] = useState(null);
  const [outTime, setOutTime ] = useState(null);
  const [reservationType, setReservationType] = useState('single');
  const [cartItems, setCartItems] = useState([]);

  const [ selectedParking, setSelectedParking ] = useState('Havelock');
  const { selectedCategory, setSelectedCategory } = useContext(ParkingContext);
  const [parkings, setParkings] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (slot) => {
    if(!selectedDate || !inTime || !outTime){
      Swal.fire({
        title: "Error",
        text: "Please select a date, in-time, and out-time before adding to cart.",
        icon: "error",
        confirmButtonText: "OK"
    });
      // alert("Please select a date, in-time, and out-time before adding to cart.");
      return;
    }

    if(inTime >= outTime){
      Swal.fire({
        title: "Error",
        text: "Out-time should be greater than in-time.",
        icon: "error",
        confirmButtonText: "OK"
    });
      // alert("Out-time should be greater than in-time.");
      return;
    }

    if(selectedDate <= new Date() && inTime <= new Date()){
      Swal.fire({
        title: "Error",
        text: "In-time should be greater than current time.",
        icon: "error",
        confirmButtonText: "OK"
    });
      // alert("In-time should be greater than current time.");
      return;
    }

    if (reservationType === "single" && cartItems.length > 0) {
      Swal.fire({
        title: "Error",
        text: "You can only add one booking to the cart for single reservations.Switch to multiple reservations to add more than one booking.",
        icon: "error",
        confirmButtonText: "OK"
    });
      // alert("You can only add one slot to the cart for single reservations.");
      return;
    }

    const isDuplicate = cartItems.some(
      (item) =>
        item.slot._id === slot._id &&
        item.selectedDate === selectedDate &&
        item.inTime === inTime &&
        item.outTime === outTime
    );

    if (isDuplicate) {
      Swal.fire({
        title: "Error",
        text: "This slot is already in your cart for the selected time period.",
        icon: "error",
        confirmButtonText: "OK"
    });
      // alert("This slot is already in your cart for the selected time period.");
      return;
    }

    const newItem = {
      slot,
      selectedDate,
      inTime,
      outTime,
    }

    setCartItems([...cartItems, newItem]);

    Swal.fire({
      title: "Success",
      text: "Slot added to cart successfully.",
      icon: "success",
      confirmButtonText: "OK"
  });
  }

  const handleRemoveFromCart = (index) => {
    const updateCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updateCartItems);
  }

  const handleClearCart = () => {
    setCartItems([]);
  };
  
  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        title: "Error",
        text: "Your cart is empty. Please add at least one slot to proceed.",
        icon: "error",
        confirmButtonText: "OK"
      });
      return;
    }
    const selectedDates = cartItems.map(item => item.selectedDate);
    const parkingTimes = cartItems.map(item => `${item.inTime} - ${item.outTime}`);
    const parkingSlots = cartItems.map(item => item.slot.name);

    navigate('/customer/checkout', {
      state: {
        reservationType,
        selectedDates,
        parkingTimes,
        parkingSlots
      }
    });
  };

  
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
      
      const response = await fetch(`/api/slots/search/name?name=${selectedParking}&vehicle_type=${selectedCategory}`)

      // const response = await fetch(`/api/parking-slots/?vehicle_type=${selectedCategory}`)
      const json = await response.json()

      if(response.ok){
        setParkings(json)
      }
    }

    fetchParkingsByCategory()
  }, [selectedCategory, selectedParking])

  useEffect(() => {
    
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

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
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
          <RightSideButtons
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            inTime={inTime}
            setInTime={setInTime}
            outTime={outTime}
            setOutTime={setOutTime}
            reservationType={reservationType}
            setReservationType={setReservationType}
            orderCount={cartItems.length}
          />
        </div>
      </div>
      <div className="parking-grid">
        {parkings ? 
          <ParkingGrid
            parkings={parkings} 
            onAddToCart={handleAddToCart}
          /> : 
          <p>Loading...</p>
        }
      </div>
      <div className="checkout-wrapper">
      <div className="checkout-section">
        <button className='cart-button' onClick={handleCartClick}>
          <ReactSVG src={cartIcon} className="cart-icon" />
          Cart
        </button>
        <button className='continue-button' onClick={handleProceedToCheckout}>Continue</button>
      </div>
      </div>
      
      {isCartOpen && 
            <Cart 
                onClose={handleCloseCart} 
                cartItems={cartItems}
                onRemove={handleRemoveFromCart}
                onClear={handleClearCart}
                // onAddToCart={handleAddToCart}
            />}
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