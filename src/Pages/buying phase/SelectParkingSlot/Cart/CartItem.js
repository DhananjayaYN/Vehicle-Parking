import React from 'react';
import { ReactSVG } from 'react-svg';
import './CartItem.css';
import DeleteIcon from '../../../../Images/Cutomer/selectParking/delete.svg';

const CartItem = ({ selectedDate, inTime, outTime, onDelete }) => {
    return (
        
        <div className='item'>
            <div className="item-attribute">
                {selectedDate ? selectedDate.toLocaleDateString() : 'N/A'}
            </div>
            <div className="item-attribute">
                {inTime ? inTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'}
            </div>
            <div className="item-attribute">
                {outTime ? outTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'}
            </div>
            <button onClick={onDelete}>
                <ReactSVG src={DeleteIcon} />
            </button>
        </div>
    );
};

export default CartItem;
