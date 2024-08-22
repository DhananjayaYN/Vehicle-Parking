import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message, onClose }) => {
    return (
        <div className="error-message">
            <div className="error-content">
                <p>{message}</p>
                <button onClick={onClose} className="error-close-button">Close</button>
            </div>
        </div>
    );
};

export default ErrorMessage;
