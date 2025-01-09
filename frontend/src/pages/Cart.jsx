



// import React, { useContext, useState, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/frontend_assets/assets";
// import CartTotal from "../components/CartTotal";

// const Cart = () => {
//   const { products, cartItems,updateQuantity,navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         if (cartItems[itemId][size] > 0) {
//           const product = products.find((product) => product._id === itemId);
//           if (product) {
//             tempData.push({
//               _id: itemId,
//               name: product.name,
//               image: product.image,
//               size: size,
//               quantity: cartItems[itemId][size],
//               price: product.price,
//             });
//           }
//         }
//       }
//     }
//     setCartData(tempData);
//   }, [cartItems, products]);

//   const handleQuantityChange = (e, itemId, size) => {
//     const newQuantity = e.target.value;
//     // Update the quantity logic (e.g., update cartItems or call an action)
//   };

//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         {/* <Title text1={'YOUR'} text2={'CART'} /> */}
//       </div>

//       <div>
//         {cartData.map((item, index) => (
//           <div
//             key={index}
//             className='py-4 border-b text-gray-700 grid grid-cols-[3fr_1fr_1fr_1fr] sm:grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center gap-4'
//           >
//             <div className='flex items-start gap-6'>
//               <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name} />
//               <p className="text-xs sm:text-lg font-medium">{item.name}</p>
//             </div>
//             {/* Price, Size, Quantity displayed side by side */}
//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">{`$${item.price.toFixed(2)}`}</p>
//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">Size: {item.size}</p>

//             <input
//               className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]"
//               type="number"
//               min={1}
//               value={item.quantity}
//               onChange={(e) => handleQuantityChange(e, item._id, item.size)} 
//             />
//             <img onClick={(()=>updateQuantity(item._id,item.size,0))} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon}/>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal/>
//           <div className="w-fill text-end">
//             <button onClick={(()=>navigate('/place-order'))} className="bg-black text-white text-sm my-8 px-8 py-4">CHEECKOUT</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;




// import React, { useContext, useState, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/frontend_assets/assets";
// import CartTotal from "../components/CartTotal";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { products, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     const cartProductCategories = new Set();

//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         if (cartItems[itemId][size] > 0) {
//           const product = products.find((product) => product._id === itemId);
//           if (product) {
//             tempData.push({
//               _id: itemId,
//               name: product.name,
//               image: product.image,
//               size: size,
//               quantity: cartItems[itemId][size],
//               price: product.price,
//               category: product.category,
//             });

//             // Collect product categories in the cart
//             cartProductCategories.add(product.category);
//           }
//         }
//       }
//     }

//     setCartData(tempData);

//     // Find related products
//     const related = products.filter(
//       (product) =>
//         cartProductCategories.has(product.category) &&
//         !tempData.some((cartItem) => cartItem._id === product._id)
//     );
//     setRelatedProducts(related);
//   }, [cartItems, products]);

//   const handleQuantityChange = (e, itemId, size) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     if (newQuantity >= 1) {
//       updateQuantity(itemId, size, newQuantity);
//     }
//   };
//   const fetchCart = async () => {
//     const token = localStorage.getItem('token'); // Get the token from local storage
//     const response = await fetch('/api/cart/get', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`, // Pass the token for authentication
//       },
//     });
  
//     const data = await response.json();
//     if (data.success) {
//       console.log('Cart retrieved successfully:', data.cartData);
   
//     } else {
//       console.error('Error retrieving cart:', data.message);
//     }
//   };
   
//   const updateCart = async (itemId, size, quantity) => {
//     const token = localStorage.getItem('token'); // Get the token from local storage
//     const response = await fetch('/api/cart/update', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ itemId, size, quantity }),
//     });
  
//     const data = await response.json();
//     if (data.success) {
//       console.log('Cart updated successfully:', data.cartData);
//       // Update frontend cart state if necessary
//     } else {
//       console.error('Error updating cart:', data.message);
//     }
//   };
  
  
//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl mb-3">
//         {/* Uncomment if you have a Title component */}
//         {/* <Title text1={"YOUR"} text2={"CART"} /> */}
//       </div>

