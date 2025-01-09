// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/frontend_assets/assets'

// const Product = () => {

//   const {productId} = useParams()
//   const {products, currency,addToCart ,navigate} = useContext(ShopContext)
//   const [productData,setProductData] = useState(false)
//   const [image,setImage] = useState('')
//   const [size, setSize] = useState('')


//   const fetchProductData = async () =>{
//     products.map((item)=>{
//       if(item._id === productId){
//         setProductData(item)
//         setImage(item.image[0])
//         return null;
//       }
//     })

//   }

//   useEffect(()=>{
//     fetchProductData()
//   },[productId])


//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//     <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//    {/* Product images */}
//    <div className='flex-1 flex flex flex-col-reverse gap-3 sm:flex-row'>
//     <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full '>
//    {
//     productData.image.map((item,index)=>(
//       <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
//     ))
//    }
//     </div>
//     <div className='w-full sm:w-[80%]'>
//       <img className='w-full h-auto' src={image} alt=''/>
//     </div>
//    </div>
// {/* product info */}
// <div className='flex-1'>
//   <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//   <div className='flex item-center gap-1 mt-2'>
//     <img className='w-3 4' src={assets.star_icon} alt="" />
//     <img className='w-3 4' src={assets.star_icon} alt="" />
//     <img className='w-3 4' src={assets.star_icon} alt="" />
//     <img className='w-3 4' src={assets.star_icon} alt="" />
//     <img className='w-3 4' src={assets.star_dull_icon} alt="" />
//     <p className='pl-2'>(122)</p>
//   </div>
//  <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//  <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//  <div className='flex flex-col gap-4 my-4'>
//   <p>Select Size</p> 
//   <div className='flex gap-2'>
//     {productData.sizes.map((item, index)=>(
//       <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500': ''}` } key ={index}>{item}</button>
//     ))}
//   </div>
//  </div>
//  <button onClick={()=>addToCart(productData._id,size)} onClic={(()=>navigate('/cart'))} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
//  <hr className='mt-8 sm:w-4/5'/>
//  <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//   <p>100% orginal products</p>
//   <p>Cash on devlivery is Avilable for this products</p>
//   <p>Easy return Exchange Avilable within 7 days</p>
//  </div>
// </div>
//     </div>

//      {/* Desription */}


//     </div>
//   ) : <div className='opacity-0'></div>
// }

// export default Product




// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/frontend_assets/assets';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart, navigate } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');

//   // Fetch product data based on productId
//   const fetchProductData = () => {
//     const foundProduct = products.find(item => item._id === productId);
//     if (foundProduct) {
//       setProductData(foundProduct);
//       setImage(foundProduct.image[0]); // Set the first image as default
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]); // Added products to dependency array

//   // Function to handle adding to cart and navigating
//   const handleAddToCart = () => {
//     if (size) {
//       addToCart(productData._id, size);
//       navigate('/cart');
//     } else {
//       alert('Please select a size before adding to cart.');
//     }
//   };

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/* Product images */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full'>
//             {productData.image.map((item, index) => (
//               <img src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
//             ))}
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img className='w-full h-auto' src={image} alt={productData.name} />
//           </div>
//         </div>

//         {/* Product info */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             {[...Array(5)].map((_, index) => (
//               <img key={index} className='w-3.5' src={index < 4 ? assets.star_icon : assets.star_dull_icon} alt="" />
//             ))}
//             <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-4'>
//             <p>Select Size</p>
//             <div className='flex gap-2'>
//               {productData.sizes.map((item, index) => (
//                 <button 
//                   onClick={() => setSize(item)} 
//                   className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} 
//                   key={index}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <button 
//             onClick={handleAddToCart} 
//             className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
//           >
//             ADD TO CART
//           </button>
//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>100% original products</p>
//             <p>Cash on delivery is available for this product</p>
//             <p>Easy return exchange available within 7 days</p>
//           </div>
//         </div>
//       </div>

//       {/* Description */}
//     </div>
//   ) : (
//     <div className='opacity-0'></div> // You might want to show a loading indicator here instead
//   );
// };

// export default Product;














// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/frontend_assets/assets';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart, navigate } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   // const [size, setSize] = useState('');
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [color, setColor] = useState('');

//   // Fetch product data based on productId
//   // const fetchProductData = () => {
//   //   const foundProduct = products.find((item) => item._id === productId);
//   //   if (foundProduct) {
//   //     setProductData(foundProduct);
//   //     setImage(foundProduct.image[0]); // Set the first image as default

