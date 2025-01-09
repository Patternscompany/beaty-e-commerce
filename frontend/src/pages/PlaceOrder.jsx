

// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { assets } from '../assets/frontend_assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod');
//   const [formData,setFormData] = useState({
//     firstName:'',
//     lastName:'',
//     email:'',
//     street:'',
//     city:'',
//     state:'',
//     zipcode:'',
//     country:'',
//     phone:''
//   })

//   const onChangeHandler = (event) =>{
//     const name = event.target.name;
//     const value = event.target.value

//     setFormData(data =>({...data,[name]:value}))
    
//   }

//   const onSubmitHandler = async (event) =>{
//      event.preventDefault()
//      try {
//       let orderItems = []

//       for(const items in cartItems)
//         for(const item in cartItems[items]){
//             if(cartItems[items][item] > 0){
//               const itemInfo = structuredClone(products.find(product => product._id === items ))
//               if(itemInfo){
//                 itemInfo.size = item 
//                 itemInfo.quantity = cartItems[items][item] 
//                 orderItems.push(itemInfo)  
//               }
//             }
//       }
//       console.log(orderItems)
      
//      } catch (error) {
      
//      }
//   }


//   const BACKEND_URL = "http://localhost:4000";
// const {navigate,token,addItems, cartItems,setCartItems,getCartAmount,delivery_fee,products,} = useNavigate(ShopContext);
 

//   return (
//     <form className='flex flex-col sm:flex-row justify gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* ---------Left side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='text-xl sm:text-2xl my-3'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>
//         <div className='flex gap-3'>
//           <input onChange={onChangeHandler} className='border border-gray-300 py-1.5 px-3.5 w-full' type='text' placeholder='First Name'value={formData.firstName} />
//           <input onChange={onChangeHandler} className='border border-gray-300 py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' value={formData.lastName} />
//         </div>
//         <input onChange={onChangeHandler} className='border border-gray-300 py-1.5 px-3.5 w-full' type='email' placeholder='Email Address'value={formData.email} />
//         <input onChange={onChangeHandler}className='border border-gray-300 py-1.5 px-3.5 w-full' type='text' placeholder='Street'value={formData.street} />
//         <div className='flex gap-3'>
//           <input onChange={onChangeHandler} className='border border-gray-300 py-1.5 px-3.5 w-full' type='text' placeholder='City' value={formData.city} />
//           <input onChange={onChangeHandler} className='border border-gray-300 py-1.5 px-3.5 w-full' type='text' placeholder='State' value={formData.state}/>
//         </div>
//         <div className='flex gap-3'>
//           <input onChange={onChangeHandler} className='border border-gray-300 py-1.5 px-3.5 w-full' type='text' placeholder='Zipcode' value={formData.zipcode} />
//           <input onChange={onChangeHandler}className='border border-gray-300 py-1.5 px-3.5 w-full' type='text' placeholder='Country' value={formData.country} />
//         </div>
//         <input className='border border-gray-300 py-1.5 px-3.5 w-full' type='text' placeholder='Phone' value={formData.phone} />
//       </div>

//       {/* Right Side */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>
//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           {/* Payment method selection */}
//           <div className='flex gap-3 flex-col lg:flex-row'>
//             <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.stripe_logo} alt='Stripe Logo' />
//             </div>
//             <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
//               <img className='h-5 mx-4' src={assets.razorpay_logo} alt='Razorpay Logo' />
//             </div>
//             <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
//               <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
//               <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
//             </div>
//           </div>
//         </div>

//         {/* Place Order Button */}
//         <div className='w-full text-end mt-t'>
//           <button onClick={() => navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;


// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { assets } from '../assets/frontend_assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: '',
//   });

//   const { navigate, cartItems, products } = useContext(ShopContext);

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setFormData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault(); // Prevent default form submission
//     try {
//       let orderItems = [];

//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             const itemInfo = structuredClone(
//               products.find((product) => product._id === items)
//             );
//             if (itemInfo) {
//               itemInfo.size = item;
//               itemInfo.quantity = cartItems[items][item];
//               orderItems.push(itemInfo);
//             }
//           }
//         }
//       }
//       // console.log(orderItems);
//       let orderData = {
//         address:formData,
//         items:orderItems,
//         // amount: getCartAmount() + delivery_fee
//       }

