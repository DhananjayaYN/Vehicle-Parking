import React, { forwardRef } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './CustomDateInput.css'; 

const CustomeDateInput = forwardRef(({ value, onClick }, ref) => (
    
  <button className="custom-date-input" onClick={onClick} ref={ref}>
    <span>{value || 'Select Date'}</span>
    <FaCalendarAlt className="calendar-icon" />
  </button>
));

export default CustomeDateInput;
