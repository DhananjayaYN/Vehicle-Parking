import React, { createContext, useState } from 'react';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const addOrder = (order) => {
        setOrders([...orders, order]);
    };

    const removeOrder = (index) => {
        setOrders(orders.filter((_, i) => i !== index));
    };

    const deleteAllOrders = () => {
        setOrders([]);
    };

    const isEmpty = () => {
        return orders.length === 0;
    };

    const getOrderCount = () => {
        return orders.length;
    };

    return (
        <OrderContext.Provider
            value={{
                orders,
                addOrder,
                removeOrder,
                deleteAllOrders,
                isEmpty,
                getOrderCount,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};

export { OrderContext, OrderProvider };

// import React, { createContext, useState } from 'react';

// const OrderContext = createContext();

// const OrderProvider = ({ children }) => {
//     const [reservationType, setReservationType] = useState(null);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [parkingTimes, setParkingTimes] = useState([]);
//     const [parkingSlots, setParkingSlots] = useState([]);

//     return (
//         <OrderContext.Provider
//             value={{
//                 reservationType,
//                 setReservationType,
//                 selectedDates,
//                 setSelectedDates,
//                 parkingTimes,
//                 setParkingTimes,
//                 parkingSlots,
//                 setParkingSlots,
//             }}
//         >
//             {children}
//         </OrderContext.Provider>
//     );
// };

// export { OrderContext, OrderProvider };