//   //     // Fetch related products
//   //     const related = products.filter(
//   //       (item) => item.category === foundProduct.category && item._id !== foundProduct._id
//   //     );
//   //     setRelatedProducts(related);
//   //   }
//   // };
//   const fetchProductData = () => {
//     const foundProduct = products.find((item) => item._id === productId);
//     if (foundProduct) {
//       setProductData(foundProduct);
//       setImage(foundProduct.image[0]); // Set the first image as default
  
//       // Fetch related products with the exact same name as the current product
//       const related = products.filter(
//         (item) =>
//           item.name === foundProduct.name && item._id !== foundProduct._id
//       );
//       setRelatedProducts(related);
//     }
//   };
  

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const handleAddToCart = () => {
//     if (size) {
//       addToCart(productData._id, size);
//       navigate('/cart');
//     } else {
//       alert('Please select a size before adding to cart.');
//     }
//   };
 

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/* Product details */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full'>
//             {productData.image.map((item, index) => (
//               <img
//                 src={item}
//                 key={index}
//                 className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
//                 onClick={() => setImage(item)}
//               />
//             ))}
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img className='w-full h-auto' src={image} alt={productData.name} />
//           </div>
//         </div>
//         {/* Product Info */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             {[...Array(5)].map((_, index) => (
//               <img
//                 key={index}
//                 className='w-3.5'
//                 src={index < 4 ? assets.star_icon : assets.star_dull_icon}
//                 alt=''
//               />
//             ))}
//             <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>
//             {currency}
//             {productData.price}
//           </p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-4'>
//             {/* <p>Select Size</p> */}
//             {/* <div className='flex gap-2'>
//               {productData.sizes.map((item, index) => (
//                 <button
//                   onClick={() => setSize(item)}
//                   className={`border py-2 px-4 bg-gray-100 ${
//                     item === size ? 'border-orange-500' : ''
//                   }`}
//                   key={index}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div> */}
//           </div>
//           {/* <div className='flex flex-col gap-4 my-4'>
//             <p>Select Color</p>
//             <div className='flex gap-2'>
//               {productData.colors?.map((item, index) => (
//                 <button
//                   onClick={() => setColor(item)}
//                   className={`border py-2 px-4 bg-gray-100 ${
//                     item === color ? 'border-orange-500' : ''
//                   }`}
//                   key={index}
//                   style={{ backgroundColor: item }} // Set button background color
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div> */}
//           <div className='flex flex-col gap-4 my-4'>
//   {/* <p>Select Color</p> */}
//   <div className='flex gap-2'>
//     {productData.colors?.map((item, index) => (
//       <button
//         onClick={() => setColor(item)}  // This correctly updates the color state
//         className={`border py-2 px-4 bg-gray-100 ${item === color ? 'border-orange-500 bg-opacity-75' : ''}`}  // Add a background color change when selected
//         key={index}
//         style={{ backgroundColor: item }}  // Set button background color
//       >
//         {item}
//       </button>
//     ))}
//   </div>
// </div>

//           <button
//             onClick={handleAddToCart}
//             className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
//           >
//             ADD TO CART
//           </button>
//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>100% original products</p>
//             <p>Cash on delivery is available for this product</p>
//             <p>Easy return exchange available within 7 days</p>
//           </div>
//         </div>
//       </div>

//       {/* Related Products Section */}
//       <div className='mt-12'>
//         <h2 className='text-xl font-semibold mb-6'>Related Products</h2>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//           {relatedProducts.map((product) => (
//             <div
//               key={product._id}
//               className='border p-4 flex flex-col items-center text-center cursor-pointer'
//             >
//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={product.image[0]}
//                   alt={product.name}
//                   className='w-full h-auto mb-4'
//                 />
//                 <h3 className='text-lg font-medium'>{product.name}</h3>
//                 <p className='text-gray-500 mt-2'>
//                   {currency}
//                   {product.price}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className='opacity-0'></div>
//   );
// };

// export default Product;



// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/frontend_assets/assets';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
// // import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faCircle } from '@fortawesome/free-solid-svg-icons';


// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart, navigate } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [color, setColor] = useState('');

//   const fetchProductData = () => {
//     const foundProduct = products.find((item) => item._id === productId);
//     if (foundProduct) {
//       setProductData(foundProduct);
//       setImage(foundProduct.image[0]); // Set the first image as default

