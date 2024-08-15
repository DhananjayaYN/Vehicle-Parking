import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import Clock from 'react-clock';
import CustomeDateInput from './CustomDateInput';
import CustomInTimeInput from './CustomInTimeInput';
import CustomOutTimeInput from './CustomOutTimeInput';
import 'react-clock/dist/Clock.css';
import './RightSideButtons.css';


const RightSideButtons = () => {

    const [selectedDate, setSelectedDate ] = useState(null);

    const [inTime, setInTime ] = useState(null);

    const [outTime, setOutTime ] = useState(null);

    const [isOpen, setIsOpen] = useState(true);

    const handleInTime = (time) => {
        if(selectedDate == null){
            alert("Select a date first!");
        }
        else {
            setInTime(time);
        }
    }


    const handleOutTime = (time) => {
        if(inTime ==  null){
            alert("Select In Time first!");
        }
        else if(time <= inTime){
            alert("Out Time must at least be 1 hour after in time");
        }
        else{
            setOutTime(time);
        }
    }

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const getCurrentTimeInIST = () => {
        const currentDate = new Date();
        // const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC+5:30
        const currentTimeIST = new Date(currentDate.getTime());
        return currentTimeIST;
    };

    const getInMinTime = () => {
        const today = new Date().toDateString(); // Today's date in string format for comparison
        const selectedDateString = selectedDate ? selectedDate.toDateString() : null;
        const currentTimeIST = getCurrentTimeInIST();

        if (today === selectedDateString || selectedDateString == null) {
            return currentTimeIST;
        } else {
            const minTime = new Date(currentTimeIST);
            minTime.setHours(0, 0, 0, 0);
            return minTime;
        }
    };

    const getOutMinTime = () => {
        const inTime = getInMinTime(); // The in-time based on the selected date
        const currentTimeIST = getCurrentTimeInIST(); // The current time in IST
    
        if (inTime.getTime() === currentTimeIST.getTime()) {
            return new Date(currentTimeIST.getTime() + 60 * 60 * 1000); // 1 hour after the current time
        } else {
            const outTime = new Date(inTime.getTime());
            outTime.setHours(outTime.getHours() + 1);
            return outTime;
        }
    };
    

    const today = new Date();
    const currentTime = getCurrentTimeInIST();
    const maxTime = new Date(currentTime);

    const inMinTime = getInMinTime();

    maxTime.setHours(23, 59, 59, 999); // Set to 23:59:59.999

    const outMinTime = getOutMinTime();

    // const outMinTime = new Date(currentTime);

    // outMinTime.setHours(inMinTime.getHours() + 1 );


    return ( 
        <div className="rightside-box">
            <div className="resevation-type">
                <p className="button-title">
                    Reservation Type:
                </p>
                <select name="reservation" id="reservation">
                    <option value="multiple">Multiple Days</option>
                    <option value="single">Single Day</option>
                </select>
            </div>
            <div className="date">
                <p className="button-title">
                    Date: 
                </p>
                {/* <button className="buttons" onClick={handleButtonClick}>
                    { !selectedDate ? (<p>Select Date</p>) : (<p>{selectedDate.toLocaleDateString()}</p>)
                    }
                </button> */}
                <div className="date-picker-box">
                    <DatePicker className='date-picker'
                        selected={selectedDate}
                        placeholderText='Select Date'
                        onChange={(date) => { setSelectedDate(date); }}
                        customInput={<CustomeDateInput/>}
                        dateFormat="yyyy-MM-dd"
                        minDate= {today}
                        />
                </div>
            
            </div>
            <div className="time">
                <p className="button-title">
                    In: 
                </p>
                <div className="date-picker">
                    <DatePicker
                        selected={inTime}
                        onChange={handleInTime}
                        showTimeSelect
                        showTimeSelectOnly
                        placeholderText='Select In-Time'
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        customInput={<CustomInTimeInput/>}
                        minTime={inMinTime}
                        maxTime={maxTime}
                        

                    />
                    {/* <Clock
                        placeholderText = "Select In-Time"
                        value={inTime || new Date()}

                        onChange = {(time) => {
                            setInTime(time);
                        }} */}
                    {/* /> */}
                </div>
            </div>
            <div className="time">
                <p className="button-title">
                    Out: 
                </p>
                <div className="date-picker">
                    <DatePicker
                        selected={outTime}
                        onChange={handleOutTime}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        placeholderText='Select Out-Time'
                        customInput={<CustomOutTimeInput/>}
                        minTime={outMinTime}
                        maxTime={maxTime}
                    />
                </div>
            </div>
        </div>
    );
}

export default RightSideButtons;