import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const OrderContext = createContext();


export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:7000/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, []);

  // Function to add a new order to the backend
  const addOrder = async (newOrder) => {
    try {
      const response = await axios.post('http://localhost:7000/api/orders', newOrder);
      setOrders((prevOrders) => [...prevOrders, response.data]);
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook to use the OrderContext
export const useOrders = () => React.useContext(OrderContext);