import React, { createContext, useState } from 'react';

// Create the context
const ParkingContext = createContext();

// Define the provider component
export const ParkingContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <ParkingContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </ParkingContext.Provider>
  );
};

// Export the context and the provider
export { ParkingContext };
export default ParkingContext;
