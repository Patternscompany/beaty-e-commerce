import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

// Define or import the Text component
const Text = ({ text1, text2 }) => (
  <span>
    {text1} <strong>{text2}</strong>
  </span>
);

const Orders =  () => {
  const { products = [], currency } = useContext(ShopContext); // Default to an empty array if products is undefined

  // const fetchOrders = async () => {
  //   try {
  //     // API call to fetch orders
  //     const response = await axios.get('http://localhost:4000/api/order/getOrders');
  
  //     // Destructure productsList from the response
  //     const { productsList } = response.data; // Ensure response.data.productsList exists
  
  //     // Log the products list
  //     console.log('Products List:', productsList);
  //   } catch (error) {
  //     // Log general error message
  //     console.error('Error fetching orders:', error.message);
  
  //     // Log specific API error response (if available)
  //     if (error.response) {
  //       console.error('Server responded with:', error.response.data);
  //       console.error('Status Code:', error.response.status);
  //     }
  //   }
  // };
  
  // // Call the function
  // fetchOrders();
  

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Text text1="MY" text2="ORDERS" />
      </div> 

      <div>
        {products.slice(1, 100).map((item, index) => (
          <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
            <div className='flex items-start gap-6 text-sm'>
              <img 
                className='w-16 sm:w-20' 
                src={item.image?.[0]} 
                alt={item.name || 'Product Image'} 
              />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex item-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p> Quantity: 1</p>
                  <p> Size: M</p>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
