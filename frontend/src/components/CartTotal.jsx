// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'

// const CartTotal = () => {

//     const {currency, delivery_fee, getCartAmount} = useContext(ShopContext)
//   return (
//     <div className='w-full'>
//         <div className='text-2xl'>
//             <text text1={'CART'} text2={'TOTAL'}/>
//         </div>
//         <div className='flex flex-col gap-2 mt-2 text-sm'>
//             <div className='flex justify-between'>
//                 <p>suntotal</p>
//                 <p>{currency}{getCartAmount()}.00</p>
//             </div>
//             <hr/>
//             <div className='flex justify-between'>
//              <p>shipping Fee</p>
//              <p>{currency}{delivery_fee}</p>
//             </div>
//             <hr/>
//             <div className='flex justify-between'>
//                 <b>Total</b>
//                 <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</b>
//             </div>

//         </div>

    
//     </div>
//   )
// }

// export default CartTotal


import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  
  const subtotal = getCartAmount();
  const total = subtotal + delivery_fee;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <span>CART TOTAL</span>
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{subtotal.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency}{delivery_fee.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency}{total.toFixed(2)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;