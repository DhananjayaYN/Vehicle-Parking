import React, { forwardRef } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import './CustomDateInput.css'; 

const CustomInTimeInput = forwardRef(({ value, onClick }, ref) => (
    
  <button className="custom-date-input" onClick={onClick} ref={ref}>
    <span>{value || 'Select In-Time'}</span>
    <FaClock className="calendar-icon" />
  </button>
));

export default CustomInTimeInput;