//       switch (method){
//       case 'cod':
//         const respones = await axios('http://localhost:4000/api/order/place',orderData,{headers:{token}})
//         console.log(respones.data)
//         if(respones.data.success){
//           setCartItems({})
//           navigate('/orders')
//         }else{
//           toast.error(respones.data.message)
//         }
//         break;

//         default:
//           break;
//       }
      
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
//   };

//   return (
//     <form
//       className="flex flex-col sm:flex-row justify gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
//       onSubmit={onSubmitHandler} // Attach the submit handler to the form
//     >
//       {/* Left side */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>
//         <div className="flex gap-3">
//           <input
//             name="firstName"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="First Name"
//             value={formData.firstName}
//           />
//           <input
//             name="lastName"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Last Name"
//             value={formData.lastName}
//           />
//         </div>
//         <input
//           name="email"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="email"
//           placeholder="Email Address"
//           value={formData.email}
//         />
//         <input
//           name="street"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="text"
//           placeholder="Street"
//           value={formData.street}
//         />
//         <div className="flex gap-3">
//           <input
//             name="city"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="City"
//             value={formData.city}
//           />
//           <input
//             name="state"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="State"
//             value={formData.state}
//           />
//         </div>
//         <div className="flex gap-3">
//           <input
//             name="zipcode"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Zipcode"
//             value={formData.zipcode}
//           />
//           <input
//             name="country"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Country"
//             value={formData.country}
//           />
//         </div>
//         <input
//           name="phone"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="text"
//           placeholder="Phone"
//           value={formData.phone}
//         />
//       </div>

//       {/* Right Side */}
//       <div className="mt-8">
//         <CartTotal />
//         <div className="mt-12">
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div
//               onClick={() => setMethod('stripe')}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'stripe' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
//             </div>
//             <div
//               onClick={() => setMethod('razorpay')}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'razorpay' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay Logo" />
//             </div>
//             <div
//               onClick={() => setMethod('cod')}
//               className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'cod' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full text-end mt-t">
//           <button
//             type="submit"
//             className="bg-black text-white px-16 py-3 text-sm"
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;



// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { assets } from '../assets/frontend_assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: '',
//   });

//   const { navigate, cartItems, products, setCartItems } = useContext(ShopContext);
  
//   // Retrieve token from local storage or context
//   const token = localStorage.getItem('token'); // Adjust this line based on how you store your token

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setFormData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault(); // Prevent default form submission
//     try {
//       let orderItems = [];

//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             const itemInfo = structuredClone(
//               products.find((product) => product._id === items)
//             );
//             if (itemInfo) {
//               itemInfo.size = item;
//               itemInfo.quantity = cartItems[items][item];
//               orderItems.push(itemInfo);
//             }
//           }
//         }
//       }

//       let orderData = {
//         address: formData,
//         items: orderItems,
//         // amount: getCartAmount() + delivery_fee
//       };

//       // Check if token is available
//       if (!token) {
//         toast.error("User not authenticated. Please log in.");
//         return;
//       }

//       switch (method) {
//         case 'cod':
//           const response = await axios.post('http://localhost:4000/api/order/place', orderData, {
//             headers: { token },
//           });
//           console.log(response.data);
//           if (response.data.success) {
//             setCartItems({}); // Clear cart items after successful order placement
//             navigate('/orders');
//           } else {
//             toast.error(response.data.message);
//           }
//           break;

//         default:
//           break;
//       }
      
//     } catch (error) {
//       console.error("Error placing order:", error);
//       toast.error("An error occurred while placing the order.");
//     }
//   };