//       {/* Cart Items */}
//       <div>
//         {cartData.map((item) => (
//           <div
//             key={`${item._id}-${item.size}`} // Use unique keys
//             className="py-4 border-b text-gray-700 grid grid-cols-[3fr_1fr_1fr_1fr] sm:grid-cols-[3fr_1fr_1fr_1fr_1fr] items-center gap-4"
//           >
//             <div className="flex items-start gap-6">
//               <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />
//               <p className="text-xs sm:text-lg font-medium">{item.name}</p>
//             </div>

//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">{`$${item.price.toFixed(2)}`}</p>
//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">Size: {item.size}</p>

//             <input
//               className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]"
//               type="number"
//               min={1}
//               value={item.quantity}
//               onChange={(e) => handleQuantityChange(e, item._id, item.size)}
//             />

//             <img
//               onClick={() => updateQuantity(item._id, item.size, 0)}
//               className="w-4 mr-4 sm:w-5 cursor-pointer"
//               src={assets.bin_icon}
//               alt="Remove"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Cart Total */}
//       <div className="flex justify-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//           <div className="w-fill text-end">
//             <button
//               onClick={() => navigate("/place-order")}
//               className="bg-black text-white text-sm my-8 px-8 py-4"
//             >
//               CHECKOUT
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-12">
//         <h2 className="text-xl font-semibold mb-6">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((product) => (
//             <div
//               key={product._id}
//               className="border p-4 flex flex-col items-center text-center cursor-pointer"
//             >
//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={product.image[0]}
//                   alt={product.name}
//                   className="w-full h-auto mb-4"
//                 />
//                 <h3 className="text-lg font-medium">{product.name}</h3>
//                 <p className="text-gray-500 mt-2">{`$${product.price.toFixed(2)}`}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import React, { useContext, useState, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/frontend_assets/assets";
// import CartTotal from "../components/CartTotal";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { products, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   useEffect(() => {
//     const tempData = [];
//     const cartProductCategories = new Set();

//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         if (cartItems[itemId][size] > 0) {
//           const product = products.find((product) => product._id === itemId);
//           if (product) {
//             tempData.push({
//               _id: itemId,
//               name: product.name,
//               image: product.image,
//               size: size,
//               quantity: cartItems[itemId][size],
//               price: product.price,
//               category: product.category,
//             });

//             // Collect product categories in the cart
//             cartProductCategories.add(product.category);
//           }
//         }
//       }
//     }

//     setCartData(tempData);

//     // Find related products
//     const related = products.filter(
//       (product) =>
//         cartProductCategories.has(product.category) &&
//         !tempData.some((cartItem) => cartItem._id === product._id)
//     );
//     setRelatedProducts(related);
//   }, [cartItems, products]);

//   const handleQuantityChange = (e, itemId, size) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     if (newQuantity >= 1) {
//       updateQuantity(itemId, size, newQuantity);
//     }
//   };

//   const fetchCart = async () => {
//     const token = localStorage.getItem('token'); // Get the token from local storage
//     const response = await fetch('/api/cart/get', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`, // Pass the token for authentication
//       },
//     });

//     const data = await response.json();
//     if (data.success) {
//       console.log('Cart retrieved successfully:', data.cartData);
//     } else {
//       console.error('Error retrieving cart:', data.message);
//     }
//   };

//   const updateCart = async (itemId, size, quantity) => {
//     const token = localStorage.getItem('token'); // Get the token from local storage
//     const response = await fetch('/api/cart/update', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ itemId, size, quantity }),
//     });

//     const data = await response.json();
//     if (data.success) {
//       console.log('Cart updated successfully:', data.cartData);
//     } else {
//       console.error('Error updating cart:', data.message);
//     }
//   };

//   return (
//     <div className="border-t pt-14 px-4 sm:px-8">
//       <div className="text-2xl mb-3">
//         {/* Uncomment if you have a Title component */}
//         {/* <Title text1={"YOUR"} text2={"CART"} /> */}
//       </div>

//       {/* Cart Items */}
//       <div>
//         {cartData.map((item) => (
//           <div
//             key={`${item._id}-${item.size}`}
//             className="py-4 border-b text-gray-700 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center"
//           >
//             <div className="flex items-start gap-6 sm:gap-4">
//               <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />
//               <p className="text-xs sm:text-lg font-medium">{item.name}</p>
//             </div>

