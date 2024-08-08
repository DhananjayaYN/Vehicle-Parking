import { createContext, useState } from "react";

const ParkingContext = createContext();

export const ParkingContextProvider = ({ children }) => {
const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <ParkingContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </ParkingContext.Provider>
  );
};

// export const ParkingContext = createContext();

// export const vehicleTypeReducer = (state, action) => {
//     switch(action.type){
//         case 'SET_VEHICLE_TYPE':
//             return {
//                 vehicleType: action.vehicle
//             }
//         case 'CREATE_VEHICLE_TYPE':
//             return {
//                 vehicleType: [action.vehicle, ...state.vehicleType]
//             }
//         default: 
//             return state
//     }
// }

// export const ParkingContextProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(vehicleTypeReducer, {
//         vehicleType: null
//     })

//     return (
//         <ParkingContext.Provider value = {{...state, dispatch}}>
//             { children }
//         </ParkingContext.Provider>

//     )
// }