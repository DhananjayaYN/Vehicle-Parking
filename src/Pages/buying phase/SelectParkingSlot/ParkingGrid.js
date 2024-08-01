import React from 'react';
import './ParkingGrid.css';

const parkingSlots = [
  'A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11',
  'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08', 'B09', 'B10', 'B11',
  'C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10', 'C11',
  'D01', 'D02', 'D03', 'D04', 'D05', 'D06', 'D07', 'D08', 'D09', 'D10', 'D11', 'E01'
];

const groupParkingSlots = (slots) => {
  return slots.reduce((acc, slot) => {
    const letter = slot[0];
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

const groupedSlots = groupParkingSlots(parkingSlots);
const groupedSlotPairs = Object.keys(groupedSlots).reduce((acc, letter) => {
  acc[letter] = createSlotPairs(groupedSlots[letter]);
  return acc;
}, {});

const ParkingGrid = () => {
  return (
    <div className="parking-container">
      {Object.keys(groupedSlotPairs).map((letter) => (
        <div className="parking-section" key={letter}>
          <h2>Section {letter}</h2>
          <div className="slots-grid">
            {groupedSlotPairs[letter].map((pair, index) => (
              <div className="slot-pair" key={index}>
                {pair.map((slot) => (
                  <div className="parking-slot" key={slot}>
                    {slot}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParkingGrid;
