import React, { useState, useEffect, useRef } from 'react';
import './ParkingGrid.css';

const groupParkingSlots = (slots) => {
  return slots.reduce((acc, slot) => {
    const letter = slot.level;

    if (!acc[letter]) {
      acc[letter] = [];
    }
    acc[letter].push(slot);
    return acc;
  }, {});
};

const createSlotPairs = (slots) => {
  const pairs = [];
  for (let i = 0; i < slots.length; i += 2) {
    pairs.push(slots.slice(i, i + 2));
  }
  return pairs;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};


const ParkingGrid = ({ parkings, onAddToCart }) => {
  
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });
  const dialogRef = useRef(null);
  const gridRef = useRef(null);

  const handleSlotClick = (slot, event) => {
    setSelectedSlot(slot);

    // Calculate the position of the dialog box relative to the grid container
    const slotRect = event.target.getBoundingClientRect();
    const gridRect = gridRef.current.getBoundingClientRect();
    const dialogTop = slotRect.top - gridRect.top + gridRef.current.scrollTop;
    const dialogLeft = slotRect.right - gridRect.left + gridRef.current.scrollLeft + 10;

    setDialogPosition({ top: dialogTop, left: dialogLeft });
  };

  const handleAddToCartClick = () => {
    onAddToCart(selectedSlot);
    setSelectedSlot(null);
  };

  const handleCancelButtonClick = () => {
    setSelectedSlot(null);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        setSelectedSlot(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const groupedSlots = groupParkingSlots(parkings);
  const groupedSlotPairs = Object.keys(groupedSlots).reduce((acc, letter) => {
    acc[letter] = createSlotPairs(groupedSlots[letter]);
    return acc;
  }, {});

  // Sort the sections in ascending order
  const sortedSections = Object.keys(groupedSlotPairs).sort();

  return (
    <div className="parking-wrapper" ref={gridRef}>
      <div className="parking-container">
        {sortedSections.map((letter) => (
          <div className="parking-section" key={letter}>
            <h2><center>{letter}</center></h2>
            <div className="slots-grid">
              {groupedSlotPairs[letter].map((pair, index) => (
                <div className="slot-pair" key={index}>
                  {pair.map((slot) => (
                    <div className="parking-slot" key={slot._id} onClick={(event) => handleSlotClick(slot, event)}>
                      {slot.lot_number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedSlot && (
        <div className="slot-details" ref={dialogRef} style={{ top: dialogPosition.top, left: dialogPosition.left }}>
          {/* <p>Name: {selectedSlot.name}</p> */}
          {/* <p>Level: {selectedSlot.level}</p> */}
          <p>Lot Number: {selectedSlot.lot_number}</p>
          <p>Vehicle Type: {capitalizeFirstLetter(selectedSlot.vehicle_type)}</p>
          {/* <p>Level: {selectedSlot.level ? selectedSlot.level : "N/A"}</p> */}
          {/* <p>Start Time: {selectedSlot.start_time || "n/a"}</p> */}
          {/* <p>End Time: {selectedSlot.end_time}</p> */}
          <p>Availability: {selectedSlot.availability ? 'Available' : 'Not Available'}</p>
          <div className="buttons">
          <button onClick={handleCancelButtonClick}>Cancel</button>
          <button onClick={handleAddToCartClick}>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParkingGrid;
