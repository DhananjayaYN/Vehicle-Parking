import React from 'react';
import { ReactSVG } from 'react-svg'; 
import './CartItem.css';

import DeleteIcon from '../../../../Images/Cutomer/selectParking/delete.svg'



const CartItem = () => {
    return (
        <div className='item'>
            <div className="item-attribute">2022-03-06</div>
            <div className="item-attribute">10.00 AM</div>
            <div className="item-attribute">10.00 AM</div>
            {/* <div className="delete-button">Del</div> */}
            <button>
                <ReactSVG src={DeleteIcon} />
            </button>
        </div>
    );
};

export default CartItem;