//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">
//               ${item.price.toFixed(2)}
//             </p>
//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">
//               Size: {item.size}
//             </p>

//             <input
//               className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]"
//               type="number"
//               min={1}
//               value={item.quantity}
//               onChange={(e) => handleQuantityChange(e, item._id, item.size)}
//             />

//             <img
//               onClick={() => updateQuantity(item._id, item.size, 0)}
//               className="w-4 sm:w-5 cursor-pointer"
//               src={assets.bin_icon}
//               alt="Remove"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Cart Total */}
//       <div className="flex justify-end my-6 sm:my-12">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//           <div className="w-full text-end">
//             <button
//               onClick={() => navigate("/place-order")}
//               className="bg-black text-white text-sm sm:text-base my-4 px-6 py-3"
//             >
//               CHECKOUT
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-12">
//         <h2 className="text-xl font-semibold mb-6">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((product) => (
//             <div
//               key={product._id}
//               className="border p-4 flex flex-col items-center text-center cursor-pointer"
//             >
//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={product.image[0]}
//                   alt={product.name}
//                   className="w-full h-auto mb-4"
//                 />
//                 <h3 className="text-lg font-medium">{product.name}</h3>
//                 <p className="text-gray-500 mt-2">${product.price.toFixed(2)}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



// import React, { useContext, useState, useEffect } from "react";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/frontend_assets/assets";
// import CartTotal from "../components/CartTotal";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { products, cartItems, updateQuantity, navigate } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);
//   const [relatedProducts, setRelatedProducts] = useState([]);

//   // Define the currency symbol here
//   const currencySymbol = "₹"; // Change this to any currency symbol you want (e.g., "$", "€", "£")

//   useEffect(() => {
//     const tempData = [];
//     const cartProductCategories = new Set();

//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         if (cartItems[itemId][size] > 0) {
//           const product = products.find((product) => product._id === itemId);
//           if (product) {
//             tempData.push({
//               _id: itemId,
//               name: product.name,
//               image: product.image,
//               size: size,
//               quantity: cartItems[itemId][size],
//               price: product.price,
//               category: product.category,
//             });

//             // Collect product categories in the cart
//             cartProductCategories.add(product.category);
//           }
//         }
//       }
//     }

//     setCartData(tempData);

//     // Find related products
//     const related = products.filter(
//       (product) =>
//         cartProductCategories.has(product.category) &&
//         !tempData.some((cartItem) => cartItem._id === product._id)
//     );
//     setRelatedProducts(related);
//   }, [cartItems, products]);

//   const handleQuantityChange = (e, itemId, size) => {
//     const newQuantity = parseInt(e.target.value, 10);
//     if (newQuantity >= 1) {
//       updateQuantity(itemId, size, newQuantity);
//     }
//   };

//   return (
//     <div className="border-t pt-14 px-4 sm:px-8">
//       <div className="text-2xl mb-3">
//         {/* Uncomment if you have a Title component */}
//         {/* <Title text1={"YOUR"} text2={"CART"} /> */}
//       </div>

//       {/* Cart Items */}
//       <div>
//         {cartData.map((item) => (
//           <div
//             key={`${item._id}-${item.size}`}
//             className="py-4 border-b text-white-700 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center"
//           >
//             <div className="flex items-start gap-6 sm:gap-4">
//               <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />
//               <p className="text-xs sm:text-lg text-white-700 font-medium">{item.name}</p>
//             </div>

//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px] text-white-700">
//               {/* Display price with currency symbol */}
//               {currencySymbol}{item.price.toFixed(2)}
//             </p>
//             <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">
//               Size: {item.size}
//             </p>

//             <input
//               className="px-1 sm:px-2 sm:py-0.5 text-white-700 border bg-slate-10 text-xs max-w-[80px]"
//               type="number"
//               min={1}
//               value={item.quantity}
//               onChange={(e) => handleQuantityChange(e, item._id, item.size)}
//             />