//   return (
//     <form
//       className="flex flex-col sm:flex-row justify gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
//       onSubmit={onSubmitHandler} // Attach the submit handler to the form
//     >
//       {/* Left side */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>
//         <div className="flex gap-3">
//           <input
//             name="firstName"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="First Name"
//             value={formData.firstName}
//           />
//           <input
//             name="lastName"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Last Name"
//             value={formData.lastName}
//           />
//         </div>
//         <input
//           name="email"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="email"
//           placeholder="Email Address"
//           value={formData.email}
//         />
//         <input
//           name="street"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="text"
//           placeholder="Street"
//           value={formData.street}
//         />
//         <div className="flex gap-3">
//           <input
//             name="city"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="City"
//             value={formData.city}
//           />
//           <input
//             name="state"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="State"
//             value={formData.state}
//           />
//         </div>
//         <div className="flex gap-3">
//           <input
//             name="zipcode"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Zipcode"
//             value={formData.zipcode}
//           />
//           <input
//             name="country"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Country"
//             value={formData.country}
//           />
//         </div>
//         <input
//           name="phone"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="text"
//           placeholder="Phone"
//           value={formData.phone}
//         />
//       </div>

//       {/* Right Side */}
//       <div className="mt-8">
//         <CartTotal />
//         <div className="mt-12">
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div
//               onClick={() => setMethod('stripe')}
//               className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'stripe' ? 'bg-gray-200' : ''}`}
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'stripe' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
//             </div>
//             <div
//               onClick={() => setMethod('razorpay')}
//               className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'razorpay' ? 'bg-gray-200' : ''}`}
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'razorpay' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay Logo" />
//             </div>
//             <div
//               onClick={() => setMethod('cod')}
//               className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'cod' ? 'bg-gray-200' : ''}`}
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'cod' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full text-end mt-t">
//           <button
//             type="submit"
//             className="bg-black text-white px-16 py-3 text-sm"
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;










// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { assets } from '../assets/frontend_assets/assets';
// import { useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//   const [method, setMethod] = useState('cod');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     street: '',
//     city: '',
//     state: '',
//     zipcode: '',
//     country: '',
//     phone: '',
//   });

//   const { navigate, cartItems, products, setCartItems } = useContext(ShopContext);
  
//   // Retrieve token from local storage or context
//   const token = localStorage.getItem('token'); // Adjust this line based on how you store your token

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setFormData((data) => ({ ...data, [name]: value }));
//   };

//   const calculateTotalAmount = () => {
//     let totalAmount = 0;
//     for (const items in cartItems) {
//       for (const item in cartItems[items]) {
//         if (cartItems[items][item] > 0) {
//           const product = products.find((product) => product._id === items);
//           if (product) {
//             totalAmount += product.price * cartItems[items][item]; // Assuming each product has a price field
//           }
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault(); // Prevent default form submission
//     try {
//       let orderItems = [];

//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             const itemInfo = structuredClone(
//               products.find((product) => product._id === items)
//             );
//             if (itemInfo) {
//               itemInfo.size = item;
//               itemInfo.quantity = cartItems[items][item];
//               orderItems.push(itemInfo);
//             }
//           }
//         }
//       }

//       let orderData = {
//         address: formData,
//         items: orderItems,
//         amount: calculateTotalAmount(), // Calculate and add amount here
//       };

//       // Check if token is available
//       if (!token) {
//         toast.error("User not authenticated. Please log in.");
//         return;
//       }

//       switch (method) {
//         case 'cod':
//           const response = await axios.post('http://localhost:4000/api/order/place', orderData, {
//             headers: { token },
//           });
//           // console.log(response.data);
//           if (response.data.success) {
//             setCartItems({}); // Clear cart items after successful order placement
//             navigate('/orders');
//           } else {
//             toast.error(response.data.message);
//           }
//           break;

//         default:
//           break;
//       }
      
//     } catch (error) {
//       console.error("Error placing order:", error);
//       toast.error("An error occurred while placing the order.");
//     }
//   };
  

