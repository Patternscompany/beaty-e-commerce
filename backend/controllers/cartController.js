// import userModel from "../models/userModel.js"


// // add products to use cart
// const addToCart = async (req,res) => {

//     try {
//         const {userId,itemId,size} = req.body

//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData

//         if(cartData[itemId]){
//             if(cartData[itemId][size]){
//                 cartData[itemId][size] += 1
//             }else{
//                 cartData[itemId][size] = 1
//             }
//         }else{
//             cartData[itemId] = {}
//             cartData[itemId][size] = 1

//         }
//         await userModel.findByIdAndUpdate(userId,{cartData})
//         res.json({success:true,message:'Added To Cart'})


        
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})

        

        
//     }

// }

// // update products to user cart

// const updateCart = async (req,res) => {

//     try {
//         const {userId,itemId,size,quantity} = req.body
        
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData

//         cartData[itemId][size] = quantity


//         await userModel.findByIdAndUpdate(userId,{cartData})
//         res.json({success:true,message:'Cart Updated'})
        
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
        
//     }

// }

// // get user cart data 
// const getUserCart = async (req,res) => {

//     try {
//         const {userId} = req.body

//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData

//         res.json({success:true,cartData})

        
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:error.message})
        
//     }

// }

// export {addToCart, updateCart,getUserCart}





// import userModel from "../models/userModel.js";

// Add products to user cart
// const addToCart = async (req, res) => {
//   try {
//     const { userId, itemId, size } = req.body;

//     if (!userId || !itemId || !size) {
//       return res.status(400).json({ success: false, message: "Missing required fields" });
//     }

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {};

//     if (!cartData[itemId]) {
//       cartData[itemId] = {};
//     }

//     if (cartData[itemId][size]) {
//       cartData[itemId][size] += 1;
//     } else {
//       cartData[itemId][size] = 1;
//     }

//     await userModel.findByIdAndUpdate(userId, { cartData });
//     res.json({ success: true, message: "Added to cart" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


import userModel from "../models/userModel.js";
const addToCart = async (req, res) => {
    try {
      const { userId, itemId, size } = req.body;
  
      // Validate input
      if (!userId || !itemId || !size) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
      }
  
      // Fetch user data
      const userData = await userModel.findById(userId);
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Initialize cartData if not present
      let cartData = userData.cartData || {};
  
      // Update cart data
      if (!cartData[itemId]) {
        cartData[itemId] = {};
      }
  
      // Increment quantity if product with same size exists, otherwise initialize with 1
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
  
      // Save updated cartData to the database
      await userModel.findByIdAndUpdate(userId, { cartData });
      res.json({ success: true, message: "Added to cart", cartData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  

// Update products in user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    if (!userId || !itemId || !size || quantity === undefined) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      return res.status(404).json({ success: false, message: "Item not found in cart" });
    }

    if (quantity <= 0) {
      // Remove the size if quantity is 0 or less
      delete cartData[itemId][size];
      // Remove the item if no sizes are left
      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }
    } else {
      cartData[itemId][size] = quantity;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


const getUserCart = async (req, res) => {
    try {
      const { userId } = req.body;
  
      // Validate input
      if (!userId) {
        return res.status(400).json({ success: false, message: "User ID is required" });
      }
  
      // Fetch user data
      const userData = await userModel.findById(userId);
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      // Get cartData or initialize it as empty object if undefined
      const cartData = userData.cartData || {};
  
      res.json({ success: true, cartData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  

export { addToCart, updateCart, getUserCart };
