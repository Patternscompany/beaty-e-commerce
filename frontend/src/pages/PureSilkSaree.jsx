// import React from 'react'

// const SilkSaree = () => {
//   return (
//     <div>
//     <h2>SilkSaree</h2>
//       </div>
//   )
// }

// export default SilkSaree

import React, { useContext } from "react";
import Title from "../components/Title";
import { ShopContext} from '../context/ShopContext'
import { useNavigate } from 'react-router-dom';

const PureSilkSaree = () => {
const { silkproduct,currency } = useContext(ShopContext)
const navigate = useNavigate();

const handleImageClick = (productId) => {
  navigate(`/product/${productId}`); // Navigate to the product page with product ID
};

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text2="SILK SAREE COLLECTION"/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Wrap yourself in the unmatched luxury of our latest soft silk saree collection
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-10">
      {silkproduct.map((product, index) => (
        <div div className="relative group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300 ease-in-out"
          
        >
          <img
            src={product.image[0]}
            alt={product.name}
            className="w-full h-auto object-cover transition-all duration-300 cursor-pointer"
            onClick={() => handleImageClick(product._id)}
      
          />
          <div className="text-center py-4">
              <p className="text-lg font-semibold text-gray-800">{product.name}</p>
              <p className="text-md text-gray-600">{currency} {product.price}</p>
            </div>
        </div>
      ))}
    </div>
</div>
  );
};

export default PureSilkSaree;
