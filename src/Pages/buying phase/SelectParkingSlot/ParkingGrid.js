import React from 'react';
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

const ParkingGrid = ({ parkings }) => {
  const groupedSlots = groupParkingSlots(parkings);
  const groupedSlotPairs = Object.keys(groupedSlots).reduce((acc, letter) => {
    acc[letter] = createSlotPairs(groupedSlots[letter]);
    return acc;
  }, {});

  // Sort the sections in ascending order
  const sortedSections = Object.keys(groupedSlotPairs).sort();

  return (
    <div className="parking-wrapper">
      <div className="parking-container">
        {sortedSections.map((letter) => (
          <div className="parking-section" key={letter}>
            <h2>Section {letter}</h2>
            <div className="slots-grid">
              {groupedSlotPairs[letter].map((pair, index) => (
                <div className="slot-pair" key={index}>
                  {pair.map((slot) => (
                    <div className="parking-slot" key={slot._id}>
                      {slot.lot_number}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingGrid;
