// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
  
//   const [latestProducts,setlatestProducts]=useState([]);

//   useEffect(()=>{
//     setlatestProducts(products.slice(0,10));
//   },[])

//   return (
//     <div className='my-10'>
//       <div className='text-center py-8 text-3xl'>
//         <Title text1="LATEST" text2="COLLECTIONS" />
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//         Beauty creams nourish and hydrate the skin, promoting a radiant and healthy appearance
//         </p>
//       </div>

     
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {
//             latestProducts.map((item,index)=>(
//                <ProductItem key={index} id={item} image={item.image} name={item.name} price={item.price} />
//             ))
//         }
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;


// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';
// import hero from '../assets/frontend_assets/hero2.webp';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10)); // Get the latest 10 products
//   }, [products]);

//   return (
//     <div className='my-10'>
//       <div className='text-center py-8 text-3xl'>
//         <Title text1="LATEST" text2="COLLECTIONS" />
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//           Beauty creams nourish and hydrate the skin, promoting a radiant and healthy appearance
//         </p>
//       </div>

//       {/* Rendering latest products */}
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {latestProducts.map((item) => (
//           <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
//         ))}
//       </div>

//       <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-10">
//         {/* Background Image Section */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url(${hero})`, // Correctly use the imported hero image
//           }}
//         >
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>

//         {/* Text Overlay Section */}
//         <div className="relative z-10 h-full flex flex-col justify-center items-start text-left text-white px-10 md:px-20 lg:px-40">
//           <h5 className="text-xs md:text-sm uppercase tracking-wider mb-2">
//             Create Your Daily Rituals With Us
//           </h5>
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             Self-Care Specials at <br /> 40% Off
//           </h1>
//           <div className="mt-6">
//             <button className="flex items-center gap-2 px-6 py-2 text-sm md:text-base font-semibold bg-white text-black rounded-full shadow hover:bg-gray-200">
//               <span>Shop Now</span>
//               <span className="h-2 w-2 rounded-full bg-black"></span>
//             </button>
//           </div>
//         </div>

//         {/* Rewards Program */}
//         <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow">
//           <span className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full">
//             🎁
//           </span>
//           <p className="text-xs md:text-sm font-medium">82°E Rewards Program</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LatestCollection;







// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import ProductItem from './ProductItem';
// import hero from '../assets/frontend_assets/hero2.webp';
// import Hero3 from '../assets/frontend_assets/Hero_3.webp';
// import sectionImage from '../assets/frontend_assets/sectionimage.webp';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10)); // Get the latest 10 products
//   }, [products]);

//   // const handleShopNowClick = () => {
//   //   navigate('/collection'); // Navigate to the Collection page
//   // };
  
//   const handleAddToCart = () => {
//     if (size) {
//       addToCart(productData._id,);
//       navigate('/cart');
//     } else {
//       alert('Please select a size before adding to cart.');
//     }
//   };
//   return (
//     <div className="my-10">
//       {/* Latest Products Section */}
//       <div className="text-center py-8 text-3xl">
//         <Title text1="LATEST" text2="COLLECTIONS" />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//         Wrap yourself in the unmatched luxury of our latest soft silk saree collection
//         </p>
//       </div>

//       {/* Rendering Latest Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-10">
//         {latestProducts.map((item) => (
//           <ProductItem key={item._id} id={item._id} image={item.image[0]} name={item.name} price={item.price}/>
//         ))}
//       </div>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 md:py-16 bg-white">
//       {/* Left Image Section */}
//       <div className="relative w-full md:w-1/2">
//         <img src={sectionImage}
          
//           alt="New Arrival"
//           className="w-full h-auto object-cover rounded-lg shadow-lg"
//         />
//         <div className="absolute top-4 left-4 text-white">
//           {/* <h2 className="text-2xl md:text-3xl font-bold">Look 01</h2>
//           <p className="mt-2 text-xl md:text-2xl">New Arrival</p> */}
//         </div>
//       </div>

//       {/* Right Text Section */}
//       <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
//         <h1 className="text-2xl md:text-4xl font-bold leading-snug px-3">
//           {/* FRESH OFF THE RACK */}
//           <Title text2="FRESH OFF THE RACK" />
//         </h1>
//         <p className="mt-4 text-gray-600 text-lg md:text-xl px-3">
//           Wrap yourself in the unmatched luxury of our latest{" "}
//           <span className="font-semibold">soft silk saree collection</span>—
//           a harmonious blend of tradition and modernity. Each saree is
//           meticulously crafted with exquisite designs!
//         </p>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default LatestCollection;



// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { ShopContext } from '../context/ShopContext';
// import Title from './Title';
// import sectionImage from '../assets/frontend_assets/sectionimage.webp';

// const LatestCollection = () => {
//   const { products } = useContext(ShopContext);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const navigate = useNavigate(); // Initialize navigate

//   useEffect(() => {
//     setLatestProducts(products.slice(0, 10)); // Get the latest 10 products
//   }, [products]);

//   const handleAddToCart = (product) => {
//     // Your add-to-cart logic
//     alert(`Added ${product.name} to the cart!`);
//     navigate('/cart');
//   };

//   const handleImageClick = (productId) => {
//     navigate(`/product/${productId}`); // Navigate to the product page with product ID
//   };

//   return (
//     <div className="my-10">
//       {/* Latest Products Section */}
//       <div className="text-center py-8 text-3xl">
//         <Title text1="LATEST" text2="COLLECTIONS" />
//         <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
//           Wrap yourself in the unmatched luxury of our latest soft silk saree collection
//         </p>
//       </div>

//       {/* Rendering Latest Products */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-10">
//         {latestProducts.map((product) => (
//           <div
//             key={product._id}
//             className="relative overflow-hidden rounded-lg shadow-lg group" // Added group class for hover effects
//           >
//             {/* Image Clickable to Navigate */}
//             <img
//               src={product.image[0]}
//               alt={product.name}
//               className="w-full h-auto object-cover transition-transform duration-300 cursor-pointer"
//               onClick={() => handleImageClick(product._id)} // Navigate to product page
//             />

//             {/* Add to Cart Button */}
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 md:py-16 bg-white">
//         {/* Left Image Section */}
//         <div className="relative w-full md:w-1/2">
//           <img
//             src={sectionImage}
//             alt="New Arrival"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Right Text Section */}
//         <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
//           <h1 className="text-2xl md:text-4xl font-bold leading-snug px-3">
//             <Title text2="FRESH OFF THE RACK" />
//           </h1>
//           <p className="mt-4 text-gray-600 text-lg md:text-xl px-3">
//             Wrap yourself in the unmatched luxury of our latest{" "}
//             <span className="font-semibold">soft silk saree collection</span>—
//             a harmonious blend of tradition and modernity. Each saree is
//             meticulously crafted with exquisite designs!
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LatestCollection;



import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ShopContext } from '../context/ShopContext';  // Ensure this imports addToCart from context
import Title from './Title';
import sectionImage from '../assets/frontend_assets/sectionimage.webp';
import {ToastContainer, toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import styles for Toastify

const LatestCollection = () => {
  const { products, addToCart, currency } = useContext(ShopContext); // Get addToCart function from context
  const [latestProducts, setLatestProducts] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  

  useEffect(() => {
    setLatestProducts(products.slice(0, 10)); // Get the latest 10 products
  }, [products]);

  const handleAddToCart = (product) => {
    addToCart(product._id, 'default');  // Assuming size or variant is optional; adjust accordingly
    toast.success(`Added ${product.name} to the cart!`); // Replace alert with Toastify success notification
    // navigate('/cart');  // Navigate to the cart after adding to the cart
  };

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product page with product ID
  };
  

  return (
    <div className="my-10">
      {/* Latest Products Section */}
      <div className="text-center py-8 text-3xl">
        <Title text2="LATEST COLLECTIONS"/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Wrap yourself in the unmatched luxury of our latest soft silk saree collection
        </p>
      </div>

      {/* Rendering Latest Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-10">
        {latestProducts.map((product) => (
          <div
            key={product._id}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            {/* Image Clickable to Navigate */}
            <div className="relative group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300 ease-in-out">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-full h-auto object-cover transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(product._id)} // Navigate to product page
              />

              {/* Add to Cart Button on Top of Image */}
              <div className=" bg-black bg-opacity-50 text-center p-2 opacity-1 duration-500 ease-in-out">
  <button   onClick={() => handleAddToCart(product)}  >
    Add To Cart
  </button> 
</div>

              
            </div>

            {/* Product Details (Name & Price) */}
            <div className="text-center py-4">
              <p className="text-lg font-semibold text-gray-800">{product.name}</p>
              <p className="text-md text-gray-600">{currency} {product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-8 md:py-16 bg-white">
        {/* Left Image Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={sectionImage}
            alt="New Arrival"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug px-3">
            <Title text2="FRESH OFF THE RACK" />
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl px-3">
            Wrap yourself in the unmatched luxury of our latest{" "}
            <span className="font-semibold">soft silk saree collection</span>—
            a harmonious blend of tradition and modernity. Each saree is
            meticulously crafted with exquisite designs!
          </p>
        </div>
      </section>

      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default LatestCollection;