//   return (
//     <form
//       className="flex flex-col sm:flex-row justify gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
//       onSubmit={onSubmitHandler} // Attach the submit handler to the form
//     >
//       {/* Left side */}
//       <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
//         <div className="text-xl sm:text-2xl my-3">
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>
//         <div className="flex gap-3">
//           <input
//             name="firstName"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="First Name"
//             value={formData.firstName}
//           />
//           <input
//             name="lastName"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Last Name"
//             value={formData.lastName}
//           />
//         </div>
//         <input
//           name="email"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="email"
//           placeholder="Email Address"
//           value={formData.email}
//         />
//         <input
//           name="street"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="text"
//           placeholder="Street"
//           value={formData.street}
//         />
//         <div className="flex gap-3">
//           <input
//             name="city"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="City"
//             value={formData.city}
//           />
//           <input
//             name="state"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="State"
//             value={formData.state}
//           />
//         </div>
//         <div className="flex gap-3">
//           <input
//             name="zipcode"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Zipcode"
//             value={formData.zipcode}
//           />
//           <input
//             name="country"
//             onChange={onChangeHandler}
//             className="border border-gray-300 py-1.5 px-3.5 w-full"
//             type="text"
//             placeholder="Country"
//             value={formData.country}
//           />
//         </div>
//         <input
//           name="phone"
//           onChange={onChangeHandler}
//           className="border border-gray-300 py-1.5 px-3.5 w-full"
//           type="text"
//           placeholder="Phone"
//           value={formData.phone}
//         />
//       </div>

//       {/* Right Side */}
//       <div className="mt-8">
//         <CartTotal />
//         <div className="mt-12">
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className="flex gap-3 flex-col lg:flex-row">
//             <div
//               onClick={() => setMethod('stripe')}
//               className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'stripe' ? 'bg-gray-200' : ''}`}
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'stripe' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
//             </div>
//             <div
//               onClick={() => setMethod('razorpay')}
//               className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'razorpay' ? 'bg-gray-200' : ''}`}
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'razorpay' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay Logo" />
//             </div>
//             <div
//               onClick={() => setMethod('cod')}
//               className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'cod' ? 'bg-gray-200' : ''}`}
//             >
//               <p
//                 className={`min-w-3.5 h-3.5 border rounded-full ${
//                   method === 'cod' ? 'bg-green-400' : ''
//                 }`}
//               ></p>
//               <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
//             </div>
//           </div>
//         </div>
//         <div className="w-full text-end mt-t">
//           <button
//             type="submit"
//             className="bg-black text-white px-16 py-3 text-sm"
//           >
//             PLACE ORDER
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;

