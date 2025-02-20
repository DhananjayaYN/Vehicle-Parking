import React from 'react';

const Checkout = ({ reservationType, selectedDates, parkingTimes, parkingSlots}) => {
    const [customerName, setCustomerName] = React.useState('');
    const [contactNumber, setContactNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [vehicleNumber, setVehicleNumber] = React.useState('');

    const calculateTotalAmount = () => {
        let totalHours = 0;
        parkingTimes.forEach(time => {
            const [start, end] = time.split('-');
            const startHour = parseInt(start.split(':')[0], 10);
            const endHour = parseInt(end.split(':')[0], 10);
            totalHours += endHour - startHour;
        });
        return totalHours * 150;
    };

    return (
        <div>
            <h1>Checkout</h1>
            <div>
                <h2>Reservation Type: {reservationType}</h2>
                <h3>Selected Dates and Parking Slots:</h3>
                {selectedDates.map((date, index) => (
                    <div key={index}>
                        <p>Date: {date}</p>
                        <p>Parking Time: {parkingTimes[index]}</p>
                        <p>Parking Slot: {parkingSlots[index]}</p>
                    </div>
                ))}
            </div>
            <div>
                <h3>Customer Details</h3>
                <label>
                    Name:
                    <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                </label>
                <label>
                    Contact Number:
                    <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Vehicle Number:
                    <input type="text" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} />
                </label>
            </div>
            <div>
                <h3>Total Amount: ${calculateTotalAmount()}</h3>
            </div>
            <button onClick={() => alert('Reservation Confirmed!')}>Confirm Reservation</button>
        </div>
    );
};

export default Checkout;