//             <img
//               onClick={() => updateQuantity(item._id, item.size, 0)}
//               className="w-4 sm:w-5 cursor-pointer text-white-700"
//               src={assets.bin_icon}
//               alt="Remove"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Cart Total */}
//       <div className="flex justify-end my-6 sm:my-12">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal currencySymbol={currencySymbol} />
//           <div className="w-full text-end">
//             <button
//               onClick={() => navigate("/place-order")}
//               className="bg-black text-white text-sm sm:text-base my-4 px-6 py-3"
//             >
//               CHECKOUT
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className="mt-12">
//         <h2 className="text-xl font-semibold mb-6">Related Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {relatedProducts.map((product) => (
//             <div
//               key={product._id}
//               className="border p-4 flex flex-col items-center text-center cursor-pointer"
//             >
//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={product.image[0]}
//                   alt={product.name}
//                   className="w-full h-auto mb-4"
//                 />
//                 <h3 className="text-lg font-medium">{product.name}</h3>
//                 <p className="text-gray-500 mt-2">
//                   {/* Display price with currency symbol */}
//                   {currencySymbol}{product.price.toFixed(2)}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const currencySymbol = "₹";

  useEffect(() => {
    const tempData = [];
    const cartProductCategories = new Set();

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find((product) => product._id === itemId);
          if (product) {
            tempData.push({
              _id: itemId,
              name: product.name,
              image: product.image,
              size: size,
              quantity: cartItems[itemId][size],
              price: product.price,
              category: product.category,
            });

            cartProductCategories.add(product.category);
          }
        }
      }
    }

    setCartData(tempData);

    const related = products.filter(
      (product) =>
        cartProductCategories.has(product.category) &&
        !tempData.some((cartItem) => cartItem._id === product._id)
    );
    setRelatedProducts(related);
  }, [cartItems, products]);

  const handleIncrement = (itemId, size) => {
    const currentQuantity = cartItems[itemId]?.[size] || 0;
    updateQuantity(itemId, size, currentQuantity + 1);
  };

  const handleDecrement = (itemId, size) => {
    
    const item = cartData.find((cartItem) => cartItem._id === itemId && cartItem.size === size);
    if (item ) {
      if (item.quantity > 1) {
        updateQuantity(itemId, size, item.quantity - 1);
      }else{
        updateQuantity(itemId, size, 0);
      }
    }
  };

  return (
    <div className="border-t pt-14 px-4 sm:px-8">
      <div className="text-2xl mb-3"></div>

      {/* Cart Items */}
      <div>
        {cartData.map((item) => (
          <div
            key={`${item._id}-${item.size}`}
            className="py-4 border-b text-white-700 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center"
          >
            <div className="flex items-start gap-6 sm:gap-4">
              <img className="w-16 sm:w-20" src={item.image[0]} alt={item.name} />
              <p className="text-xs sm:text-lg text-white-700 font-medium">{item.name}</p>
            </div>

            <p className="px-1 sm:px-2 sm:py-0.5 px-2 py-1 text-black">
              {currencySymbol}
              {item.price.toFixed(2)}
            </p>
            <p className="px-1 sm:px-2 sm:py-0.5 border bg-slate-10 text-xs max-w-[80px]">
              Size: {item.size}
            </p>

            {/* Quantity Increment/Decrement */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDecrement(item._id, item.size)}
                className="px-2 py-1 border rounded bg-gray-200 text-black"
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                onClick={() => handleIncrement(item._id, item.size)}
                className="px-2 py-1 border rounded bg-gray-200 text-black"
              >
                +
              </button>
            </div>

            <img
              onClick={() => updateQuantity(item._id, item.size, 0)}
              className="w-4 sm:w-5 cursor-pointer text-white-700"
              src={assets.bin_icon}
              alt="Remove"
            />
          </div>
        ))}
      </div>

      {/* Cart Total */}
      <div className="flex justify-end my-6 sm:my-12">
        <div className="w-full sm:w-[450px]">
          <CartTotal currencySymbol={currencySymbol} />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm sm:text-base my-4 px-6 py-3"
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product._id}
              className="border p-4 flex flex-col items-center text-center cursor-pointer"
            >
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className="w-full h-auto mb-4"
                />
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-500 mt-2">
                  {currencySymbol}
                  {product.price.toFixed(2)}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