import React, { useContext, useState, useRef, useEffect } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const formRef = useRef(null); // Ref for the entire form
  const firstNameRef = useRef(null); // Ref for the first name input field
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const { navigate, cartItems, products, setCartItems } = useContext(ShopContext);

  // Retrieve token from local storage or context
  const token = localStorage.getItem('token'); // Adjust this line based on how you store your token

  // Focus on the first input field when the component loads
  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const product = products.find((product) => product._id === items);
          if (product) {
            totalAmount += product.price * cartItems[items][item];
          }
        }
      }
    }
    return totalAmount;
  };


  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   try {
  //     let orderItems = [];

  //     for (const items in cartItems) {
  //       for (const item in cartItems[items]) {
  //         if (cartItems[items][item] > 0) {
  //           const itemInfo = structuredClone(
  //             products.find((product) => product._id === items)
  //           );
  //           if (itemInfo) {
  //             itemInfo.size = item;
  //             itemInfo.quantity = cartItems[items][item];
  //             orderItems.push(itemInfo);
  //           }
  //         }
  //       }
  //     }

  //     let orderData = {
  //       address: formData,
  //       items: orderItems,
  //       // item:image,
  //       amount: calculateTotalAmount(),
  //     };

  //     if (!token) {
  //       toast.error("User not authenticated. Please log in.");
  //       return;
  //     }

  //     switch (method) {
  //       case 'cod':
  //         const response = await axios.post('http://localhost:4000/api/order/place', orderData, {
  //           headers: { 
  //             'Content-Type': 'application/json',
  //              'Authorization': `Bearer ${token}` }
  //         })
          
  //         if (response.data.success) {
  //           const orderId = response.data._id || response.data.order?._id; // Adjust based on response structure
  //           console.log(response.data)
  //           // console.log("Order placed successfully:", orderId);
  //           console.log("Order placed successfully:", orderData);
  
        
  //         const emailHtml = `
  //         <div style="font-family: Arial, sans-serif; line-height: 1.6;">
  //           <h2 style="color: #4CAF50;">New Order Confirmation</h2>
  //           <p><strong>Order ID:</strong> ${response.data.orderId}</p>
  //           <p><strong>Total Amount:</strong> $${orderData.amount}</p>
            
            
  //           <h3>Order Items:</h3>
  //           <ul style="list-style-type: none; padding: 0;">
  //             ${orderData.items
  //               .map(
  //                 (item) =>
  //                   `<li style="margin-bottom: 15px; display: flex; align-items: center;">
  //                      <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto; margin-right: 15px; border: 1px solid #ccc; border-radius: 5px;" />
  //                     <div>
  //                       <p style="margin: 0;"><strong>${item.name}</strong></p>
  //                       <p style="margin: 0;">Size: ${item.size}</p>
  //                       <p style="margin: 0;">Quantity: ${item.quantity}</p>
  //                     </div>
  //                   </li>`
  //               )
  //               .join("")}
  //           </ul>
  //           <p>Thank you for your order!</p>
  //         </div>
  //         `;
          
          
          
  //         const emailResponse = await axios.post(
  //           "http://localhost:4000/api/send-mail",
  //           {
              
  //             email: ["kardamkumar13@gmail.com"],
  //             subject: `Order Confirmation - Order ID: ${response.data.orderId.formData}`,
  //             html: emailHtml,
  //           },
  //           { headers: { token } }
  //         );

  //         if (emailResponse.data.success) {
  //           console.log("Emails sent successfully to admin and user.");
  //         } else {
  //           toast.error("Failed to send emails.");
  //         }

  //         setCartItems({});
  //         navigate("/orders");
  //         } else {
  //           toast.error(response.data.message);
  //         }
  //         break;

  //       default:
  //         break;
  //     }
  //   } catch (error) {
  //     console.error("Error placing order:", error);
  //     toast.error("An error occurred while placing the order.");
  //   }
  // };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];
  
      // Collect order items from the cart
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
  
      let orderData = {
        address: formData,
        items: orderItems,
        amount: calculateTotalAmount(),
        paymentMethod: method,
      };
  
      if (!token) {
        toast.error("User not authenticated. Please log in.");
        return;
      }
  
      switch (method) {
        case 'cod':
          const response = await axios.post('http://localhost:4000/api/order/place', orderData, {
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` 
            }
          });
  
          if (response.data.success) {
            const orderId = response.data._id || response.data.order?._id;
  
            // Email content for the user
            const userEmailHtml = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2 style="color: #4CAF50;">Thank You for Your Order!</h2>
              <p><strong>Order ID:</strong> ${response.data.orderId}</p>
              <h3>Order Items:</h3>
              <ul style="list-style-type: none; padding:0;">
                ${orderData.items
                  .map(
                    (item) =>
                      `<li style="margin-bottom: 15px; display: flex; align-items: center;">
                         <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto; margin-right: 15px; border: 1px solid #ccc; border-radius: 5px;" />
                        <div>
                          <p style="margin: 0;"><strong>${item.name}</strong></p>
                          <p style="margin: 0;">Size: ${item.size}</p>
                          <p style="margin: 0;">Quantity: ${item.quantity}</p>
                        </div>
                      </li>`
                  )
                  .join("")}
              </ul>
              <p><strong>Total Cost:</strong> $${orderData.amount}</p>
              <p>Thank you for shopping with us!</p>
            </div>
            `;
  
            // Send email to the user
            const userEmailResponse = await axios.post(
              "http://localhost:4000/api/send-mail",
              {
                email: [formData.email],  // Send to user's email
                subject: ` Your Manya Order Confirmation`,
                html: userEmailHtml,
              },
              { headers: { token } }
            );
  
            if (userEmailResponse.data.success) {
              console.log("Email sent to user successfully.");
            } else {
              toast.error("Failed to send email to user.");
            }
  
            // Email content for the admin
            const adminEmailHtml = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
              <h2 style="color: #4CAF50;">New Order Received</h2>
              <p><strong>Order ID:</strong> ${response.data.orderId}</p>
              <h3>Order Items:</h3>
              <ul style="list-style-type: none; padding: 0;">
                ${orderData.items
                  .map(
                    (item) =>
                      `  <li class="mb-4 flex items-start p-4 border border-gray-300 rounded-lg shadow-sm">
  <!-- Product Image -->
  <img 
    src="${item.image}" 
    alt="${item.name}" 
    class="w-28 h-auto mr-5 border border-gray-200 rounded-md object-cover" 
  />
  
  <!-- Product Details -->
  <div class="flex-1 text-gray-700">
    <p class="mb-2 text-lg font-semibold text-gray-900">
      ${item.name}
    </p>
    <p class="mb-1 text-sm">
      <span class="font-medium">Size:</span> ${item.size}
    </p>
    <p class="mb-1 text-sm">
      <span class="font-medium">Quantity:</span> ${item.quantity}
    </p>
    <p class="text-sm">
      <span class="font-medium">Total Cost:</span> $${(item.quantity * item.price).toFixed(2)}
    </p>
  </div>
</li>`
                  )
                  .join("")}
              </ul>
              <h3>Delivery Details:</h3>
              <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
              <p><strong>Phone:</strong> ${formData.phone}</p>
              <p><strong>Address:</strong> ${formData.street}, ${formData.city}, ${formData.state}, ${formData.zipcode}, ${formData.country}</p>
              <h3>Payment Method:</h3>
              <p>${method === 'cod' ? 'Cash on Delivery' : 'Online Payment'}</p>
              <p>Thank you for processing the order!</p>
            </div>
            `;
  
            // Send email to the admin
            const adminEmailResponse = await axios.post(
              "http://localhost:4000/api/send-mail",
              {
                email: ["pandureddypatterns@gmail.com"],  // Send to admin's email
                subject: `New Order - Order ID: ${response.data.orderId}`,
                html: adminEmailHtml,
              },
              { headers: { token } }
            );
  
            if (adminEmailResponse.data.success) {
              console.log("Email sent to admin successfully.");
            } else {
              toast.error("Failed to send email to admin.");
            }
  
            // Clear the cart and navigate
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;
  
        default:
          break;
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("An error occurred while placing the order.");
    }
  };
  
  
  return (
    <form
      ref={formRef}
      className="flex flex-col sm:flex-row justify gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
      onSubmit={onSubmitHandler}
    >
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title  text2={' DELIVERY INFORMATION'} />
        </div>
        <div className="flex gap-3">
          <input
            name="firstName"
            ref={firstNameRef} // Use the ref here
            onChange={onChangeHandler}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
          />
          <input
            name="lastName"
            onChange={onChangeHandler}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
          />
        </div>
        <input
          name="email"
          onChange={onChangeHandler}
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
          value={formData.email}
        />
        <input
          name="street"
          onChange={onChangeHandler}
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
          value={formData.street}
        />
        <div className="flex gap-3">
          <input
            name="city"
            onChange={onChangeHandler}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
            value={formData.city}
          />
          <input
            name="state"
            onChange={onChangeHandler}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
            value={formData.state}
          />
        </div>
        <div className="flex gap-3">
          <input
            name="zipcode"
            onChange={onChangeHandler}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Zipcode"
            value={formData.zipcode}
          />
          <input
            name="country"
            onChange={onChangeHandler}
            className="border border-gray-300 py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
            value={formData.country}
          />
        </div>
        <input
          name="phone"
          onChange={onChangeHandler}
          className="border border-gray-300 py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Phone"
          value={formData.phone}
        />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <CartTotal />
        <div className="mt-12">
          <Title  text2={' PAYMENT METHOD'} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'stripe' ? 'bg-gray-200' : ''}`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'stripe' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
            </div>
            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'razorpay' ? 'bg-gray-200' : ''}`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'razorpay' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay Logo" />
            </div>
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${method === 'cod' ? 'bg-gray-200' : ''}`}
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === 'cod' ? 'bg-green-400' : ''
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
        <div className="w-full text-end mt-t">
          <button
            type="submit"
            className="bg-black text-white px-16 py-3 text-sm"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