//       // Fetch related products with the same name
//       const related = products.filter(
//         (item) =>
//           item.name === foundProduct.name && item._id !== foundProduct._id
//       );
//       setRelatedProducts(related);
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const handleAddToCart = () => {
//     addToCart(productData._id);
//     navigate('/cart');
//   };

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/* Product details */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full'>
//             {productData.image.map((item, index) => (
//               <img
//                 src={item}
//                 key={index}
//                 className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
//                 onClick={() => setImage(item)}
//               />
//             ))}
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img className='w-full h-auto' src={image} alt={productData.name} />
//           </div>
//         </div>
//         {/* Product Info */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             {[...Array(5)].map((_, index) => (
//               <img
//                 key={index}
//                 className='w-3.5'
//                 src={index < 4 ? assets.star_icon : assets.star_dull_icon}
//                 alt=''
//               />
//             ))}
//             <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>
//             {currency}
//             {productData.price}
//           </p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-4'>
//             {/* Color selection */}
//             <div className='flex gap-2'>
//               {productData.colors?.map((item, index) => (
//                 <button
//                   onClick={() => setColor(item)}
//                   className={`border py-2 px-4 bg-gray-100 ${
//                     item === color ? 'border-orange-500 bg-opacity-75' : ''
//                   }`}
//                   key={index}
//                   style={{ backgroundColor: item }}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
//           >
//             ADD TO CART
//           </button>
//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>100% original products</p>
//             <p>Cash on delivery is available for this product</p>
//             <p>Easy return exchange available within 7 days</p>
//           </div>
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p> <FontAwesomeIcon icon={faPlus} />PRODUCT FEATURE</p>
//             <ul>
//               <li> <FontAwesomeIcon icon={faCircle} />Length: 6.5 meters, Width: 46 inches</li>
//               <li> <FontAwesomeIcon icon={faCircle} />Length: 6.5 meters, Width: 46 inches</li>
//               <li><FontAwesomeIcon icon={faCircle} />Length: 6.5 meters, Width: 46 inches</li>
//               <li><FontAwesomeIcon icon={faCircle} />Length: 6.5 meters, Width: 46 inches</li>
//             </ul>
//           </div>
//         </div>
//       </div>
      

//       {/* Related Products Section */}
//       <div className='mt-12'>
//         <h2 className='text-xl font-semibold mb-6'>Related Products</h2>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//           {relatedProducts.map((product) => (
//             <div
//               key={product._id}
//               className='border p-4 flex flex-col items-center text-center cursor-pointer'
//             >
//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={product.image[0]}
//                   alt={product.name}
//                   className='w-full h-auto mb-4'
//                 />
//                 <h3 className='text-lg font-medium'>{product.name}</h3>
//                 <p className='text-gray-500 mt-2'>
//                   {currency}
//                   {product.price}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className='opacity-0'></div>
//   );
// };

// export default Product;

// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/frontend_assets/assets';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faCircle} from '@fortawesome/free-solid-svg-icons';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart, navigate } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [color, setColor] = useState('');
  
//   // State to manage visibility of product features
//   const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
//   const [isWashingCareVisible, setIsWashingCareVisible] = useState(false);

//   const fetchProductData = () => {
//     const foundProduct = products.find((item) => item._id === productId);
//     if (foundProduct) {
//       setProductData(foundProduct);
//       setImage(foundProduct.image[0]); // Set the first image as default

//       // Fetch related products with the same name
//       const related = products.filter(
//         (item) =>
//           item.name === foundProduct.name && item._id !== foundProduct._id
//       );
//       setRelatedProducts(related);
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const handleAddToCart = () => {
//     addToCart(productData._id);
//     navigate('/cart');
//   };

//   // Toggle visibility of product features
//   const toggleFeaturesVisibility = () => {
//     setIsFeaturesVisible((prevState) => !prevState);
//   };

//   const toggleWashingCareVisibility = () => {
//     setIsWashingCareVisible((prevState) => !prevState);
//   };

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/* Product details */}
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full'>
//             {productData.image.map((item, index) => (
//               <img
//                 src={item}
//                 key={index}
//                 className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
//                 onClick={() => setImage(item)}
//               />
//             ))}
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img className='w-full h-auto' src={image} alt={productData.name} />
//           </div>
//         </div>
//         {/* Product Info */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             {[...Array(5)].map((_, index) => (
//               <img
//                 key={index}
//                 className='w-3.5'
//                 src={index < 4 ? assets.star_icon : assets.star_dull_icon}
//                 alt=''
//               />
//             ))}
//             <p className='pl-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>
//             {currency}
//             {productData.price}
//           </p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-4'>
//             {/* Color selection */}
//             <div className='flex gap-2'>
//               {productData.colors?.map((item, index) => (
//                 <button
//                   onClick={() => setColor(item)}
//                   className={`border py-2 px-4 bg-gray-100 ${item === color ? 'border-orange-500 bg-opacity-75' : ''}`}
//                   key={index}
//                   style={{ backgroundColor: item }}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>
//           <button
//             onClick={handleAddToCart}
//             className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
//           >
//             ADD TO CART
//           </button>
//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>100% original products</p>
//             <p>Cash on delivery is available for this product</p>
//             <p>Easy return exchange available within 7 days</p>
//           </div>

//           {/* Product Features Section */}
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p onClick={toggleFeaturesVisibility} className="cursor-pointer">
//               <FontAwesomeIcon icon={faPlus} />
//               PRODUCT FEATURE
//             </p>

         
//             {isFeaturesVisible && (
//              <ul>
//              <li className="flex items-center gap-2">
//                <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
//                <span>Length: 6.5 meters, Width: 46 inches</span>
//              </li>
//              <li className="flex items-center gap-2">
//                <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
//                <span>Comes with zari stripe running blouse</span>
//              </li>
//              <li className="flex items-center gap-2">
//                <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
//                <span>Fabric: Luxurious Mashru Pure Banarasi Silk</span>
//              </li>
//              <li className="flex items-center gap-2">
//                <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
//                <span>Adorned with handmade tassels at the loose ends</span>
//              </li>
//              <li className="flex items-center gap-2">
//              <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
              
//                <span>Provides a soft and comfortable feel</span>
//              </li>
//              <li className="flex items-center gap-2">
//                <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
//                <span>Pre-washed for your convenience</span>
//              </li>
//              <li className="flex items-center gap-2">
//                <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
//                <span>Offers intricate detailing with a luxurious finish</span>
//              </li>
//              <li className="flex items-center gap-2">
//                <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
//                <span>Comes with free edging on both sides of the saree</span>
//              </li>
//              <li className="flex items-center gap-2">
//                <FontAwesomeIcon icon={faCircle}  style={{ fontSize: '6px' }}/>
//                <span>Exclusively designed by our expert designers and made in Varanasi</span>
//              </li>
//            </ul>
           
//             )}
//           </div>

//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//         <p onClick={toggleFeaturesVisibility}><FontAwesomeIcon icon={faPlus} />WASHING & CARE INSTRUCTION
//         STYLING TIPS</p>
//         {isFeaturesVisible && (
//         <ul>
//           <li>Suitable for dry cleaning.</li>
//           <li>Can be hand-washed with cold water.</li>
//           <li>Avoid soaking or bleaching.</li>
//           <li>Gently spin to remove excess water.</li>
//           <li>Dry in a shaded area, away from direct sunlight.</li>
//           <li>Iron with medium steam.</li>
//           <li>Store your saree in a cotton bag or box when not in use.</li>
//           </ul>
//         )}
//       </div>

//         </div>
//       </div>
      

//       {/* Related Products Section */}
//       <div className='mt-12'>
//         <h2 className='text-xl font-semibold mb-6'>Related Products</h2>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//           {relatedProducts.map((product) => (
//             <div
//               key={product._id}
//               className='border p-4 flex flex-col items-center text-center cursor-pointer'
//             >
//               <Link to={`/product/${product._id}`}>
//                 <img
//                   src={product.image[0]}
//                   alt={product.name}
//                   className='w-full h-auto mb-4'
//                 />
//                 <h3 className='text-lg font-medium'>{product.name}</h3>
//                 <p className='text-gray-500 mt-2'>
//                   {currency}
//                   {product.price}
//                 </p>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className='opacity-0'></div>
//   );
// };

// export default Product;



import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCircle} from '@fortawesome/free-solid-svg-icons';
import { preconnect } from 'react-dom';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, navigate } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [color, setColor] = useState('');
  
  // State to manage visibility of product features and washing care
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const [isWashingCareVisible, setIsWashingCareVisible] = useState(false);
  const [isstylingVisible ,setIsStylingVisible] = useState(false)

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Set the first image as default

      // Fetch related products with the same name
      const related = products.filter(
        (item) =>
          item.name === foundProduct.name && item._id !== foundProduct._id
      );
      setRelatedProducts(related);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = () => {
    addToCart(productData._id);
    navigate('/cart');
  };

  // Toggle visibility of product features
  const toggleFeaturesVisibility = () => {
    setIsFeaturesVisible((prevState) => !prevState);
  };

  // Toggle visibility of washing care instructions
  const toggleWashingCareVisibility = () => {
    setIsWashingCareVisible((prevState) => !prevState);
  };

  const toggleStylingVisibility = () => {
    setIsStylingVisible((prevState) => !prevState);
  };

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product details */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[19.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt={productData.name} />
          </div>
        </div>
        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                className='w-3.5'
                src={index < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=''
              />
            ))}
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>
            {currency}
            {productData.price}
          </p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-4'>
            {/* Color selection */}
            <div className='flex gap-2'>
              {productData.colors?.map((item, index) => (
                <button
                  onClick={() => setColor(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === color ? 'border-orange-500 bg-opacity-75' : ''}`}
                  key={index}
                  style={{ backgroundColor: item }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original products</p>
            <p>Cash on delivery is available for this product</p>
            <p>Easy return exchange available within 7 days</p>
          </div>

          {/* Product Features Section */}
          <div className="text-sm text-white-500 mt-5 flex flex-col gap-1">
  <p onClick={toggleFeaturesVisibility} className="cursor-pointer">
    <FontAwesomeIcon icon={faPlus} />
    PRODUCT FEATURE
  </p>
  <ul
    className={`transition-all duration-300 ease-in-out overflow-hidden ${
      isFeaturesVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Length: 6.5 meters, Width: 46 inches</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Comes with zari stripe running blouse</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Fabric: Luxurious Mashru Pure Banarasi Silk</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Adorned with handmade tassels at the loose ends</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Provides a soft and comfortable feel</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Pre-washed for your convenience</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Offers intricate detailing with a luxurious finish</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Comes with free edging on both sides of the saree</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Exclusively designed by our expert designers and made in Varanasi</span>
    </li>
  </ul>
</div>


          {/* WASHING & CARE INSTRUCTION */}
          
  <div className="text-sm text-white-500 mt-5 flex flex-col">
  <p onClick={toggleWashingCareVisibility} className="cursor-pointer">
    <FontAwesomeIcon icon={faPlus} />
    WASHING & CARE INSTRUCTION STYLING TIPS
  </p>
  <ul
    className={`transition-all duration-500 ease-in-out overflow-hidden ${
      isWashingCareVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Suitable for dry cleaning.</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Can be hand-washed with cold water.</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Avoid soaking or bleaching.</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Gently spin to remove excess water.</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Dry in a shaded area, away from direct sunlight.</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Iron with medium steam.</span>
    </li>
    <li className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCircle} style={{ fontSize: '6px' }} />
      <span>Store your saree in a cotton bag or box when not in use.</span>
    </li>
  </ul>
</div>

  {/* styling Instruction Section */}
  <div className="text-sm text-white-500 mt-5 flex flex-col">
  <p onClick={toggleStylingVisibility} className="cursor-pointer">
    <FontAwesomeIcon icon={faPlus} />
    STYLING TIPS
  </p>
  <ul
    className={`transition-all duration-500 ease-in-out overflow-hidden ${
      isstylingVisible ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
    }`}
  >
    <li className="flex items-start gap-2">
      <FontAwesomeIcon
        icon={faCircle}
        className="text-white-500"
        style={{ fontSize: '6px', marginTop: '10px' }}
      />
      <span className="text-black-700 text-sm leading-relaxed">
        No need to fret, I'm here to spill the best style tips for rocking that Banarasi silk saree!
        Imagine pairing that stunning red Banarasi with a sleeveless sweetheart neckline golden blouse—talk about a match made in fashion heaven!
        Drape your saree with effortless open pleats, and pin them in place with ease for that perfect flow.
        For makeup, go for a chic nude look with a touch of nude-brown lipstick and kajal to make your eyes pop.
        Now, let's talk accessories—emerald jewelry will provide a striking contrast and elevate your ensemble's beauty.
        As for your hair, indulge in a blow-dry and add some curls for a captivating wavy effect, letting it cascade down with grace.
        And don't you dare forget your bangles and clutch purse! Slip into your favorite heels, and voila, you're all set to make a dazzling entrance at any special occasion.
      </span>
    </li>
  </ul>
</div>


  


        </div>
      </div>

      {/* Related Products Section */}
      <div className='mt-12'>
        <h2 className='text-xl font-semibold mb-6'>Related Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {relatedProducts.map((product) => (
            <div
              key={product._id}
              className='border p-4 flex flex-col items-center text-center cursor-pointer'
            >
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image[0]}
                  alt={product.name}
                  className='w-full h-auto mb-4'
                />
                <h3 className='text-lg font-medium'>{product.name}</h3>
                <p className='text-gray-500 mt-2'>
                  {currency}
                  {product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
