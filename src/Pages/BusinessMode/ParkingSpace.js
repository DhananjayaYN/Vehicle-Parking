import React from 'react';
import './Parking.css';

function ParkingSpace() {
  return (
    <div className="parking-container">
      <div className="sidebar">
        <div className="logo">
          <img src="../../images/inner logo.svg" alt="Mr. Park Logo" />
        </div>
        <input
          type="text"
          className="search-location"
          placeholder="Search location parking / Place"
        />
        <div className="add-slots">
          <h3>Add More Slots Here</h3>
          <input type="text" placeholder="Section Name" className="section-name" />
          <div className="slot-range">
            <label>Slot Range</label>
            <input type="range" min="1" max="100" defaultValue="50" />
            <span className="range-value">50</span>
          </div>
          <button className="add-slots-button">Add Slots</button>
        </div>
      </div>

      <div className="main-content">
        <div className="navbar">
          <div className="reservation-type">
            <select>
              <option>CAR</option>
              <option>BIKE</option>
              <option>TRUCK</option>
            </select>
            <select>
              <option>Multiple Days</option>
              <option>Single Day</option>
            </select>
          </div>
          <div className="date-time">
            <input type="date" />
            <input type="time" />
            <input type="time" />
          </div>
        </div>

        <div className="parking-slots">
          <div className="slot">
            <div className="slot-id">A 01</div>
            <div className="car-icon">🚗</div>
          </div>
          {/* Add more slots here dynamically */}
        </div>

        <div className="tooltip">
          <h3>Block No: B 07</h3>
          <p>Vehicle Type: Car</p>
          <p>Floor: N/A</p>
          <p>Time Slots</p>
          <ul>
            <li className="booked">8.00 - 10.00 Booked</li>
            <li className="available">10.00 - 12.00 Available</li>
            <li className="available">12.00 - 2.00 Available</li>
            <li className="booked">2.00 - 4.00 Booked</li>
          </ul>
          <button className="emergency-button">Emergency Repair</button>
        </div>
      </div>

      <div className="footer">
        <div className="hotline">
          Hotline: 034 222 22 22
        </div>
        <div className="social-icons">
          {/* Add social icons here */}
        </div>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Manage Cookies</a>
          <a href="#">Rules & Conditions</a>
        </div>
        <div className="copyright">
          &copy; 2024 MrPark
        </div>
      </div>
    </div>
  );
}

export default ParkingSpace;
